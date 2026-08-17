function renderForm(){
  const v=cmp(),c=CASES[S.cur],rr=v.res>=0,rc=rr?'#9f4a3f':'#1a6b2e';
  document.getElementById('formWrap').innerHTML=`
    <div class="modebar"><span class="modebar-title">Mode</span><button class="modebtn ${activeMode('guided')}" onclick="setMode('guided')">Guidé</button><button class="modebtn ${activeMode('form')}" onclick="setMode('form')">Formulaire pédagogique</button><button class="modebtn ${activeMode('risk')}" onclick="setMode('risk')">Contrôle fiscal</button></div>
    ${renderPrecheck()}
    <div class="fc-card">
      <div class="col-hdr"><div>N&deg;</div><div>Intitul&eacute; pédagogique (Formulaire 100)</div><div>CHF (HT)</div><div>TVA CHF</div></div>
      <div class="fsh">Section I &mdash; Contre-prestations / Chiffres d&apos;affaires</div>
      ${row('200',"Total des contre-prestations re&ccedil;ues ou convenues","CA total de la p&eacute;riode, taxes non comprises (HT)",'ca200')}
      ${row('205',"Prestations &agrave; soi-m&ecirc;me (art. 3 let. h &amp; art. 24 al.2 LTVA)","Op&eacute;rations r&eacute;alis&eacute;es pour son propre compte (usage priv&eacute;, propres actifs)",'ca205')}
      ${row('220',"Acquisitions aupr&egrave;s d&apos;entreprises &agrave; l&apos;&eacute;tranger","Imp&ocirc;t sur les acquisitions (art. 45 LTVA) &mdash; auto-imposition selon lieu et nature du service",'ca220')}
      ${row('221',"Prestations exon&eacute;r&eacute;es &mdash; Exportations (art. 23 LTVA)","En principe: droit IP conserv&eacute; &middot; Preuve d&apos;exportation obligatoire",'ca221')}
      ${row('225',"Prestations exclues du champ de l&apos;imp&ocirc;t (art. 21 LTVA)","En principe: pas de droit &agrave; d&eacute;duction de l&apos;IP correspondant",'ca225')}
      ${row('230',"Diminutions de la contre-prestation (art. 40 LTVA)","Escomptes, rabais, retours de marchandises, avoirs &mdash; toujours en HT",'ca230')}
      ${cpRow('280',"Total des d&eacute;ductions","= 221 + 225 + 230",v.ca280,'v280')}
      ${cpRow('289',"Total des contre-prestations imposables","= 200 + 205 + 220 &minus; 280",v.ca289,'v289',{hi:true,rc:true})}
      <div class="fsh">Section II &mdash; Calcul de l&apos;imp&ocirc;t &middot; Taux depuis 01.01.2024 (inchang&eacute;s en 2026)</div>
      ${row('302','CA imposable au taux normal (8,1%)','Art. 25 al.1 LTVA &mdash; prestations, services, travaux, restauration','ca302',{tvid:'v302',tvv:v.t302})}
      ${row('312','CA imposable au taux r&eacute;duit (2,6%)','Art. 25 al.2 LTVA &mdash; denr&eacute;es alimentaires, m&eacute;dicaments (selon classification ESTV), livres, journaux','ca312',{tvid:'v312',tvv:v.t312})}
      ${row('342','CA imposable au taux sp&eacute;cial (3,8%)','Art. 25 al.4 LTVA &mdash; prestations d&apos;H&Eacute;BERGEMENT (nuit&eacute;es, locations touristiques)','ca342',{tvid:'v342',tvv:v.t342})}
      ${v.ca220>0?`<div class="fr cp"><div class="fr-code" style="font-size:9px">TVA*</div><div class="fr-lbl"><div class="fr-lbl-m">TVA acquisitions &eacute;trang&egrave;res (ch.220 &times; 8,1%)</div><div class="fr-lbl-s">Incluse dans le total ci-dessous</div></div><div class="fr-inp" style="padding:6px 9px;"><span class="cv" id="v220t">${chf(v.t220)}</span></div><div class="fr-tva"></div></div>`:''}
      <div class="fr cp hi" style="border-top:2px solid #2f5f73;">
        <div class="fr-code primary" style="font-size:10px">TVA</div>
        <div class="fr-lbl"><div class="fr-lbl-m"><strong>Total de l&apos;imp&ocirc;t d&ucirc;</strong></div><div class="fr-lbl-s">= (302 &times; 8,1%) + (312 &times; 2,6%) + (342 &times; 3,8%)${v.ca220>0?' + TVA acquisitions':''}</div></div>
        <div class="fr-inp" style="padding:6px 9px;color:#aaa;font-size:11px;">&rarr;</div>
        <div class="fr-tva" style="font-weight:700;font-size:14px;color:#2f5f73;"><span id="vTD">${chf(v.tvaDue)}</span></div>
      </div>
      <div class="fsh">Section III &mdash; D&eacute;duction de l&apos;imp&ocirc;t pr&eacute;alable</div>
      ${row('400','IP grevant les co&ucirc;ts des mat&eacute;riaux, charges de services et frais g&eacute;n&eacute;raux','TVA sur factures d&apos;achat fournisseurs suisses assujettis (art. 28 LTVA)','ip400')}
      ${row('405','Correction de l&apos;IP &mdash; affectation (art. 30 LTVA)','IP &agrave; soustraire: d&eacute;penses servant &agrave; des activit&eacute;s exclues ou hors champ TVA','ip405')}
      ${row('410','R&eacute;duction de l&apos;IP &mdash; subventions (art. 33 LTVA)','Subventions publiques, contributions de tiers non imposables','ip410')}
      ${row('420','IP provenant de l&apos;imp&ocirc;t sur les acquisitions (art. 28 al.2 LTVA)','= ch.220 &times; taux applicable &mdash; d&eacute;ductible si activit&eacute; imposable correspondante','ip420')}
      ${cpRow('IP net','Imp&ocirc;t pr&eacute;alable d&eacute;ductible net','= 400 &minus; 405 &minus; 410 + 420',v.ipNet,'vIN')}
      <div class="fsh">Section IV &mdash; R&eacute;sultat</div>
      <div class="fr" style="min-height:52px;background:${rr?'#fff5f5':'#f0fff8'};">
        <div class="fr-code" style="font-weight:700;color:${rc};background:${rr?'#fde0d9':'#d0f0e0'};font-size:11px;">500</div>
        <div class="fr-lbl">
          <div class="fr-lbl-m" style="font-weight:700;font-size:13px;color:${rc};" id="vRL">${rr?"Montant d&ucirc; &agrave; l&apos;AFC":"Exc&eacute;dent de l&apos;imp&ocirc;t pr&eacute;alable (cr&eacute;dit)"}</div>
          <div class="fr-lbl-s">${rr?"Paiement 60 jours (art. 86 al.1 LTVA) &middot; Int&eacute;r&ecirc;t moratoire si d&eacute;passement: 4,0%/an 2026, &agrave; v&eacute;rifier chaque ann&eacute;e":"Remboursement sur demande (art. 88 LTVA) &middot; Int&eacute;r&ecirc;t r&eacute;mun&eacute;ratoire: 4,0%/an 2026, &agrave; v&eacute;rifier chaque ann&eacute;e"}</div>
        </div>
        <div class="fr-inp" style="padding:6px 9px;color:#aaa;font-size:11px;">&rarr;</div>
        <div class="fr-tva" style="font-weight:700;font-size:16px;color:${rc};"><span id="vR">${chf(Math.abs(v.res))}</span></div>
      </div>
    </div>
    ${S.mode==='risk'?renderAudit():''}
    ${renderAnalytics()}
    ${renderExam()}
  `;
  if(c.isRect&&c.rectData)renderRect();else document.getElementById('rectWrap').innerHTML='';
}

function renderRect(){
  const c=CASES[S.cur],rd=c.rectData,v=cmp();
  const corrCA=pn(S.uv['ca302'])||rd.origCA+rd.missingCA;
  const corrTVA=Math.round(corrCA*.081);
  const corrRes=corrTVA-rd.origIP;
  const delta=corrTVA-rd.origTVA;
  const interestAmt=Math.round(delta*rd.interestRate*(rd.interestMonths/12));
  const belowMin=interestAmt<100;
  document.getElementById('rectWrap').innerHTML=`
    <div class="rect-card">
      <div class="rect-hdr">&#9888; Tableau comparatif &mdash; D&eacute;compte rectificatif (art. 72 LTVA &middot; Formulaire 550_03 ePortal AFC)</div>
      <table class="rect-tbl">
        <tr><th>&Eacute;l&eacute;ment</th><th>Original d&eacute;pos&eacute;</th><th>Corrig&eacute;</th><th>Diff&eacute;rence</th></tr>
        <tr><td>CA imposable ch.302</td><td>${chf(rd.origCA)}</td><td><strong>${chf(corrCA)}</strong></td><td class="rect-diff">+${chf(corrCA-rd.origCA)}</td></tr>
        <tr><td>TVA due</td><td>${chf(rd.origTVA)}</td><td><strong>${chf(corrTVA)}</strong></td><td class="rect-diff">+${chf(corrTVA-rd.origTVA)}</td></tr>
        <tr><td>IP d&eacute;ductible net</td><td>${chf(rd.origIP)}</td><td><strong>${chf(rd.origIP)}</strong></td><td>&mdash;</td></tr>
        <tr><td><strong>R&eacute;sultat ch.500</strong></td><td>${chf(rd.origRes)}</td><td><strong>${chf(corrRes)}</strong></td><td class="rect-diff">+${chf(corrRes-rd.origRes)}</td></tr>
        <tr><td colspan="3" style="color:var(--text2)">D&eacute;j&agrave; vers&eacute; &agrave; l&apos;AFC</td><td style="font-family:var(--mono);text-align:right;">&minus; ${chf(rd.origRes)}</td></tr>
      </table>
      <div class="rect-info">
        <strong>Suppl&eacute;ment TVA: ${chf(delta)}</strong><br>
        Int&eacute;r&ecirc;t moratoire 4,0%/an (DFF RS 631.014, d&egrave;s 01.01.2026) &times; ${rd.interestMonths} mois (cours depuis 01.06.2026) &asymp;
        <code style="background:var(--bg3);padding:1px 5px;border-radius:3px;">${chf(interestAmt)}</code>
      </div>
      ${belowMin?`<div class="rect-notice"><strong>Seuil minimal (art. 1 al.3 Ord. DFF RS 631.014):</strong> Lorsque le montant calcul&eacute; est inf&eacute;rieur au seuil minimal applicable (en principe CHF 100), aucun int&eacute;r&ecirc;t n&apos;est en principe per&ccedil;u. Montant effectif &agrave; r&eacute;gulariser: suppl&eacute;ment TVA uniquement.</div>`:''}
      <div class="rect-total"><span>Montant &agrave; r&eacute;gulariser:</span><span>${chf(belowMin?delta:delta+interestAmt)}</span></div>
      <div class="rect-advice">
        <strong>&#10003; D&Eacute;NONCIATION SPONTAN&Eacute;E (art. 102 al.1 LTVA):</strong><br>
        D&eacute;poser le Formulaire 550_03 via <strong>ePortal AFC</strong> AVANT tout contr&ocirc;le AFC annonc&eacute; &rarr; en principe aucune amende, uniquement le suppl&eacute;ment TVA.<br>
        <em style="font-size:11px;">D&eacute;lai concordance annuelle: 240 jours apr&egrave;s la fin de l&apos;exercice (art. 72 LTVA).</em>
      </div>
    </div>`;
}

function updCmp(){
  const v=cmp();
  const s=(id,val)=>{const el=document.getElementById(id);if(el)el.textContent=chf(val);};
  s('v280',v.ca280);s('v289',v.ca289);s('v302',v.t302);s('v312',v.t312);s('v342',v.t342);
  if(document.getElementById('v220t'))s('v220t',v.t220);
  s('vTD',v.tvaDue);s('vIN',v.ipNet);s('vR',Math.abs(v.res));
  const rr=v.res>=0,rc=rr?'#9f4a3f':'#1a6b2e';
  const rl=document.getElementById('vRL');
  if(rl){rl.innerHTML=rr?"Montant d&ucirc; &agrave; l&apos;AFC":"Exc&eacute;dent de l&apos;imp&ocirc;t pr&eacute;alable (cr&eacute;dit)";rl.style.color=rc;}
  const vr=document.getElementById('vR');if(vr)vr.style.color=rc;
  const fc=document.querySelector('.fc b');if(fc)fc.textContent=`${filledCnt()}/${edFields().length}`;
  if(CASES[S.cur].isRect&&CASES[S.cur].rectData)renderRect();
}
