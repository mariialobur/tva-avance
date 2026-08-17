function onI(key,val){
  S.uv[key]=val;
  if(S.validated){S.validated=false;const el=document.getElementById(`fi_${key}`);if(el)el.className='fi ue';}
  document.getElementById('resWrap').innerHTML='';
  updCmp();
}
function selCase(n){
  S.cur=n;S.uv={};S.validated=false;persist();
  document.getElementById('resWrap').innerHTML='';
  document.getElementById('rectWrap').innerHTML='';
  renderTabs();renderSB();renderForm();
  window.scrollTo(0,0);
}

function vrfy(){
  const c=CASES[S.cur];S.validated=true;
  const FN={ca200:'Ch.200 — CA total',ca205:'Ch.205 \u2014 Prestations \u00e0 soi-m\u00eame',ca220:'Ch.220 \u2014 Acquisitions \u00e9trang\u00e8res',ca221:'Ch.221 \u2014 Exportations (exon\u00e9r\u00e9es)',ca225:'Ch.225 \u2014 Exclusions du champ',ca230:'Ch.230 \u2014 Diminutions',ca302:'Ch.302 \u2014 CA taux normal 8,1%',ca312:'Ch.312 \u2014 CA taux r\u00e9duit 2,6%',ca342:'Ch.342 \u2014 CA taux sp\u00e9cial 3,8%',ip400:'Ch.400 \u2014 Imp\u00f4t pr\u00e9alable total',ip405:'Ch.405 \u2014 Correction IP',ip410:'Ch.410 \u2014 R\u00e9duction IP (subventions)',ip420:'Ch.420 \u2014 IP acquisitions'};
  let ok=0,tot=0,fbs=[];
  Object.entries(c.F).forEach(([k,fd])=>{
    if(!fd.e)return;tot++;
    const uv=pn(S.uv[k]),ans=fd.a||0,tol=fd.tol||1,correct=Math.abs(uv-ans)<=tol;
    if(correct)ok++; else { const th=fieldTheme(k); S.errors[th]=(S.errors[th]||0)+1; }
    fbs.push({k,name:FN[k]||k,uv,ans,ok:correct,expl:c.E[k]||''});
  });
  const v=cmp(),sc=tot>0?Math.round(ok/tot*100):0;
  S.scores[S.cur]=sc;persist();
  const scol=sc>=80?'#1a6b2e':sc>=50?'#8a5200':'#9f4a3f';
  const slbl=sc>=80?'Excellent!':sc>=50?'Bien \u2014 quelques corrections':'\u00c0 retravailler';
  document.getElementById('resWrap').innerHTML=`
    <div class="res-card">
      <div class="res-hdr">
        <div class="res-sc" style="background:${scol}18;border:2px solid ${scol};color:${scol};">${sc}%</div>
        <div><div class="res-title" style="color:${scol};">${slbl} &mdash; ${ok}/${tot} r&eacute;ponses correctes</div>
          <div class="res-sub">Ch.500: ${chf(Math.abs(v.res))} ${v.res>=0?'(&agrave; payer &agrave; l\'AFC)':'(cr&eacute;dit en faveur de l\'assujetti)'}</div>
        </div>
      </div>
      <div>${fbs.map(f=>`<div class="fb-item"><div class="fb-row"><div>
        <div class="fb-name">${f.ok?'&#10003;':'&#10007;'} ${f.name}<span class="${f.ok?'tag-ok':'tag-er'}">${f.ok?'OK':'INCORRECT'}</span></div>
        <div class="fb-val">Votre r&eacute;ponse: <strong>${chf(f.uv)}</strong>${!f.ok?` &middot; R&eacute;ponse attendue: <strong>${chf(f.ans)}</strong>`:''}</div>
        </div></div>
        ${f.expl?`<div class="fb-expl">${f.expl.split('\n').map((l,i)=>i===0?l:`<div class="fb-formula">${l}</div>`).join('')}</div>`:''}</div>`).join('')}
      </div>
      ${c.E.result?`<div class="afc-note"><strong style="color:#2f5f73;">&#128216; Point AFC / R&eacute;sultat:</strong> ${c.E.result}</div>`:''}
      ${c.E.correction?`<div class="afc-rect"><strong style="color:#9f4a3f;">&#9888; Proc&eacute;dure rectificatif:</strong> ${c.E.correction}</div>`:''}
      <div class="res-legal"><strong>Base l&eacute;gale:</strong> ${c.leg} &mdash;
        <a href="https://www.fedlex.admin.ch/eli/cc/2009/615/fr" target="_blank">LTVA RS 641.20</a> &middot;
        <a href="https://www.fedlex.admin.ch/eli/cc/2009/624/fr" target="_blank">OTVA RS 641.201</a> &middot;
        <a href="https://www.efd.admin.ch/fr/taux-dinteret-impots-redevances" target="_blank">DFF RS 631.014</a> &middot;
        <a href="https://eportal.admin.ch/start" target="_blank">ePortal AFC</a> &middot;
        <a href="https://www.uid.admin.ch" target="_blank">V&eacute;rifier N&deg; TVA</a>
      </div>
    </div>`;
  renderForm();renderTabs();renderSB();
  setTimeout(()=>document.getElementById('resWrap').scrollIntoView({behavior:'smooth',block:'start'}),120);
}

function sol(){
  if(!confirm('Afficher la solution ?\nCe cas sera enregistr\u00e9 avec 0%. Essayez d\'abord par vous-m\u00eame.'))return;
  Object.entries(CASES[S.cur].F).forEach(([k,fd])=>{if(fd.e)S.uv[k]=fd.a;});
  S.validated=false;S.scores[S.cur]=0;persist();
  document.getElementById('resWrap').innerHTML='';
  renderForm();renderTabs();renderSB();
  setTimeout(()=>{document.querySelectorAll('input.fi.ue').forEach(el=>{el.style.background='#f0fff4';el.style.borderColor='#1a6b2e';});},60);
}
function rst(){S.uv={};S.validated=false;document.getElementById('resWrap').innerHTML='';document.getElementById('rectWrap').innerHTML='';renderForm();renderSB();}

renderTabs();renderSB();renderForm();
