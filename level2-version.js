const VERSION='2.0.0';
const REVIEW_DATE='17.08.2026';

function patchVersion(){
  const footer=document.querySelector('footer span');
  if(footer) footer.textContent=`Version ${VERSION} · 18 dossiers · revue fiscale ciblée et sources principales contrôlées le ${REVIEW_DATE}.`;
  document.querySelectorAll('#attestationLayer .attest-version').forEach(p=>{p.textContent=`Version du parcours ${VERSION} · sources principales contrôlées le ${REVIEW_DATE}`});
}

const observer=new MutationObserver(patchVersion);
observer.observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',patchVersion);
