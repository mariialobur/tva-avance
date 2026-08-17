CASES.push({id:4,tab:"CAS 4 · Groupe TVA",
 title:"Nexus Group SA — Déclaration consolidée groupe TVA",
 entity:"Nexus Group SA + Nexus Services Sàrl + Nexus Distribution SA",
 sector:"Groupe holding / Services / Distribution",loc:"Bâle (BS)",period:"Q2 2026",
 risk:"r",rl:"Avancé — Groupe TVA art. 13 LTVA · Transactions intragroupe",
 desc:"Le groupe Nexus déclare en tant que groupe TVA (art. 13 LTVA). Toutes les entités forment UN seul contribuable. Les transactions intragroupe (management fees, refacturations) sont hors champ — elles disparaissent dans la consolidation. Seul le CA externe est imposable.",
 leg:"Groupe TVA: art. 13 LTVA · Transactions intragroupe hors champ · OTVA art. 4-15 (conditions groupe) · Direction commune: art. 21 OTVA",
 given:[
  {l:"CA externe Nexus Services Sàrl (services IT/RH clients tiers)",a:680000,n:"Facturé à des clients hors groupe. Imposable 8,1%.",t:"8.1%"},
  {l:"CA externe Nexus Distribution SA (licences logiciels B2B)",a:920000,n:"Ventes clients externes. Imposable 8,1%.",t:"8.1%"},
  {l:"Management fees Holding → filiales (transaction intragroupe)",a:240000,n:"Flux interne au groupe TVA → hors champ. À éliminer au ch.225 (recettes exclues hors champ groupe)."},
  {l:"Refacturation coûts IT Nexus Services → Distribution (intragroupe)",a:85000,n:"Flux interne → hors champ. À éliminer au ch.225."},
  {l:"IP consolidé sur dépenses externes du groupe",a:52000,n:"IP global de toutes les entités. Activité 100% imposable → IP entièrement déductible."}
 ],
 F:{
  ca200:{v:null,e:1,a:1925000,h:"CA consolidé brut: Services externe (680k) + Distribution externe (920k) + management fees intragroupe (240k) + refact IT intragroupe (85k) = CHF 1'925'000. On consolide tout d'abord.",tol:1000},
  ca205:{v:0,e:0},ca220:{v:0,e:0},ca221:{v:0,e:0},
  ca225:{v:null,e:1,a:325000,h:"Ch.225 = transactions intragroupe à éliminer: management fees (240k) + refact IT (85k) = CHF 325'000. Dans le groupe TVA, ces flux n'existent plus fiscalement.",tol:500},
  ca230:{v:0,e:0},
  ca302:{v:null,e:1,a:1600000,h:"CA externe imposable 8,1% = 1'925k - 325k = CHF 1'600'000. TVA due = 1'600'000 × 8,1% = CHF 129'600.",tol:1000},
  ca312:{v:0,e:0},ca342:{v:0,e:0},
  ip400:{v:null,e:1,a:52000,h:"IP consolidé = CHF 52'000. Toutes activités externes 100% imposables → IP entièrement admissible, pas de correction.",tol:500},
  ip405:{v:null,e:1,a:0,h:"Ch.405 = CHF 0. Pas de correction IP: l'activité externe est 100% imposable. Les transactions intragroupe (ch.225) sont hors champ groupe, pas 'exclues' au sens de l'art. 29 — elles n'affectent pas le pro-rata IP.",tol:50},
  ip410:{v:0,e:0},ip420:{v:0,e:0}
 },
 E:{
  ca200:"Ch.200 = CA consolidé brut: externe (1'600k) + intragroupe (325k) = CHF 1'925'000. On additionne tout avant d'éliminer les flux internes.",
  ca225:"Ch.225 = flux intragroupe = CHF 325'000. Dans le groupe TVA (art. 13 LTVA), ces transactions n'existent pas fiscalement. Avantage groupe: pas de TVA à avancer et récupérer entre entités → cash-flow amélioré.",
  ca302:"Ch.302 = CA externe imposable = 1'925k - 325k = CHF 1'600'000. TVA = CHF 129'600.",
  ip400:"Ch.400 = IP consolidé = CHF 52'000. Admis à 100%.",
  ip405:"Ch.405 = CHF 0. Activité externe 100% imposable → pas de correction pro-rata nécessaire.",
  result:"TVA due: CHF 129'600. IP admis: CHF 52'000. TVA nette: CHF 77'600."
 }
});
