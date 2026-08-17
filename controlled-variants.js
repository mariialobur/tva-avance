import './ux-v3.js';
import { CASES } from './data.js';

const STORAGE_KEY='tva_avance_case_a_variants_v1';
const SOURCE_URL='https://www.estv.admin.ch/fr/impot-sur-les-acquisitions-tva';
const variants=[
  {
    id:'AA',
    short:'A-A · Non inscrit',
    title:'Prestataire étranger non inscrit à la TVA suisse',
    facts:'CloudTech Sàrl, assujettie en Suisse, achète CHF 20’000 de services cloud régis par le principe du lieu du destinataire. Le prestataire a son siège à l’étranger, n’est pas inscrit au registre suisse de la TVA et facture sans TVA suisse.',
    question:'Quel est le premier réflexe TVA dans cette variante ?',
    options:[
      'Déclarer la contre-prestation et l’impôt au ch. 383',
      'Traiter automatiquement la facture comme une facture suisse avec IP ordinaire',
      'Déduire le montant au ch. 221',
      'Ignorer l’opération puisqu’aucune TVA ne figure sur la facture'
    ],
    correct:0,
    why:'Pour une prestation étrangère visée par le principe du lieu du destinataire, les conditions de l’impôt sur les acquisitions doivent être examinées. Dans cette variante, l’assujetti suisse doit déclarer l’acquisition au ch. 383.'
  },
  {
    id:'AB',
    short:'A-B · Inscrit CH',
    title:'Même service, fournisseur valablement inscrit en Suisse',
    facts:'Même service cloud. Cette fois, le fournisseur étranger est valablement inscrit au registre suisse de la TVA et la facture correcte indique séparément la TVA suisse à 8,1 %. Les conditions du droit à déduction de CloudTech sont remplies.',
    question:'CloudTech doit-elle déclarer une seconde fois la même base au ch. 383 ?',
    options:[
      'Oui, toute facture d’un fournisseur étranger va toujours au ch. 383',
      'Non; dans cette variante, la TVA suisse facturée est traitée comme impôt préalable ordinaire et la même acquisition n’est pas redéclarée au ch. 383',
      'Oui, mais uniquement au ch. 221',
      'Non, et aucune déduction d’IP n’est jamais possible'
    ],
    correct:1,
    why:'Le statut TVA concret du fournisseur fait partie de la qualification. Une facture suisse correctement établie par un fournisseur valablement inscrit ne doit pas être transformée mécaniquement en acquisition tax sur la même opération.'
  },
  {
    id:'AC',
    short:'A-C · Prestation exclue',
    title:'Prestataire non inscrit, mais prestation exclue',
    facts:'Le fournisseur est à l’étranger et n’est pas inscrit à la TVA suisse. Toutefois, la prestation acquise est, dans les hypothèses de la variante, une prestation exclue du champ de l’impôt et aucune option n’est exercée.',
    question:'Le simple fait que le fournisseur soit étranger suffit-il pour déclencher le ch. 383 ?',
    options:[
      'Oui, toute prestation étrangère est soumise au ch. 383',
      'Non; l’impôt sur les acquisitions n’est pas dû si la prestation est exclue du champ de l’impôt ou exonérée dans les conditions applicables',
      'Oui, mais au taux de 3,8 %',
      'Oui, uniquement parce que le fournisseur n’est pas inscrit'
    ],
    correct:1,
    why:'L’AFC précise que l’impôt sur les acquisitions n’est pas dû lorsque les prestations de services concernées sont exclues du champ de l’impôt ou exonérées. Le mot «étranger» ne suffit donc jamais à lui seul.'
  }
];

let activeId='AA';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function load(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}catch{return{}}}
function save(state){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch{}}
function currentCase(){const select=document.querySelector('#caseSelect');const i=Number(select?.value);return Number.isInteger(i)?CASES[i]:null}
function currentMode(){return document.querySelector('[data-mode].active')?.dataset.mode||'learn'}
function masteredCount(){const done=load().done||{};return variants.filter(v=>done[v.id]).length}

function render(){
  document.querySelector('#controlledVariantsA')?.remove();
  if(currentCase()?.id!=='A'||currentMode()==='evaluate')return;
  const host=document.querySelector('#caseInfo');if(!host)return;
  const done=load().done||{};
  const active=variants.find(v=>v.id===activeId)||variants[0];
  const panel=document.createElement('section');panel.id='controlledVariantsA';panel.className='controlled-variants';
  panel.innerHTML=`<div class="cv-head"><div><span class="cv-eyebrow">Variantes contrôlées · Dossier A</span><h2>Fournisseur étranger ≠ automatiquement ch. 383</h2><p>Un seul fait déterminant change: <strong>statut TVA du fournisseur</strong> ou <strong>nature de la prestation</strong>. Le but est de casser le réflexe «SaaS étranger = toujours acquisition tax».</p></div><div class="cv-progress"><strong>${masteredCount()}/3</strong><span>variantes maîtrisées</span></div></div>
  <div class="cv-tabs" role="tablist" aria-label="Variantes du dossier A">${variants.map(v=>`<button type="button" role="tab" aria-selected="${v.id===active.id}" class="${v.id===active.id?'active':''} ${done[v.id]?'done':''}" data-cv-tab="${v.id}">${done[v.id]?'✓ ':''}${esc(v.short)}</button>`).join('')}</div>
  <article class="cv-card"><h3>${esc(active.title)}</h3><p class="cv-facts">${esc(active.facts)}</p><fieldset><legend>${esc(active.question)}</legend>${active.options.map((o,i)=>`<label><input type="radio" name="cv-${active.id}" value="${i}"><span>${esc(o)}</span></label>`).join('')}</fieldset><div class="cv-actions"><button type="button" class="btn primary" data-cv-check="${active.id}">Vérifier la variante</button><a href="${SOURCE_URL}" target="_blank" rel="noopener noreferrer">AFC — impôt sur les acquisitions ↗</a></div><div class="cv-feedback" aria-live="polite"></div></article>`;
  host.insertAdjacentElement('afterend',panel);
  panel.querySelectorAll('[data-cv-tab]').forEach(btn=>btn.addEventListener('click',()=>{activeId=btn.dataset.cvTab;render()}));
  panel.querySelector('[data-cv-check]')?.addEventListener('click',()=>check(active,panel));
}

function check(v,panel){
  const feedback=panel.querySelector('.cv-feedback');
  const selected=panel.querySelector(`input[name="cv-${v.id}"]:checked`);
  if(!selected){feedback.className='cv-feedback warn';feedback.textContent='Choisissez d’abord une réponse.';return}
  const ok=Number(selected.value)===v.correct;
  if(ok){const state=load();state.done={...(state.done||{}),[v.id]:true};save(state);feedback.className='cv-feedback ok';feedback.innerHTML=`<strong>✓ Correct.</strong> ${esc(v.why)}`;setTimeout(render,500)}
  else{feedback.className='cv-feedback bad';feedback.innerHTML=`<strong>✕ À revoir.</strong> ${esc(v.why)}`}
}

function schedule(){setTimeout(render,0)}
document.addEventListener('DOMContentLoaded',render);
document.addEventListener('change',e=>{if(e.target?.id==='caseSelect')schedule()});
document.addEventListener('click',e=>{if(e.target.closest?.('[data-case], [data-mode], [data-prev], [data-next]'))schedule()});
window.addEventListener('storage',e=>{if(e.key===STORAGE_KEY)render()});
