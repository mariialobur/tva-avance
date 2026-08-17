import { CASES } from './data.js';
import { loadState } from './store.js';
import { EXAM_SIZE, PASS_SCORE, PROJECT_URL, QUESTION_BANK } from './evaluation-data.js';

const STORAGE_KEY='tva_avance_final_evaluation_v2';
const shuffle=a=>{const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let attempt=null,lastResult=loadResult();

function loadResult(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')}catch{return null}}
function saveResult(r){const previous=lastResult;if(previous?.passed&&(!r.passed||Number(previous.score)>Number(r.score)))return;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(r))}catch{}lastResult=r}
function masteredCount(){const s=loadState();return CASES.filter(c=>(s.records?.[c.id]?.bestEvaluationScore||0)===100).length}

function launcher(){
  const host=document.querySelector('#finalEvaluation');if(!host)return;
  const done=masteredCount(),total=CASES.length,unlocked=done===total;
  host.innerHTML=`<section class="final-launcher"><div><span class="eyebrow">Validation finale · Niveau 2</span><h2>Évaluation finale — TVA suisse · pratique avancée</h2><p>${unlocked?`Les ${total} dossiers ont été validés à 100 % en mode Évaluation. Le test final comporte ${EXAM_SIZE} questions tirées aléatoirement, sans aide.`:`Validez d’abord les ${total} dossiers à 100 % en mode Évaluation. Progression: ${done}/${total}.`}</p></div><div class="final-actions"><button class="btn primary" id="startFinal" ${unlocked?'':'disabled'}>Commencer l’évaluation finale</button>${lastResult?.passed&&unlocked?'<button class="btn" id="openAttestation">Attestation de parcours</button>':''}</div></section>`;
  document.querySelector('#startFinal')?.addEventListener('click',startExam);document.querySelector('#openAttestation')?.addEventListener('click',openNameDialog)
}
function startExam(){if(masteredCount()!==CASES.length)return;const chosen=shuffle(QUESTION_BANK).slice(0,EXAM_SIZE).map(q=>({...q,options:shuffle(q.o.map((label,i)=>({label,correct:i===q.a})))}));attempt={questions:chosen,startedAt:new Date().toISOString()};renderExam()}
function setIsolation(active){[...document.body.children].forEach(node=>{if(node.id==='avanceExamLayer')return;active?node.setAttribute('inert',''):node.removeAttribute('inert')})}
function renderExam(){
  const layer=document.createElement('div');layer.id='avanceExamLayer';layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');
  layer.innerHTML=`<div class="exam-shell"><div class="exam-head"><div><span class="eyebrow">Mode examen · sans aide · Niveau 2</span><h1 tabindex="-1">Évaluation finale — TVA avancée</h1><p>${EXAM_SIZE} questions · réussite dès ${PASS_SCORE}/${EXAM_SIZE} (${Math.round(PASS_SCORE/EXAM_SIZE*100)} %)</p></div><button class="icon-btn" id="closeExam" aria-label="Fermer">×</button></div><form id="examForm">${attempt.questions.map((q,idx)=>`<fieldset class="exam-q"><legend>${idx+1}. ${esc(q.q)}</legend>${q.options.map((o,oi)=>`<label><input type="radio" name="q${idx}" value="${oi}"><span>${esc(o.label)}</span></label>`).join('')}</fieldset>`).join('')}<div class="exam-submit-row"><p id="examWarning" role="alert"></p><button class="btn primary exam-submit" type="submit">Remettre l’évaluation</button></div></form></div>`;
  document.body.appendChild(layer);setIsolation(true);layer.querySelector('h1').focus();layer.querySelector('#closeExam').onclick=closeExam;layer.querySelector('#examForm').onsubmit=submitExam;window.scrollTo(0,0)
}
function closeExam(){document.querySelector('#avanceExamLayer')?.remove();setIsolation(false)}
function submitExam(e){
  e.preventDefault();const form=new FormData(e.currentTarget);const missing=attempt.questions.filter((_,i)=>form.get('q'+i)===null).length;
  if(missing){document.querySelector('#examWarning').textContent=`Répondez aux ${EXAM_SIZE} questions avant de remettre l’évaluation.`;return}
  const review=[];let score=0;attempt.questions.forEach((q,i)=>{const selected=Number(form.get('q'+i)),chosen=q.options[selected],correct=Boolean(chosen?.correct);if(correct)score++;review.push({q:q.q,selected:chosen?.label||'',correctAnswer:q.options.find(o=>o.correct)?.label||'',correct,why:q.w,s:q.s,u:q.u})});
  const result={score,total:EXAM_SIZE,percent:Math.round(score/EXAM_SIZE*100),passed:score>=PASS_SCORE,date:new Date().toISOString(),review};saveResult(result);renderReview(result);launcher()
}
function renderReview(result){
  const shell=document.querySelector('.exam-shell');shell.innerHTML=`<div class="exam-head"><div><span class="eyebrow">Résultat · Niveau 2</span><h1>${result.passed?'Évaluation réussie':'Évaluation à reprendre'}</h1><p><strong>${result.score}/${result.total}</strong> · ${result.percent}% · seuil ${PASS_SCORE}/${EXAM_SIZE}${lastResult?.passed&&lastResult.score>result.score?` · meilleur résultat conservé: ${lastResult.score}/${EXAM_SIZE}`:''}</p></div><button class="icon-btn" id="closeExam" aria-label="Fermer">×</button></div><div class="exam-review">${result.review.map((r,i)=>`<article class="review ${r.correct?'ok':'bad'}"><h3>${i+1}. ${esc(r.q)}</h3><p><strong>Votre réponse:</strong> ${esc(r.selected)}</p>${r.correct?'':`<p><strong>Réponse attendue:</strong> ${esc(r.correctAnswer)}</p>`}<p>${esc(r.why)}</p><a href="${esc(r.u)}" target="_blank" rel="noopener noreferrer">${esc(r.s)} ↗</a></article>`).join('')}<div class="exam-bottom"><button class="btn" id="retryExam">Nouvelle tentative</button>${result.passed||lastResult?.passed?'<button class="btn primary" id="attestAfter">Attestation de parcours</button>':''}</div></div>`;
  shell.querySelector('#closeExam').onclick=closeExam;shell.querySelector('#retryExam').onclick=()=>{closeExam();startExam()};shell.querySelector('#attestAfter')?.addEventListener('click',()=>{closeExam();openNameDialog()});window.scrollTo(0,0)
}
function openNameDialog(){
  if(!lastResult?.passed||masteredCount()!==CASES.length)return;let d=document.querySelector('#nameDialog');
  if(!d){d=document.createElement('dialog');d.id='nameDialog';d.className='name-dialog';d.innerHTML=`<form method="dialog"><div class="dialog-head"><h2>Attestation de parcours — Niveau 2</h2><button value="cancel" class="icon-btn" aria-label="Fermer">×</button></div><p>Le nom est utilisé uniquement dans votre navigateur. L’identité n’est pas vérifiée et aucune donnée n’est envoyée par ce site.</p><label>Nom et prénom<input id="participantName" maxlength="90" autocomplete="name" required></label><div class="dialog-actions"><button value="cancel" class="btn">Annuler</button><button id="makeAttestation" value="default" class="btn primary">Générer l’attestation</button></div></form>`;document.body.appendChild(d);d.querySelector('#makeAttestation').onclick=e=>{e.preventDefault();const name=d.querySelector('#participantName').value.trim();if(name.length<2)return;d.close();renderAttestation(name)}}d.showModal();setTimeout(()=>d.querySelector('#participantName')?.focus(),0)
}
function renderAttestation(name){
  const score=lastResult.score,date=new Intl.DateTimeFormat('fr-CH',{dateStyle:'long'}).format(new Date(lastResult.date));
  const themes=[
    ['Grand livre & revue','Rapprochement comptabilité-décompte, reconstruction du ch. 200 et détection d’erreurs de préparation.'],
    ['International','Lieu de prestation, impôt sur les acquisitions, importations de biens, DTe et monnaies étrangères.'],
    ['Impôt préalable','Attribution directe, double affectation, déduction partielle, corrections, réductions et dégrèvements.'],
    ['Immobilier','Option, prestations exclues, affectation et valeur résiduelle immobilière sur 20 ans.'],
    ['Financements & groupe','Subventions, sponsoring, dons et fonctionnement d’un groupe TVA.'],
    ['Relations particulières','Personnes étroitement liées, valeur entre tiers indépendants et compensations de créances.'],
    ['Changements de méthode','TDFN ↔ méthode effective, valeurs résiduelles, ch. 410 et 415.'],
    ['Contrôle & clôture','Pièces justificatives, audit du dossier, rectification, concordance annuelle et état corrigé.']
  ];
  const wrap=document.createElement('div');wrap.id='attestationLayer';wrap.innerHTML=`<div class="attest-actions"><button class="btn" id="closeAttest">Fermer</button><button class="btn primary" id="printAttest">Imprimer / enregistrer en PDF</button></div><section class="attest-page page-one"><div class="attest-kicker">Parcours pédagogique indépendant</div><h1>ATTESTATION DE PARCOURS</h1><h2>TVA suisse · méthode effective · Niveau 2</h2><p class="attest-name">${esc(name)}</p><p class="attest-main">a validé les <strong>${CASES.length} dossiers avancés en mode Évaluation à 100 %</strong> et a réussi l’auto-évaluation finale du Niveau 2.</p><div class="attest-stats"><div><strong>${CASES.length} / ${CASES.length}</strong><span>dossiers validés</span></div><div><strong>${score} / ${EXAM_SIZE}</strong><span>évaluation finale</span></div><div><strong>${date}</strong><span>date du résultat</span></div></div><div class="attest-themes">${themes.map(t=>`<span>${esc(t[0])}</span>`).join('')}</div><p class="attest-url">${PROJECT_URL}</p><p class="attest-disclaimer">Cette attestation confirme uniquement l’achèvement de ce parcours d’entraînement indépendant et la réussite de son auto-évaluation. Elle ne constitue ni un diplôme, ni un titre professionnel, ni une certification reconnue ou accréditée. Le projet est indépendant et sans affiliation avec l’AFC/ESTV ou le SEFRI. Le nom est saisi par le participant; l’identité et le résultat ne sont pas vérifiables par un tiers auprès du site.</p></section><section class="attest-page page-two"><h1>RELEVÉ DU PARCOURS</h1><p class="attest-sub">Thèmes travaillés dans la pratique avancée de la méthode effective.</p><div class="attest-person"><strong>${esc(name)}</strong><span>${CASES.length} dossiers validés · résultat final ${score}/${EXAM_SIZE}</span></div><div class="attest-grid">${themes.map(t=>`<article><h3>${esc(t[0])}</h3><p>${esc(t[1])}</p></article>`).join('')}</div><div class="attest-reference"><strong>Référentiel pédagogique</strong><p>LTVA · OTVA · prototype du décompte et publications AFC. Les sources officielles et la pratique en vigueur restent déterminantes pour un dossier réel.</p><p>Sources principales contrôlées le 17.08.2026 · ${PROJECT_URL}</p></div><p class="attest-disclaimer">Ce relevé décrit les thèmes abordés. Il n’atteste pas de compétences professionnelles, d’un diplôme ou d’une certification reconnue. Il est généré localement à partir de la progression enregistrée dans le navigateur.</p></section>`;
  document.body.appendChild(wrap);document.body.classList.add('attestation-open');wrap.querySelector('#closeAttest').onclick=()=>{wrap.remove();document.body.classList.remove('attestation-open')};wrap.querySelector('#printAttest').onclick=()=>window.print()
}
window.addEventListener('avance-progress',launcher);window.addEventListener('DOMContentLoaded',launcher);