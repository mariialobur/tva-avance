const VERSION='2.3.1';
const REVIEW_DATE='19.08.2026';
const FOOTER_TEXT=`Version ${VERSION} · 18 dossiers · 2 exercices de synthèse déclaration · variantes contrôlées · sources principales contrôlées le ${REVIEW_DATE}.`;
const ATTEST_TEXT=`Version du parcours ${VERSION} · sources principales contrôlées le ${REVIEW_DATE}`;

function patchVersion(){
  const footer=document.querySelector('footer span');
  if(footer&&footer.textContent!==FOOTER_TEXT) footer.textContent=FOOTER_TEXT;
  const progress=document.querySelector('#globalProgress');
  if(progress&&/cas$/.test(progress.textContent)) progress.textContent=progress.textContent.replace(/cas$/,'dossiers');
  document.querySelectorAll('#attestationLayer .attest-version').forEach(p=>{if(p.textContent!==ATTEST_TEXT)p.textContent=ATTEST_TEXT});
}

const observer=new MutationObserver(patchVersion);
observer.observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',patchVersion);
