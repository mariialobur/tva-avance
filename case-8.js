CASES.push({id:8,tab:"CAS 8 · Concordance annuelle",
 title:"Helvetic Services SA — Concordance annuelle TVA et corrections",
 entity:"Helvetic Services SA, Fribourg",
 sector:"Services B2B / Clôture annuelle",loc:"Fribourg (FR)",period:"Clôture 2026",
 risk:"r",rl:"Expert — Concordance annuelle · Rectification · Dossier de preuves",
 desc:"À la clôture annuelle, les comptes ne correspondent pas aux décomptes TVA trimestriels déjà déposés. Le but n'est pas de refaire toute l'année, mais d'identifier les écarts à corriger: facture oubliée, subvention non déclarée en rubrique pédagogique, IP indûment déduit et réduction IP liée au financement public.",
 leg:"Concordance annuelle TVA: obligation de contrôle des décomptes avec les comptes annuels · Art. 72 LTVA (corrections) · Art. 28 LTVA (IP) · Art. 33 LTVA (subventions et réduction IP)",
 given:[
  {l:"Facture client B2B oubliée dans les décomptes trimestriels",a:60000,n:"Prestation imposable 8,1% déjà comptabilisée dans les comptes annuels, mais absente des décomptes TVA. Correction positive ch.200 et ch.302.",t:"8.1%"},
  {l:"Subvention cantonale reçue et comptabilisée",a:40000,n:"Financement public sans contre-prestation directe. À traiter pédagogiquement au ch.230 et à documenter; déclenche une réduction IP ch.410.",t:"ch.230"},
  {l:"IP déduit à tort: facture non conforme / dépense privée",a:5300,n:"Montant d'impôt préalable déjà récupéré mais non justifié. À corriger en diminution de l'IP via ch.405 dans ce module pédagogique.",t:"ch.405"},
  {l:"Réduction IP calculée sur subvention",a:2400,n:"Réduction IP pédagogique liée au financement public. Le calcul exact doit être documenté dans le dossier de clôture.",t:"ch.410"}
 ],
 audit:{
  risks:["Se limiter aux décomptes trimestriels sans les rapprocher des comptes annuels.","Corriger le CA oublié sans corriger l'IP non justifié.","Ne pas documenter la nature juridique d'une subvention.","Déposer une correction sans tableau de concordance clair."],
  proofs:["Grand livre CA et comptes TVA","Décomptes trimestriels cumulés","Facture client oubliée et date de prestation","Décision de subvention","Liste des factures IP refusées","Tableau de concordance annuelle signé/revu","Proposition d’écritures comptables de correction","Trace de validation par le comptable/fiscaliste responsable"]
 },
 F:{
  ca200:{v:null,e:1,a:100000,h:"Correction ch.200 = facture oubliée 60'000 + subvention 40'000 = CHF 100'000. Le ch.230 déduira ensuite la subvention pour arriver à la base imposable.",tol:200},
  ca205:{v:0,e:0},ca220:{v:0,e:0},ca221:{v:0,e:0},ca225:{v:0,e:0},
  ca230:{v:null,e:1,a:40000,h:"Ch.230 = subvention cantonale sans contre-prestation directe = CHF 40'000. À documenter par décision/convention.",tol:100},
  ca302:{v:null,e:1,a:60000,h:"Ch.302 = facture B2B imposable oubliée = CHF 60'000. TVA supplémentaire = 60'000 × 8,1% = CHF 4'860.",tol:100},
  ca312:{v:0,e:0},ca342:{v:0,e:0},
  ip400:{v:null,e:1,a:0,h:"Aucun nouvel IP brut à ajouter. Le problème est inverse: une partie de l'IP déjà déduite doit être corrigée.",tol:50},
  ip405:{v:null,e:1,a:5300,h:"Ch.405 = IP indûment déduit: facture non conforme / dépense privée = CHF 5'300.",tol:100},
  ip410:{v:null,e:1,a:2400,h:"Ch.410 = réduction IP liée à la subvention = CHF 2'400 selon tableau de concordance pédagogique.",tol:100},
  ip420:{v:0,e:0}
 },
 E:{
  ca200:"Ch.200 correction = CHF 100'000: facture client oubliée (60'000) + subvention (40'000). Le ch.200 sert ici de total pédagogique des éléments à corriger.",
  ca230:"Ch.230 = CHF 40'000 de subvention. Ce montant ne devient pas du CA imposable mais doit être traité et documenté.",
  ca302:"Ch.302 = CHF 60'000 imposables à 8,1%. TVA supplémentaire = CHF 4'860.",
  ip400:"Ch.400 = CHF 0 dans cette correction: aucune nouvelle facture fournisseur ne donne droit à un IP supplémentaire.",
  ip405:"Ch.405 = CHF 5'300 d'IP à reprendre, car l'IP précédemment déduit n'est pas justifié.",
  ip410:"Ch.410 = CHF 2'400 de réduction IP liée à la subvention. La méthode doit être documentée dans le tableau de concordance annuelle.",
  result:"Correction nette: TVA supplémentaire CHF 4'860 + reprise IP 5'300 + réduction IP 2'400 = CHF 12'560 à régulariser. Action professionnelle attendue: préparer un tableau de concordance, joindre les justificatifs, proposer les écritures comptables de correction, faire valider le dossier par le comptable/fiscaliste responsable, puis déposer la correction selon les modalités AFC applicables. Point clé: la concordance annuelle n'est pas une formalité, c'est un contrôle professionnel entre comptes annuels, décomptes TVA et justificatifs."
 }
});
