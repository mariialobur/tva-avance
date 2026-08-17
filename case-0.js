CASES.push({id:0,tab:"CAS 0 · SaaS & ch.220",
 title:"CloudTech Sàrl — Acquisitions de services étrangers",
 entity:"CloudTech Sàrl, Lausanne",
 sector:"Logiciels SaaS / Cloud",loc:"Lausanne (VD)",period:"Q2 2026",
 risk:"o",rl:"Avancé — Reverse charge ch.220 · Art. 19+45 LTVA",
 desc:"CloudTech vend des licences SaaS à des clients suisses. Elle achète de la capacité cloud à AWS Irlande (prestataire étranger non assujetti en Suisse). Obligation: auto-imposer ces achats étrangers au ch.220 (reverse charge). Usage professionnel 100% → IP récupérable ch.420.",
 leg:"Acquisition étrangère: art. 19 + 45 LTVA · Lieu prestation électronique: art. 8 al.1 LTVA · IP acquisitions: art. 28 al.1bis LTVA (ch.420) · OTVA art. 109-111",
 given:[
  {l:"CA licences SaaS (clients entreprises suisses, B2B)",a:320000,n:"Imposable 8,1% — lieu: Suisse (siège prestataire, art. 8 al.1 LTVA). Montant HT.",t:"8.1%"},
  {l:"CA licences SaaS (particuliers suisses, B2C)",a:80000,n:"Imposable 8,1% — lieu: Suisse (siège CloudTech). Pour B2C étranger: lieu = domicile du destinataire.",t:"8.1%"},
  {l:"Achats cloud AWS Irlande — HT (facturés sans TVA CH)",a:95000,n:"Prestataire étranger non assujetti CH → obligation reverse charge ch.220. CloudTech doit s'auto-imposer: 95'000 × 8,1% = CHF 7'695 de TVA à déclarer."},
  {l:"TVA factures suisses (IT, bureaux, télécom)",a:4200,n:"IP classique ch.400 — usage professionnel 100%."}
 ],
 F:{
  ca200:{v:null,e:1,a:400000,h:"CA propre: licences B2B (320k) + B2C (80k) = CHF 400'000. Les acquisitions ch.220 s'ajoutent séparément — ce n'est pas votre propre CA.",tol:100},
  ca205:{v:0,e:0},
  ca220:{v:null,e:1,a:95000,h:"Ch.220 = acquisitions de services étrangers HT: AWS Irlande = CHF 95'000. L'AFC calcule la TVA due: 95'000 × 8,1% = CHF 7'695 (s'ajoute à ch.289).",tol:100},
  ca221:{v:0,e:0},ca225:{v:0,e:0},ca230:{v:0,e:0},
  ca302:{v:null,e:1,a:400000,h:"CA imposable 8,1% = CA propre uniquement = CHF 400'000. Les ch.220 sont taxés séparément par le formulaire.",tol:100},
  ca312:{v:0,e:0},ca342:{v:0,e:0},
  ip400:{v:null,e:1,a:4200,h:"IP sur achats suisses = CHF 4'200 (factures IT, bureaux, télécom). Conditions: facture conforme art. 26 LTVA, fournisseur assujetti CH.",tol:50},
  ip405:{v:0,e:0},ip410:{v:0,e:0},
  ip420:{v:null,e:1,a:7695,h:"IP sur acquisitions étrangères ch.420: 95'000 × 8,1% = CHF 7'695. Déductible si usage professionnel 100%. Effet net: TVA auto-imposée puis récupérée = neutre pour CloudTech, mais OBLIGATION déclarative.",tol:100}
 },
 E:{
  ca200:"Ch.200 = CA propre: B2B (320k) + B2C (80k) = CHF 400'000. Ne pas y inclure les ch.220 (acquisitions étrangères) — ils ont leur propre chiffre dans le formulaire.",
  ca220:"Ch.220 = reverse charge sur AWS Irlande: CHF 95'000. CloudTech s'auto-impose: 95'000 × 8,1% = CHF 7'695 de TVA déclarée et due. Ce mécanisme s'applique à TOUT service étranger sans TVA suisse: Google Cloud, Microsoft Azure, consultants étrangers, etc.",
  ca302:"Ch.302 = CA propre imposable 8,1% = CHF 400'000. TVA collectée = 400'000 × 8,1% = CHF 32'400.",
  ip400:"Ch.400 = IP suisses = CHF 4'200 (factures fournisseurs suisses assujettis).",
  ip420:"Ch.420 = IP sur ch.220: 95'000 × 8,1% = CHF 7'695. Usage professionnel 100% → récupérable. Résultat: auto-imposition + déduction = effet TVA net = 0 CHF pour CloudTech. MAIS obligation déclarative: oublier le ch.220 = infraction (art. 96 LTVA).",
  result:"TVA brute: (400'000 + 95'000) × 8,1% = CHF 40'095. IP: 4'200 + 7'695 = CHF 11'895. TVA nette due: CHF 28'200."
 }
});
