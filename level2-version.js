const VERSION='2.0.0';
const REVIEW_DATE='17.08.2026';
const FOOTER_TEXT=`Version ${VERSION} · 18 dossiers · revue fiscale ciblée et sources principales contrôlées le ${REVIEW_DATE}.`;
const ATTEST_TEXT=`Version du parcours ${VERSION} · sources principales contrôlées le ${REVIEW_DATE}`;

function patchVersion(){
  const footer=document.querySelector('footer span');
  if(footer&&footer.textContent!==FOOTER_TEXT) footer.textContent=FOOTER_TEXT;
  document.querySelectorAll('#attestationLayer .attest-version').forEach(p=>{if(p.textContent!==ATTEST_TEXT)p.textContent=ATTEST_TEXT});
}

const observer=new MutationObserver(patchVersion);
observer.observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',patchVersion);
