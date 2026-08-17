CASES.push({id:5,tab:"CAS 5 · TDFN audit",
 title:"Fidugest Sàrl — TDFN: contrôle d'admissibilité et passage méthode effective",
 entity:"Fidugest Sàrl, Lausanne",
 sector:"Fiduciaire / Comptabilité / Fiscalité",loc:"Lausanne (VD)",period:"Exercice 2026 / Q1 2027",
 risk:"r",rl:"Avancé — TDFN art. 37 LTVA · Seuils AFC · Passage méthode effective",
 desc:"Fidugest utilisait la méthode des taux de la dette fiscale nette. L'exercice 2026 montre un CA imposable TVA comprise de CHF 5'200'000. Le seuil TDFN se contrôle TVA comprise et non HT. Pour la suite, l'entreprise doit vérifier les conséquences du dépassement avec les règles AFC applicables et préparer le passage à la méthode effective selon les modalités prévues. Le cas entraîne donc une conversion pédagogique TVAC → HT et le calcul de l'impôt préalable réel.",
 leg:"TDFN: art. 37 LTVA · Seuil AFC: CA imposable annuel TVA comprise ≤ CHF 5,024 mio et impôt dû ≤ CHF 108'000 · Méthode effective: art. 25 et 28 LTVA",
 given:[
  {l:"CA annuel imposable 2026 TVA comprise",a:5200000,n:"Contrôle TDFN: CHF 5'200'000 TVAC dépasse le seuil AFC de CHF 5,024 mio. Deuxième alerte: avec un taux pédagogique de 3,0%, l'impôt dû serait CHF 156'000, donc au-dessus de CHF 108'000.",t:"TDFN"},
  {l:"Conversion pédagogique du CA TVAC en base HT à 8,1%",a:4810361,n:"Pour la méthode effective: 5'200'000 ÷ 1,081 = CHF 4'810'361 HT. La TVA collectée correspondante est environ CHF 389'639.",t:"8.1%"},
  {l:"TVA réelle sur dépenses déductibles",a:38000,n:"Sous méthode effective, on ne déduit pas un IP forfaitaire TDFN. On déduit uniquement l'impôt préalable réel justifié par factures conformes."}
 ],
 audit:{
  risks:["Vérifier le CA TDFN en TVA comprise, pas en HT.","Contrôler aussi le plafond d'impôt dû de CHF 108'000/an.","Ne jamais comptabiliser un 'IP forfaitaire' au ch.400 sous méthode effective."],
  proofs:["Décomptes TDFN de l'exercice précédent","Extrait CA comptable avec TVA comprise / HT","Communication AFC sur changement de méthode","Factures fournisseurs justifiant l'IP réel"]
 },
 F:{
  ca200:{v:null,e:1,a:4810361,h:"Méthode effective: saisir le CA HT. Le CA dossier est TVAC: 5'200'000 ÷ 1,081 = CHF 4'810'361.",tol:1000},
  ca205:{v:0,e:0},ca220:{v:0,e:0},ca221:{v:0,e:0},ca225:{v:0,e:0},ca230:{v:0,e:0},
  ca302:{v:null,e:1,a:4810361,h:"Après bascule en méthode effective, le CA imposable au taux normal est la base HT: CHF 4'810'361.",tol:1000},
  ca312:{v:0,e:0},ca342:{v:0,e:0},
  ip400:{v:null,e:1,a:38000,h:"Méthode effective: IP réel sur factures conformes, pas un montant forfaitaire TDFN.",tol:500},
  ip405:{v:0,e:0},ip410:{v:0,e:0},ip420:{v:0,e:0}
 },
 E:{
  ca200:"Ch.200 = base HT pour méthode effective. Le seuil TDFN, lui, se contrôle sur le CA TVA comprise. Ici, CHF 5'200'000 TVAC dépasse CHF 5,024 mio: alerte de sortie TDFN.",
  ca302:"Ch.302 = CHF 4'810'361 HT. TVA collectée ≈ CHF 389'639.",
  ip400:"Ch.400 = IP réel justifié par factures conformes: CHF 38'000. Sous TDFN, l'IP est intégré dans le taux; sous méthode effective, il faut revenir aux factures réelles.",
  result:"TVA effective à payer ≈ CHF 389'639 − CHF 38'000 = CHF 351'639. Point clé: ne pas comparer une méthode effective avec un faux 'IP forfaitaire'. Le taux TDFN exact par branche doit toujours être vérifié dans l'ordonnance/table AFC en vigueur."
 }
});
