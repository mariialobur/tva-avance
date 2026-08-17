CASES.push({id:2,tab:"CAS 2 · Immobilier & Option",
 title:"Immodev SA — Promotion immobilière & location optée",
 entity:"Immodev SA, Genève",
 sector:"Immobilier / Promotion / Location commerciale",loc:"Genève (GE)",period:"Q4 2026",
 risk:"r",rl:"Avancé — Option TVA art. 22 · Pro-rata surfaces · Ch.221+405",
 desc:"Immodev SA vend des appartements PPE (cession exclue ch.221), loue des locaux commerciaux avec option TVA (imposable ch.302) et des logements sans option (exclus ch.225). L'IP sur les travaux de construction doit être corrigé selon le pro-rata des surfaces optées / surfaces totales.",
 leg:"Exclusion vente immeuble: art. 21 al.2 ch.21 LTVA · Option TVA: art. 22 LTVA · Exclusion location: art. 21 al.2 ch.20 LTVA · Correction IP: art. 29-30 LTVA",
 given:[
  {l:"Ventes PPE — appartements en propriété par étage",a:2800000,n:"Cession d'immeubles: exclue du champ TVA (art. 21 al.2 ch.21). Saisir au ch.221.",},
  {l:"Loyers locaux commerciaux avec option TVA (8,1%)",a:360000,n:"Option exercée (art. 22 LTVA): locataires assujettis TVA. Imposable 8,1%. IP récupérable sur travaux correspondants.",t:"8.1%"},
  {l:"Loyers logements sans option TVA",a:180000,n:"Logements privatifs: exclus (art. 21 al.2 ch.20). Locataires particuliers non assujettis → pas d'option."},
  {l:"TVA sur travaux de construction (HT, facturée par l'entrepreneur)",a:185000,n:"IP brut total sur tous les travaux. À corriger selon le pro-rata surfaces optées / surfaces totales."}
 ],
 F:{
  ca200:{v:null,e:1,a:3340000,h:"CA total = PPE (2'800k) + loyers optés (360k) + loyers exclus (180k) = CHF 3'340'000. Toutes les recettes, imposables ou non.",tol:1000},
  ca205:{v:0,e:0},ca220:{v:0,e:0},
  ca221:{v:null,e:1,a:2800000,h:"Ch.221 = cessions d'immeubles exclues = CHF 2'800'000. Art. 21 al.2 ch.21 LTVA. Impact majeur sur le pro-rata IP.",tol:1000},
  ca225:{v:null,e:1,a:180000,h:"Ch.225 = loyers exclus sans option = CHF 180'000. Art. 21 al.2 ch.20 LTVA.",tol:500},
  ca230:{v:0,e:0},
  ca302:{v:null,e:1,a:360000,h:"CA imposable 8,1% = loyers commerciaux avec option = CHF 360'000. TVA due = 360'000 × 8,1% = CHF 29'160.",tol:500},
  ca312:{v:0,e:0},ca342:{v:0,e:0},
  ip400:{v:null,e:1,a:185000,h:"IP brut sur travaux = CHF 185'000. Avant correction pro-rata.",tol:2000},
  ip405:{v:null,e:1,a:165057,h:"Correction ch.405: pro-rata admissible = CA imposable / CA total = 360k / 3'340k = 10,78%. IP admis = 185'000 × 10,78% = CHF 19'943. IP à corriger au ch.405 = 185'000 - 19'943 = CHF 165'057.",tol:5000},
  ip410:{v:0,e:0},ip420:{v:0,e:0}
 },
 E:{
  ca200:"Ch.200 = toutes recettes: PPE (2'800k) + loyers optés (360k) + loyers exclus (180k) = CHF 3'340'000.",
  ca221:"Ch.221 = ventes PPE exclues = CHF 2'800'000. Ces ventes réduisent massivement le pro-rata IP (elles représentent 84% du CA total).",
  ca225:"Ch.225 = loyers exclus sans option = CHF 180'000. Total exclusions = 2'800k + 180k = CHF 2'980'000.",
  ca302:"Ch.302 = loyers optés 8,1% = CHF 360'000. TVA due = CHF 29'160.",
  ip400:"Ch.400 = IP brut total sur travaux = CHF 185'000.",
  ip405:"Ch.405 — Correction pro-rata: imposable / total = 360k / 3'340k = 10,78%. IP admis = 185'000 × 10,78% = CHF 19'943. Correction ch.405 = CHF 165'057. RISQUE AFC majeur: sans correction, reprise de CHF 165'057 + intérêts. Conseil: utiliser la méthode par surface si plus favorable.",
  result:"TVA due: CHF 29'160. IP admis: CHF 19'943. TVA nette: CHF 9'217."
 }
});
