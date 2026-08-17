CASES.push({id:3,tab:"CAS 3 · Subventions ch.410",
 title:"Association Sportive Valaisanne — Subventions & sponsoring",
 entity:"Association Sportive Valaisanne (ASV)",
 sector:"Association sportive / Événements / Culture",loc:"Sion (VS)",period:"Q1 2026",
 risk:"r",rl:"Avancé — Subventions ch.230 · Réduction IP ch.410 · Art. 33 LTVA",
 desc:"L'ASV organise des compétitions sportives. Elle perçoit des subventions publiques (sans contre-prestation = hors champ ch.230) ET du sponsoring (contre-prestation visibilité = imposable 8,1%). Les subventions imposent une réduction d'IP obligatoire au ch.410. Erreur fréquente: confondre subvention et sponsoring.",
 leg:"Subventions hors champ: art. 18 al.2 let. a LTVA · Réduction IP: art. 33 al.2 LTVA · Sponsoring = contre-prestation: art. 18 al.1 LTVA · Taux hébergement: art. 25 al.3 LTVA",
 given:[
  {l:"Droits d'entrée events (compétitions, tournois)",a:180000,n:"Imposable 8,1% (art. 25 al.1). ASV assujettie car CA > CHF 100'000.",t:"8.1%"},
  {l:"Nuitées sportifs en station (hébergement)",a:95000,n:"Taux spécial hébergement 3,8% (art. 25 al.3).",t:"3.8%"},
  {l:"Sponsoring maillots et banderoles (droits facturés)",a:60000,n:"Contre-prestation (visibilité) → imposable 8,1%. À NE PAS confondre avec une subvention.",t:"8.1%"},
  {l:"Subvention cantonale VS (promotion du sport)",a:120000,n:"Sans contre-prestation directe → hors champ TVA (art. 18 al.2 let. a). Ch.230. Déclenche réduction IP ch.410."},
  {l:"Aide Loterie romande (fonds de soutien)",a:45000,n:"Idem: subvention hors champ, ch.230. Déclenche réduction IP."},
  {l:"TVA sur dépenses d'organisation (logistique, sécurité, infrastructure)",a:22000,n:"IP brut total. Sera réduit proportionnellement aux subventions."}
 ],
 F:{
  ca200:{v:null,e:1,a:500000,h:"CA total = events (180k) + hébergement (95k) + sponsoring (60k) + subvention VS (120k) + Loterie romande (45k) = CHF 500'000. Tout entre au ch.200 puis les subventions sont déduites au ch.230.",tol:500},
  ca205:{v:0,e:0},ca220:{v:0,e:0},ca221:{v:0,e:0},ca225:{v:0,e:0},
  ca230:{v:null,e:1,a:165000,h:"Ch.230 = subventions hors champ: VS (120k) + Loterie romande (45k) = CHF 165'000. Pas de TVA. Déclenchent réduction IP ch.410.",tol:500},
  ca302:{v:null,e:1,a:240000,h:"CA imposable 8,1% = events (180k) + sponsoring (60k) = CHF 240'000. Hébergement = ch.342.",tol:500},
  ca312:{v:0,e:0},
  ca342:{v:null,e:1,a:95000,h:"Ch.342 = hébergement 3,8% = CHF 95'000. TVA = 95'000 × 3,8% = CHF 3'610.",tol:200},
  ip400:{v:null,e:1,a:22000,h:"IP brut = CHF 22'000. Avant réduction liée aux subventions.",tol:200},
  ip405:{v:0,e:0},
  ip410:{v:null,e:1,a:7260,h:"Réduction IP ch.410 (art. 33 al.2 LTVA): subventions (165'000) × (IP brut / CA total) = 165'000 × (22'000 / 500'000) = 165'000 × 4,4% = CHF 7'260. IP net admis = 22'000 - 7'260 = CHF 14'740.",tol:300},
  ip420:{v:0,e:0}
 },
 E:{
  ca200:"Ch.200 = TOUTES recettes: events (180k) + hébergement (95k) + sponsoring (60k) + subvention VS (120k) + Loterie romande (45k) = CHF 500'000.",
  ca230:"Ch.230 = subventions hors champ: VS + Loterie = CHF 165'000. Distinction clé: subvention = sans contre-prestation → ch.230. Sponsoring = contre-prestation (visibilité) → imposable 8,1%, PAS ch.230.",
  ca302:"Ch.302 = events (180k) + sponsoring (60k) = CHF 240'000 à 8,1%. TVA = CHF 19'440.",
  ca342:"Ch.342 = hébergement 3,8% = CHF 95'000. TVA = CHF 3'610.",
  ip400:"Ch.400 = IP brut = CHF 22'000.",
  ip410:"Ch.410 — Réduction IP (art. 33 al.2 LTVA): subventions × (IP / CA) = 165'000 × 4,4% = CHF 7'260. IP net admis = CHF 14'740. RISQUE: omettre ch.410 = infraction fréquente lors des contrôles AFC.",
  result:"TVA due: CHF 23'050. IP admis: CHF 14'740. TVA nette: CHF 8'310."
 }
});
