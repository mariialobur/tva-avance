CASES.push({id:6,tab:"CAS 6 · Mixte complexe",
 title:"Centre Wellness Bâle SA — Activités exclues, optées, exportées",
 entity:"Centre Wellness Bâle SA",
 sector:"Santé / Bien-être / Médecine alternative",loc:"Bâle (BS)",period:"Q1 2026",
 risk:"r",rl:"Avancé — Activités mixtes complexes · Ch.225+221+302+312",
 desc:"Centre Wellness combine: soins médicaux exclus (art. 21 al.2 ch.2), massages bien-être imposables (8,1%), café-restaurant (8,1%), vente aliments sains (2,6%), et prestations de conseil vidéo à des clients français B2C. Le cas retient pédagogiquement que le lieu de ces prestations est hors Suisse; cette qualification doit toujours être vérifiée selon la nature exacte du service. IP à corriger pro-rata.",
 leg:"Exclusion médicale: art. 21 al.2 ch.2 LTVA · Lieu des prestations: art. 8 LTVA · Prestations à l’étranger / exonérations: à qualifier selon le cas · Taux réduit aliments: art. 25 al.2 LTVA · IP pro-rata: art. 29-30 LTVA",
 given:[
  {l:"Soins médicaux (physiothérapie médicalement prescrite)",a:180000,n:"Exclus du champ TVA (art. 21 al.2 ch.2 LTVA). Saisir au ch.225. Aucune TVA facturée, IP non déductible sur la part correspondante."},
  {l:"Massages bien-être et relaxation (sans prescription médicale)",a:120000,n:"Imposable 8,1% — pas de finalité thérapeutique au sens médical.",t:"8.1%"},
  {l:"Café-restaurant du centre",a:85000,n:"Restauration avec service = imposable 8,1%.",t:"8.1%"},
  {l:"Vente de compléments alimentaires et aliments sains",a:42000,n:"Taux réduit 2,6% (art. 25 al.2 let. a LTVA) — denrées alimentaires.",t:"2.6%"},
  {l:"Conseil vidéo à des clients particuliers français (B2C UE)",a:38000,n:"Traitement pédagogique retenu: lieu de la prestation hors Suisse selon analyse du service et du destinataire. À documenter: nature exacte du service, domicile du client et règle de lieu applicable. Ne pas assimiler automatiquement tout client étranger à une exportation exonérée. Saisir au ch.221 dans ce cas."},
  {l:"TVA sur toutes les dépenses du centre",a:31000,n:"IP brut. À corriger pro-rata selon part des recettes exclues."}
 ],
 F:{
  ca200:{v:null,e:1,a:465000,h:"CA total = médecine (180k) + massages (120k) + restaurant (85k) + aliments (42k) + consultations export (38k) = CHF 465'000.",tol:500},
  ca205:{v:0,e:0},ca220:{v:0,e:0},
  ca221:{v:null,e:1,a:38000,h:"Ch.221 = prestations dont le lieu est retenu hors Suisse dans ce cas pédagogique = CHF 38'000. Qualification à documenter: nature du service, domicile du client et règle de lieu applicable.",tol:200},
  ca225:{v:null,e:1,a:180000,h:"Ch.225 = soins médicaux exclus = CHF 180'000 (art. 21 al.2 ch.2 LTVA). Pas d'option possible ici.",tol:500},
  ca230:{v:0,e:0},
  ca302:{v:null,e:1,a:205000,h:"CA imposable 8,1% = massages (120k) + restaurant (85k) = CHF 205'000.",tol:500},
  ca312:{v:null,e:1,a:42000,h:"Ch.312 = aliments 2,6% = CHF 42'000. TVA = 42'000 × 2,6% = CHF 1'092.",tol:200},
  ca342:{v:0,e:0},
  ip400:{v:null,e:1,a:31000,h:"IP brut = CHF 31'000. AVANT correction pro-rata.",tol:500},
  ip405:{v:null,e:1,a:12000,h:"Correction pro-rata ch.405: recettes exclues = médicale (180k) / CA total (465k) = 38,71%. IP non admis = 31'000 × 38,71% = CHF 12'000 arrondi. Les prestations ch.221 retenues hors Suisse dans ce cas ne réduisent pas l'IP comme une activité exclue.",tol:300},
  ip410:{v:0,e:0},ip420:{v:0,e:0}
 },
 E:{
  ca200:"Ch.200 = toutes recettes: médicale (180k) + massages (120k) + restaurant (85k) + aliments (42k) + export consultations (38k) = CHF 465'000.",
  ca221:"Ch.221 = prestations vidéo retenues hors Suisse dans ce cas pédagogique = CHF 38'000. Distinction clé: prestation hors Suisse/exonérée selon qualification ≠ prestation exclue ch.225. La qualification doit être documentée; ne jamais appliquer automatiquement ce traitement à tout client étranger.",
  ca225:"Ch.225 = soins médicaux exclus = CHF 180'000. Ces recettes réduisent le droit à l'IP proportionnellement.",
  ca302:"Ch.302 = massages (120k) + restaurant (85k) = CHF 205'000 à 8,1%. TVA = CHF 16'605.",
  ca312:"Ch.312 = aliments 2,6% = CHF 42'000. TVA = CHF 1'092.",
  ip400:"Ch.400 = IP brut = CHF 31'000.",
  ip405:"Correction pro-rata: recettes exclues = 180k / 465k = 38,71%. IP non admis = 31'000 × 38,71% = CHF 12'000. Rappel: les prestations ch.221 retenues hors Suisse/exonérées dans ce cas ne réduisent pas l'IP comme les activités exclues.",
  result:"TVA due: CHF 17'697. IP admis: 31'000 - 12'000 = CHF 19'000. TVA nette: CHF -1'303 (crédit TVA en faveur du Centre)."
 }
});
