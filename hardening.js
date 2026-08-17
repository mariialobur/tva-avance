import { CASES, FIELD_META, SOURCE_LIBRARY } from './data.js';
import { validateCaseArithmetic } from './logic.js';
import { QUESTION_BANK, EXAM_SIZE } from './evaluation-data.js';

const PARCOURS_VERSION='1.1.0';
const REVIEW_DATE='17.08.2026';

function loadHardeningStyles(){
  if(document.querySelector('link[data-hardening-css]')) return;
  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href=`hardening.css?v=${PARCOURS_VERSION}`;
  link.dataset.hardeningCss='true';
  document.head.appendChild(link);
}

function patchStaticCopy(){
  const disclaimer=document.querySelector('.disclaimer');
  if(disclaimer && disclaimer.innerHTML.includes('Le dépôt réel')){
    disclaimer.innerHTML=disclaimer.innerHTML.replace('Le dépôt réel','La remise réelle');
  }
  const footerVersion=document.querySelector('footer span');
  if(footerVersion){
    footerVersion.textContent=`Version ${PARCOURS_VERSION} · revue fiscale ciblée et sources principales contrôlées le ${REVIEW_DATE}.`;
  }
  document.querySelectorAll('#memoDialog details').forEach(block=>{
    const summary=block.querySelector('summary');
    if(summary?.textContent.trim()==='Concordance annuelle et rectification'){
      const p=block.querySelector('p');
      if(p) p.innerHTML='La concordance annuelle rapproche les décomptes et les comptes annuels. Une erreur isolée d’une période mensuelle, trimestrielle ou semestrielle se corrige au moyen du décompte rectificatif de la période concernée. Les erreurs constatées lors de l’établissement des comptes doivent être corrigées au plus tard dans la période de décompte pendant laquelle tombe le <strong>180e jour</strong> après la fin de l’exercice. Si aucun décompte rectificatif de concordance n’est parvenu à l’AFC dans les <strong>240 jours</strong>, l’AFC part du principe que les décomptes remis sont complets et corrects et que la période est finalisée. Le repère des 240 jours ne doit donc pas être compris comme une autorisation d’attendre pour corriger une erreur déjà identifiée.';
    }
  });
  const sources=document.querySelector('.sources');
  if(sources && !sources.querySelector('[data-hardening-source]')){
    const a=document.createElement('a');
    a.href='https://www.estv.admin.ch/fr/tva-decompte-de-rectification';
    a.target='_blank';a.rel='noopener';a.dataset.hardeningSource='true';
    a.textContent='AFC — décompte rectificatif ↗';
    sources.appendChild(a);
  }
}

function auditData(){
  const errors=[];
  const caseIds=new Set();
  CASES.forEach(c=>{
    if(caseIds.has(c.id)) errors.push(`Identifiant de cas dupliqué: ${c.id}`);
    caseIds.add(c.id);
    (c.fields||[]).forEach(k=>{
      if(!FIELD_META[k]) errors.push(`Cas ${c.id}: rubrique inconnue ${k}`);
      if(!(k in (c.expected||{}))) errors.push(`Cas ${c.id}: valeur attendue absente pour ${k}`);
    });
    (c.sourceKeys||[]).forEach(k=>{
      if(!SOURCE_LIBRARY[k]) errors.push(`Cas ${c.id}: source inconnue ${k}`);
    });
    const q=c.qualification;
    if(!q || !Array.isArray(q.options) || !Number.isInteger(q.correct) || q.correct<0 || q.correct>=q.options.length){
      errors.push(`Cas ${c.id}: qualification invalide`);
    }
    validateCaseArithmetic(c).errors.forEach(e=>errors.push(e));
  });

  const questionIds=new Set();
  QUESTION_BANK.forEach(q=>{
    if(questionIds.has(q.id)) errors.push(`Question dupliquée: ${q.id}`);
    questionIds.add(q.id);
    if(!Array.isArray(q.o) || q.o.length<2 || !Number.isInteger(q.a) || q.a<0 || q.a>=q.o.length){
      errors.push(`Question ${q.id||'?'}: structure invalide`);
    }
  });
  if(QUESTION_BANK.length<EXAM_SIZE) errors.push(`Banque d'examen insuffisante: ${QUESTION_BANK.length}/${EXAM_SIZE}`);
  return errors;
}

function showIntegrityBanner(errors){
  if(!errors.length) return;
  console.error('[TVA Avancé] Contrôle d’intégrité:', errors);
  const banner=document.createElement('div');
  banner.className='integrity-alert';
  banner.setAttribute('role','alert');
  banner.innerHTML=`<strong>Contrôle technique bloquant.</strong> Une incohérence a été détectée dans les données du parcours. L’évaluation finale est à éviter jusqu’à correction.<details><summary>Détails techniques</summary><ul>${errors.map(e=>`<li>${String(e).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}</li>`).join('')}</ul></details>`;
  const anchor=document.querySelector('.disclaimer')||document.body.firstElementChild;
  anchor?.insertAdjacentElement('afterend',banner);
}

function addAuditQuestions(){
  const additions=[
    {
      id:'annual180',
      q:'Lors de l’établissement des comptes annuels, des erreurs TVA sont constatées. Quel repère de finalisation l’AFC rappelle-t-elle?',
      o:[
        'Corriger au plus tard dans la période de décompte pendant laquelle tombe le 180e jour après la fin de l’exercice',
        'Attendre 240 jours avant toute correction',
        'Corriger uniquement au prochain exercice',
        'Aucun délai particulier n’existe'
      ],
      a:0,
      w:'L’AFC rappelle la finalisation au plus tard dans la période de décompte pendant laquelle tombe le 180e jour après la fin de l’exercice.',
      s:'AFC — finalisation / art. 72 LTVA',
      u:'https://www.estv.admin.ch/fr/tva-prolongation-du-delai-remise-du-decompte'
    },
    {
      id:'annual240',
      q:'Que signifie le repère des 240 jours dans la page AFC sur la concordance annuelle?',
      o:[
        'Si aucun décompte rectificatif n’est parvenu dans les 240 jours, l’AFC part du principe que les décomptes remis sont complets et corrects et que la période est finalisée',
        'C’est le délai ordinaire pour attendre avant de corriger une erreur connue',
        'C’est le délai de paiement de chaque décompte trimestriel',
        'Il remplace le repère de finalisation lié au 180e jour'
      ],
      a:0,
      w:'Les 240 jours décrivent la présomption de l’AFC en l’absence de concordance rectificative; ce repère ne doit pas être présenté comme un délai permettant de différer une correction connue.',
      s:'AFC — concordance annuelle',
      u:'https://www.estv.admin.ch/fr/tva-concordance-annuelle'
    },
    {
      id:'rectificationOnline',
      q:'Depuis le 1er janvier 2025, comment l’AFC demande-t-elle d’effectuer les corrections d’un décompte mensuel, trimestriel ou semestriel isolé?',
      o:[
        'En ligne via le service Portail AFC, au moyen du décompte rectificatif de la période concernée',
        'Uniquement par courrier papier',
        'En ajoutant la différence au décompte suivant',
        'Uniquement dans la concordance annuelle'
      ],
      a:0,
      w:'L’AFC indique que les corrections d’une période isolée s’effectuent au moyen du décompte rectificatif de cette période et, depuis 2025, en ligne via le Portail AFC.',
      s:'AFC — décompte de rectification TVA',
      u:'https://www.estv.admin.ch/fr/tva-decompte-de-rectification'
    }
  ];
  additions.forEach(q=>{
    if(!QUESTION_BANK.some(x=>x.id===q.id)) QUESTION_BANK.push(q);
  });
}

function normalizeVisibleText(root=document){
  const scope=root.nodeType===1?root:document;
  scope.querySelectorAll?.('button').forEach(btn=>{
    if(btn.textContent.includes('Оuvrir')) btn.textContent=btn.textContent.replaceAll('Оuvrir','Ouvrir');
  });
}

let allowExamClose=false;
function examInProgress(){
  return Boolean(document.querySelector('#avanceExamLayer #examForm'));
}
function confirmExamExit(){
  return !examInProgress() || window.confirm('Quitter l’évaluation finale ? Les réponses de cette tentative ne seront pas conservées.');
}

document.addEventListener('click',e=>{
  const btn=e.target.closest?.('#avanceExamLayer #closeExam');
  if(!btn || allowExamClose) return;
  if(!confirmExamExit()){
    e.preventDefault();
    e.stopImmediatePropagation();
  }
},true);

document.addEventListener('keydown',e=>{
  if(e.key!=='Escape') return;
  const layer=document.querySelector('#avanceExamLayer');
  if(!layer) return;
  e.preventDefault();
  if(!confirmExamExit()) return;
  const close=layer.querySelector('#closeExam');
  if(close){
    allowExamClose=true;
    close.click();
    allowExamClose=false;
  }
},true);

function stampAttestation(){
  document.querySelectorAll('#attestationLayer .attest-page').forEach(page=>{
    if(page.querySelector('.attest-version')) return;
    const p=document.createElement('p');
    p.className='attest-version';
    p.textContent=`Version du parcours ${PARCOURS_VERSION} · sources principales contrôlées le ${REVIEW_DATE}`;
    const disclaimer=page.querySelector('.attest-disclaimer');
    disclaimer?.insertAdjacentElement('beforebegin',p);
  });
}

const observer=new MutationObserver(records=>{
  records.forEach(r=>r.addedNodes.forEach(node=>{
    if(node.nodeType!==1) return;
    normalizeVisibleText(node);
  }));
  stampAttestation();
});
observer.observe(document.documentElement,{childList:true,subtree:true});

addAuditQuestions();
document.addEventListener('DOMContentLoaded',()=>{
  loadHardeningStyles();
  patchStaticCopy();
  showIntegrityBanner(auditData());
  normalizeVisibleText(document);
  stampAttestation();
});
