

CASES.forEach(c=>{
  if(!c.audit){c.audit={};}
  if(c.id===0)c.audit={risks:['Oublier ch.220 alors que le prestataire étranger n\'est pas assujetti en Suisse.','Déduire ch.420 à 100% sans vérifier l\'affectation taxable.','Confondre TVA étrangère sur facture et TVA suisse déductible.'],proofs:['Facture AWS / contrat cloud','Preuve fournisseur étranger non assujetti CH','Justification usage professionnel taxable','Calcul ch.220 et ch.420']};
  if(c.id===1)c.audit={risks:['Appliquer un pro-rata automatique sans documentation.','Ne pas distinguer dividendes et management fees.','Oublier l\'impact des activités exclues sur l\'IP.'],proofs:['Comptes dividendes / participations','Contrats management fees','Clé de correction IP approuvée','Documentation de la méthode retenue']};
  if(c.id===2)c.audit={risks:['Option TVA mal documentée sur les baux commerciaux.','Correction IP basée sur le CA alors que la surface/affectation serait plus défendable.','Confusion logement exclu / location commerciale optée.'],proofs:['Baux et clauses option TVA','Plan des surfaces et affectation','Factures travaux par objet','Tableau de correction IP']};
  if(c.id===3)c.audit={risks:['Traiter une subvention comme une simple diminution commerciale.','Oublier la réduction IP ch.410.','Ne pas documenter la nature juridique du financement.'],proofs:['Décision de subvention','Contrat / convention publique','Calcul de réduction IP','Lien avec charges financées']};
  if(c.id===4)c.audit={risks:['Ne pas éliminer les flux intragroupe.','Inclure à tort les prestations internes dans le CA imposable.','Oublier la responsabilité et le périmètre du groupe TVA.'],proofs:['Décision groupe TVA / périmètre','Liste membres et représentant','Réconciliation flux internes/tiers','Décomptes consolidés']};
  if(c.id===6)c.audit={risks:['Qualifier automatiquement tout client étranger comme prestation hors Suisse/exonérée sans analyser l\'art. 8 LTVA.','Oublier la correction IP sur activités exclues.','Mélanger taux hébergement, restauration et prestations de formation.'],proofs:['Contrats clients et pays/siège','Preuves de lieu de prestation','Justificatifs d\'activité exclue','Tableau ventilation par taux et statuts TVA']};
  if(c.id===7)c.audit={risks:['Accumulation de plusieurs risques: reverse charge, export, subvention, IP et taux.','Erreur de ventilation globale non détectée avant dépôt.','Absence de dossier de preuves pour le contrôle annuel.'],proofs:['Dossier complet par rubrique','Calculs TVA vérifiés par second regard','Concordance annuelle TVA','Notes de justification pour chaque correction']};
});


const S={cur:0,uv:{},validated:false,scores:{},mode:'guided',errors:{},exam:{}};
try{const sv=JSON.parse(localStorage.getItem('tva_av13')||'{}');if(sv.scores)S.scores=sv.scores;if(sv.errors)S.errors=sv.errors;if(sv.exam)S.exam=sv.exam;if(sv.mode)S.mode=sv.mode;if(typeof sv.cur==='number')S.cur=sv.cur;}catch(e){}
const fmt=n=>{if(n===null||n===undefined||n==='')return'\u2014';return Math.abs(Math.round(n)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"'");};
const chf=n=>'CHF\u00a0'+fmt(n);
const pn=s=>{if(s===null||s===undefined||s==='')return 0;const n=parseFloat(String(s).replace(/['\s]/g,'').replace(',','.'));return isNaN(n)?0:n;};
const RC={v:'#2d7a3a',o:'#8a5200',r:'#9f4a3f',n:'#111'};
const RCB={v:{bg:'#eaf5ee',c:'#2d7a3a'},o:{bg:'#fff3e0',c:'#8a5200'},r:{bg:'#fff1ee',c:'#9f4a3f'},n:{bg:'#1a1a1a',c:'#e0e0d0'}};

function cmp(){
  const c=CASES[S.cur],f=c.F;
  const g=k=>f[k]&&f[k].e?pn(S.uv[k]):(f[k]?f[k].v||0:0);
  const ca200=g('ca200'),ca205=g('ca205'),ca220=g('ca220'),ca221=g('ca221'),ca225=g('ca225'),ca230=g('ca230');
  const ca280=ca221+ca225+ca230,ca289=ca200+ca205+ca220-ca280;
  const ca302=g('ca302'),ca312=g('ca312'),ca342=g('ca342');
  const t302=ca302*.081,t312=ca312*.026,t342=ca342*.038,t220=ca220*.081;
  const tvaDue=t302+t312+t342+t220;
  const ip400=g('ip400'),ip405=g('ip405'),ip410=g('ip410'),ip420=g('ip420');
  const ipNet=ip400-ip405-ip410+ip420;
  return{ca200,ca205,ca220,ca221,ca225,ca230,ca280,ca289,ca302,ca312,ca342,t302,t312,t342,t220,tvaDue,ip400,ip405,ip410,ip420,ipNet,res:tvaDue-ipNet};
}
function edFields(){return Object.entries(CASES[S.cur].F).filter(([,d])=>d.e).map(([k])=>k);}
function filledCnt(){return edFields().filter(k=>S.uv[k]!==undefined&&S.uv[k]!=='').length;}
function persist(){try{localStorage.setItem('tva_av13',JSON.stringify({scores:S.scores,cur:S.cur,mode:S.mode,errors:S.errors,exam:S.exam}));}catch(e){}}


function setMode(m){S.mode=m;persist();renderForm();}
function activeMode(m){return S.mode===m?'a':'';}
function fieldTheme(k){
  if(['ca220','ip420'].includes(k))return 'Reverse charge';
  if(['ip405'].includes(k))return 'Correction IP';
  if(['ip410'].includes(k))return 'Subventions';
  if(['ca221'].includes(k))return 'Export / hors Suisse';
  if(['ca225'].includes(k))return 'Prestations exclues';
  if(['ca302','ca312','ca342'].includes(k))return 'Taux / ventilation';
  if(['ip400'].includes(k))return 'Impôt préalable';
  return 'CA total';
}
function renderPrecheck(){
  const c=CASES[S.cur],v=cmp(),ed=new Set(edFields()),msg=[];
  const vent=v.ca302+v.ca312+v.ca342;
  const gap=Math.round(v.ca289-vent);
  if(Math.abs(gap)>2)msg.push(`Écart de ventilation: ch.289 = ${chf(v.ca289)}, mais 302+312+342 = ${chf(vent)}. Écart: ${chf(gap)}.`);
  if(ed.has('ca220') && v.ca220>0 && (!ed.has('ip420') || pn(S.uv.ip420)===0))msg.push('Reverse charge: ch.220 est présent. Vérifier si le ch.420 est récupérable selon l\'affectation réelle.');
  if((v.ca225>0 || c.title.includes('Holding') || c.title.includes('Immobilier')) && ed.has('ip405') && pn(S.uv.ip405)===0)msg.push('Activité exclue détectée: une correction IP ch.405 est probablement nécessaire.');
  if(v.ca230>0 && c.title.toLowerCase().includes('subvention'))msg.push('Attention: une subvention ne se traite pas comme un rabais commercial ordinaire. Vérifier ch.410 / réduction IP.');
  if(c.id===5)msg.push('TDFN: contrôler le seuil sur le CA TVA comprise et ne pas inscrire un IP forfaitaire au ch.400.');
  if(!msg.length)return '';
  return `<div class="precheck"><strong>Contrôle avancé avant validation</strong><br>${msg.map(m=>`• ${m}`).join('<br>')}</div>`;
}
function renderAudit(){
  const c=CASES[S.cur];
  const audit=c.audit||{};
  const risks=audit.risks||[
    'Documenter la qualification TVA retenue, surtout si la rubrique est simplifiée pédagogiquement.',
    'Vérifier que la clé de correction IP reflète l\'affectation réelle et reste défendable en cas de contrôle AFC.',
    'Contrôler la concordance entre comptes annuels, décomptes trimestriels et justificatifs.'
  ];
  const proofs=audit.proofs||[
    'Factures conformes avec N° TVA / UID si IP déduit',
    'Contrats, décisions, baux, preuves d\'export ou de lieu de prestation',
    'Tableau de calcul TVA et clé de correction IP',
    'Trace de revue annuelle / concordance TVA'
  ];
  return `<div class="audit-card"><h3>Contrôle fiscal du dossier <span class="pill-risk">ADVANCED</span></h3><div class="audit-grid"><div><strong>Risques à maîtriser</strong><ul>${risks.map(x=>`<li>${x}</li>`).join('')}</ul></div><div><strong>Preuves à conserver</strong><ul>${proofs.map(x=>`<li>${x}</li>`).join('')}</ul></div></div></div>`;
}
function renderAnalytics(){
  const items=Object.entries(S.errors||{}).sort((a,b)=>b[1]-a[1]);
  if(!items.length)return `<div class="analytics-card"><h3>Statistique erreurs avancées</h3>Aucune erreur enregistrée pour l'instant. Après validation, les thèmes faibles apparaîtront ici.</div>`;
  return `<div class="analytics-card"><h3>Statistique erreurs avancées</h3><div class="analytics-list">${items.map(([k,v])=>`<span class="analytics-chip ${v>=2?'bad':''}">${k}: ${v}</span>`).join('')}</div></div>`;
}
function renderExam(){
  if(CASES[S.cur].id!==8)return '';
  const qs=[
    ['q1','Un achat AWS Irlande sans TVA suisse doit-il être analysé en ch.220 ?', 'oui'],
    ['q2','Une activité exclue permet-elle toujours de récupérer 100% de l\'IP ?', 'non'],
    ['q3','Une subvention publique peut-elle entraîner une réduction IP ch.410 ?', 'oui'],
    ['q4','Sous TDFN, l\'IP réel se déduit-il au ch.400 comme en méthode effective ?', 'non'],
    ['q5','Les flux intragroupe sont-ils éliminés dans un groupe TVA ?', 'oui'],
    ['q6','Le taux hébergement 3,8% s\'applique-t-il à la restauration ?', 'non'],
    ['q7','Le seuil TDFN se contrôle-t-il TVA comprise ?', 'oui'],
    ['q8','La concordance annuelle TVA est-elle un vrai contrôle professionnel ?', 'oui']
  ];
  return `<div class="exam-card"><h3>Mini-examen final avancé — concordance et pratique fiduciaire</h3>${qs.map(([id,q])=>`<div class="exam-q"><strong>${q}</strong><label><input type="radio" name="${id}" value="oui"> Oui</label><label><input type="radio" name="${id}" value="non"> Non</label></div>`).join('')}<button class="btn btn-p" style="max-width:260px" onclick="checkExam()">Vérifier le mini-examen</button><div id="examResult"></div></div>`;
}
function checkExam(){
  const ans={q1:'oui',q2:'non',q3:'oui',q4:'non',q5:'oui',q6:'non',q7:'oui',q8:'oui'};
  let ok=0,tot=0,miss=[];
  Object.entries(ans).forEach(([k,a])=>{tot++;const el=document.querySelector(`input[name="${k}"]:checked`);if(el&&el.value===a)ok++;else miss.push(k);});
  const pct=Math.round(ok/tot*100);S.exam[S.cur]=pct;persist();
  document.getElementById('examResult').innerHTML=`<div class="exam-result">Résultat: ${pct}% (${ok}/${tot}). ${pct>=80?'Prêt pour la pratique TVA avancée supervisée.':'À revoir: reverse charge, IP, TDFN, subventions, groupe TVA et concordance annuelle.'}</div>`;
}

function renderTabs(){
  document.getElementById('hProg').textContent=`${Object.keys(S.scores).length} / ${CASES.length} cas`;
  document.getElementById('tabs').innerHTML=CASES.map((c,i)=>{
    const sc=S.scores[i];
    const chip=sc!==undefined?`<span class="schip" style="background:${sc>=80?'#eaf5ee':sc>=50?'#fff3e0':'#fff1ee'};color:${sc>=80?'#2d7a3a':sc>=50?'#8a5200':'#9f4a3f'};">${sc}%</span>`:'';
    return `<button class="tab ${i===S.cur?'a':''}" onclick="selCase(${i})"><span class="rdot" style="background:${RC[c.risk]};"></span>${c.tab} ${chip}</button>`;
  }).join('');
}

function renderSB(){
  const c=CASES[S.cur],rb=RCB[c.risk];
  const ef=edFields();
  const pdots=CASES.map((cc,i)=>{const sc=S.scores[i];let cls='';if(sc!==undefined)cls=sc>=100?'s100':sc>=80?'s80':sc>=50?'s50':'s0';return `<div class="pdot ${cls}" title="${cc.tab}: ${sc!==undefined?sc+'%':'Non commence'}"></div>`;}).join('');
  document.getElementById('sb').innerHTML=`
    <div><div class="sb-name">${c.entity}</div>
      <div class="sb-meta">${c.sector}&nbsp;&middot;&nbsp;${c.loc}&nbsp;&middot;&nbsp;${c.period}</div>
      <div class="rb" style="background:${rb.bg};color:${rb.c};"><span style="width:6px;height:6px;border-radius:50%;background:${rb.c};display:inline-block;flex-shrink:0;"></span>&nbsp;${c.rl}</div>
    </div>
    <div class="sb-desc">${c.desc}</div>
    <div class="sb-leg"><strong>Base l&eacute;gale:</strong><br>${c.leg}</div>
    <div><div class="sb-sec">Donn&eacute;es dossier client</div>
      ${c.given.map(d=>`<div class="di"><div class="di-l">${d.l}${d.t?`<span class="di-t">${d.t}</span>`:''}<span class="di-n">${d.n}</span></div>${d.a!==null&&d.a!==undefined?`<div class="di-a">${chf(d.a)}</div>`:''}</div>`).join('')}
    </div>
    <div class="sb-prog"><div class="sb-sec">Progression globale</div>
      <div class="prog-dots">${pdots}</div>
      <div class="fc">Champs &agrave; compl&eacute;ter: <b>${filledCnt()}/${ef.length}</b></div>
    </div>
    <div class="sb-acts">
      <button class="btn btn-p" onclick="vrfy()">&#10003;&nbsp; V&eacute;rifier le d&eacute;compte</button>
      <button class="btn" onclick="sol()">&#9675;&nbsp; Voir la solution</button>
      <button class="btn btn-s" onclick="rst()">&#8635;&nbsp; R&eacute;initialiser</button>
    </div>`;
}

function iCell(key){
  const fd=CASES[S.cur].F[key];
  if(!fd||!fd.e)return`<div class="fr-inp"><input class="fi ro" type="number" value="${fd&&fd.v!=null?fd.v:0}" readonly></div>`;
  const cv=S.uv[key]!==undefined?S.uv[key]:'';
  let cls='fi ue';
  if(S.validated){const diff=Math.abs(pn(S.uv[key])-(fd.a||0));cls='fi '+(diff<=(fd.tol||1)?'ok':'er');}
  return`<div class="fr-inp"><input class="${cls}" id="fi_${key}" type="number" placeholder="0" value="${cv}" oninput="onI('${key}',this.value)" step="1"${fd.h?` title="${fd.h}"`:''}></div>`;
}
function cpCell(val,id,hi){return`<div class="fr-inp" style="padding:6px 9px;"><span class="cv${hi?' hi':''}" id="${id}">${chf(val)}</span></div>`;}

function row(code,lbl,sub,key,opts={}){
  const fd=CASES[S.cur].F[key],editable=fd&&fd.e;
  if(S.mode==='guided'&&!editable)return '';
  let hint='';
  if(S.validated&&editable&&fd.h){
    const diff=Math.abs(pn(S.uv[key])-(fd.a||0));
    if(diff>(fd.tol||1))hint=`<div class="fr-lbl-h">&#128161; ${fd.h}</div>`;
  }
  const tvaCol=opts.tvid?`<div class="fr-tva"><span id="${opts.tvid}">${chf(opts.tvv||0)}</span></div>`:`<div class="fr-tva"></div>`;
  return`<div class="fr ${editable?'ed':'ro'}${opts.hi?' hi':''}"><div class="fr-code">${code}</div><div class="fr-lbl"><div class="fr-lbl-m">${lbl}</div><div class="fr-lbl-s">${sub}</div>${hint}</div>${iCell(key)}${tvaCol}</div>`;
}
function cpRow(code,lbl,sub,val,id,opts={}){
  const cc=opts.rc?'fr-code primary':'fr-code';
  const tvaCol=opts.tvid?`<div class="fr-tva" style="font-weight:700;font-size:13px;color:var(--primary);"><span id="${opts.tvid}">${chf(opts.tvv||0)}</span></div>`:`<div class="fr-tva"></div>`;
  return`<div class="fr cp${opts.hi?' hi':''}"><div class="${cc}">${code}</div><div class="fr-lbl"><div class="fr-lbl-m"><strong>${lbl}</strong></div><div class="fr-lbl-s">${sub}</div></div>${cpCell(val,id,opts.hi)}${tvaCol}</div>`;
}
