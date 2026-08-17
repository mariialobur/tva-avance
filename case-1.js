CASES.push({id:1,tab:"CAS 1 · Holding & Pro-rata",
 title:"Alpes Holding SA — Management fees + dividendes",
 entity:"Alpes Holding SA, Zurich",
 sector:"Holding / Management fees",loc:"Zurich (ZH)",period:"Q3 2026",
 risk:"r",rl:"Avancé — Holding · Pro-rata IP ch.405 · Art. 29-30 LTVA",
 desc:"Alpes Holding SA facture des management fees à ses filiales (imposable 8,1%) et perçoit des dividendes (exclus du champ TVA art. 21 al.2 ch.19). L'IP brut doit être corrigé pro-rata: seule la part correspondant à l'activité imposable est déductible. Pro-rata = CA imposable / CA total.",
 leg:"Exclusion dividendes: art. 21 al.2 ch.19 LTVA · Management fees: art. 18 LTVA · Correction IP pro-rata: art. 29-30 LTVA · OTVA art. 65-67",
 given:[
  {l:"Management fees facturés aux filiales (HT, 8,1%)",a:480000,n:"Prestation de direction stratégique, IT, RH → imposable 8,1% (art. 18 LTVA). CA imposable.",t:"8.1%"},
  {l:"Dividendes reçus des 3 filiales",a:1120000,n:"Exclus du champ TVA (art. 21 al.2 ch.19). Génère aucune TVA mais réduit le pro-rata IP. À inscrire au ch.225."},
  {l:"TVA brute sur toutes les dépenses de la holding",a:28400,n:"IP brut total avant correction pro-rata. Loyers, IT, conseils juridiques, etc. de la holding."}
 ],
 F:{
  ca200:{v:null,e:1,a:1600000,h:"CA total = management fees (480k) + dividendes (1'120k) = CHF 1'600'000. Les dividendes entrent au ch.200 même s'ils sont exclus — pour calculer le pro-rata IP.",tol:500},
  ca205:{v:0,e:0},ca220:{v:0,e:0},ca221:{v:0,e:0},
  ca225:{v:null,e:1,a:1120000,h:"Ch.225 = dividendes exclus = CHF 1'120'000 (art. 21 al.2 ch.19). Déclenchent la correction IP proportionnelle (art. 29 LTVA).",tol:500},
  ca230:{v:0,e:0},
  ca302:{v:null,e:1,a:480000,h:"CA imposable 8,1% = management fees = CHF 480'000. TVA due = 480'000 × 8,1% = CHF 38'880.",tol:100},
  ca312:{v:0,e:0},ca342:{v:0,e:0},
  ip400:{v:null,e:1,a:28400,h:"IP brut = CHF 28'400. C'est le montant AVANT correction pro-rata. Ce chiffre sera partiellement corrigé au ch.405.",tol:200},
  ip405:{v:null,e:1,a:19880,h:"Correction ch.405: pro-rata exclusion = 1'120'000 / 1'600'000 = 70%. IP non admis = 28'400 × 70% = CHF 19'880. IP net admis = 28'400 - 19'880 = CHF 8'520.",tol:300},
  ip410:{v:0,e:0},ip420:{v:0,e:0}
 },
 E:{
  ca200:"Ch.200 = TOUTES recettes: management fees (480k) + dividendes (1'120k) = CHF 1'600'000. Inclure les dividendes exclus est indispensable pour calculer le pro-rata.",
  ca225:"Ch.225 = dividendes exclus = CHF 1'120'000. Pro-rata d'activité imposable = 480k / 1'600k = 30%. Seuls 30% de l'IP brut sont déductibles.",
  ca302:"Ch.302 = management fees 8,1% = CHF 480'000. TVA due = CHF 38'880.",
  ip400:"Ch.400 = IP brut total = CHF 28'400. Avant toute correction.",
  ip405:"Ch.405 — Correction pro-rata: exclusion = 1'120k / 1'600k = 70%. IP à corriger = 28'400 × 70% = CHF 19'880. IP net admis = CHF 8'520. RISQUE AFC: si la holding ne corrige pas, reprise de CHF 19'880 + intérêts moratoires lors du contrôle.",
  result:"TVA due: CHF 38'880. IP admis: CHF 8'520. TVA nette: CHF 30'360."
 }
});
