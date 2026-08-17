// TVA Avancé — référentiel pédagogique audité
// Sources principales contrôlées le 17.08.2026.
// Le prototype AFC et les publications officielles restent déterminants pour un dossier réel.

export const RATES = { ch303: 0.081, ch313: 0.026, ch343: 0.038 };

export const SOURCE_LIBRARY = {
  law: { label: 'LTVA — Fedlex', url: 'https://www.fedlex.admin.ch/eli/cc/2009/615/fr' },
  ordinance: { label: 'OTVA — Fedlex', url: 'https://www.fedlex.admin.ch/eli/cc/2009/828/fr' },
  form: { label: 'Prototype AFC — méthode effective', url: 'https://www.estv2.admin.ch/mwst/formulare/mwst-form-abr-muster-effektiv-fr.pdf' },
  rates: { label: 'AFC — taux TVA', url: 'https://www.estv.admin.ch/fr/taux-de-la-tva-suisse' },
  acquisitions: { label: 'AFC — impôt sur les acquisitions', url: 'https://www.estv.admin.ch/fr/impot-sur-les-acquisitions-tva' },
  tdfn: { label: 'AFC — TDFN et changements de méthode', url: 'https://www.estv.admin.ch/fr/tva-taux-de-la-dette-fiscale-nette-et-taux-forfaitaires' },
  tdfn2025: { label: 'AFC — changements TDFN dès 2025', url: 'https://www.estv.admin.ch/fr/tva-methode-des-taux-de-la-dette-fiscale-nette-2025' },
  group: { label: 'AFC — questions et réponses TVA', url: 'https://www.estv.admin.ch/fr/questions-et-reponses' },
  rectification: { label: 'AFC — décompte de rectification', url: 'https://www.estv.admin.ch/fr/tva-decompte-de-rectification' },
  concordance: { label: 'AFC — concordance annuelle', url: 'https://www.estv.admin.ch/fr/tva-concordance-annuelle' },
  control: { label: 'AFC — déroulement d’un contrôle TVA', url: 'https://www.estv.admin.ch/fr/deroulement-dun-controle-tva' },
  controlDocs: { label: 'AFC — documents nécessaires pour le contrôle TVA', url: 'https://www.estv.admin.ch/fr/documents-necessaires-pour-le-controle-tva' },
  online: { label: 'AFC — Décompte TVA pro / Portail AFC', url: 'https://www.estv.admin.ch/fr/decompter-la-tva' },
  annual: { label: 'AFC — décompte annuel', url: 'https://www.estv.admin.ch/fr/tva-decompte-annuel-2025' },
  subsidies: { label: 'AFC — questions et réponses (subventions / ch. 420)', url: 'https://www.estv.admin.ch/fr/questions-et-reponses' }
};

export const FIELD_META = {
  ch200: { code: '200', label: 'Total des contre-prestations convenues ou reçues', sub: 'Y compris les prestations imposées par option, les prestations à l’étranger, les prestations exonérées et les prestations exclues comprises dans le chiffre d’affaires.' },
  ch205: { code: '205', label: 'Part du ch. 200 provenant de prestations exclues mais imposées par option', sub: 'Information comprise dans le ch. 200. Elle ne s’ajoute pas une seconde fois et n’est pas une déduction.' },
  ch220: { code: '220', label: 'Prestations exonérées', sub: 'Notamment exportations et autres prestations exonérées selon l’art. 23 LTVA.', sign: '+' },
  ch221: { code: '221', label: 'Prestations fournies à l’étranger', sub: 'Lieu de la prestation situé à l’étranger.', sign: '+' },
  ch225: { code: '225', label: 'Transferts avec la procédure de déclaration', sub: 'Art. 38 LTVA; le formulaire applicable doit être téléversé dans le décompte en ligne.', sign: '+' },
  ch230: { code: '230', label: 'Prestations exclues fournies en Suisse sans option', sub: 'Prestations exclues selon l’art. 21 LTVA, sans option selon l’art. 22.', sign: '+' },
  ch235: { code: '235', label: 'Diminutions de la contre-prestation', sub: 'Rabais, escomptes, retours, pertes sur débiteurs et corrections comparables.', sign: '+' },
  ch280: { code: '280', label: 'Divers', sub: 'Autres déductions admises selon le cas et le formulaire.', sign: '+' },
  ch303: { code: '303', label: 'Prestations soumises au taux normal', sub: 'Base imposable au taux de 8,1 %.' },
  ch313: { code: '313', label: 'Prestations soumises au taux réduit', sub: 'Base imposable au taux de 2,6 %.' },
  ch343: { code: '343', label: 'Prestations soumises au taux spécial pour l’hébergement', sub: 'Base imposable au taux de 3,8 %.' },
  ch383base: { code: '383', label: 'Impôt sur les acquisitions — contre-prestation', sub: 'Contre-prestation nette soumise à l’impôt sur les acquisitions.' },
  ch383tax: { code: '383', label: 'Impôt sur les acquisitions — impôt', sub: 'Montant d’impôt dû; il entre dans le total ch. 399.' },
  ch400: { code: '400', label: 'Impôt préalable grevant les coûts en matériel et prestations de services', sub: 'Impôt préalable déductible sur coûts courants et prestations de services, y compris, dans les cas du parcours, l’impôt sur les acquisitions ouvrant le droit à déduction.' },
  ch405: { code: '405', label: 'Impôt préalable grevant les investissements et autres charges d’exploitation', sub: 'Impôt préalable classé par nature de la dépense; ce chiffre n’est pas une correction négative.', sign: '+' },
  ch410: { code: '410', label: 'Dégrèvement ultérieur de l’impôt préalable', sub: 'Montant positif; notamment en cas de changement d’affectation favorable ou, depuis 2025, lors du passage TDFN → méthode effective selon les conditions applicables.', sign: '+' },
  ch415: { code: '415', label: 'Corrections de l’impôt préalable', sub: 'Saisir une valeur positive; le formulaire applique le signe moins.', sign: '−' },
  ch420: { code: '420', label: 'Réduction de la déduction de l’impôt préalable', sub: 'Saisir une valeur positive; notamment réduction liée à certaines subventions selon une méthode appropriée et documentée.', sign: '−' },
  ch900: { code: '900', label: 'Subventions, taxes touristiques et contributions visées à l’art. 18, al. 2, let. a à c, LTVA', sub: 'Flux déclarés séparément du chiffre d’affaires selon le prototype AFC.' },
  ch910: { code: '910', label: 'Dons, dividendes, dédommagements, etc.', sub: 'Autres mouvements de fonds selon l’art. 18, al. 2, let. d à l, LTVA.' }
};

export const CASES = [
  {
    id: 'A', tab: 'SaaS étranger · ch. 383', title: 'CloudTech Sàrl — services cloud acquis à l’étranger', meta: 'SaaS / Cloud · Lausanne · T2 2026', level: 'Avancé', group: 'International',
    task: 'Déclarez les ventes suisses, l’impôt sur les acquisitions et l’impôt préalable déductible en évitant de traiter l’achat étranger comme du chiffre d’affaires.',
    info: 'CloudTech est inscrite au registre TVA. L’achat de services cloud auprès d’un prestataire étranger sans TVA suisse est analysé comme <strong>impôt sur les acquisitions</strong>. Dans ce cas, l’usage est exclusivement entrepreneurial et imposable: l’impôt sur les acquisitions ouvre aussi le droit à déduction et est intégré au ch. 400 avec les autres coûts de services.',
    facts: [
      ['Licences SaaS B2B suisses', 320000, '8,1 %'],
      ['Licences SaaS B2C suisses', 80000, '8,1 %'],
      ['Services cloud AWS Irlande facturés sans TVA suisse', 95000, 'ch. 383'],
      ['Impôt sur les acquisitions: 95’000 × 8,1 %', 7695, 'ch. 383'],
      ['TVA déductible sur autres coûts courants suisses', 4200, 'IP'],
      ['IP total ch. 400 = 4’200 + 7’695', 11895, 'ch. 400']
    ],
    hiddenOutsideLearn: [3,5],
    legal: 'Art. 8, 28 et 45 ss LTVA; prototype AFC, ch. 383 et impôt préalable.', sourceKeys: ['law','form','acquisitions','rates'],
    qualification: { question: 'Quel est le bon réflexe pour l’achat cloud étranger du cas ?', options: ['L’ajouter au ch. 200 comme chiffre d’affaires', 'Le déclarer comme impôt sur les acquisitions au ch. 383', 'Le déclarer au ch. 221 comme prestation à l’étranger', 'L’ignorer si la facture ne contient pas de TVA suisse'], correct: 1, explain: 'Pour un assujetti inscrit, les acquisitions visées doivent être déclarées et imposées; le ch. 383 porte la contre-prestation et l’impôt.' },
    checks: ['Ch. 200 reprend uniquement les contre-prestations propres de CloudTech.', 'Ch. 383 contient la base de CHF 95’000 et l’impôt CHF 7’695.', 'L’IP correspondant n’est déductible que si les conditions du droit à déduction sont remplies.', 'Dans le cas, l’IP ch. 400 comprend CHF 4’200 + CHF 7’695.'],
    fields: ['ch200','ch303','ch383base','ch383tax','ch400'],
    expected: { ch200:400000, ch303:400000, ch383base:95000, ch383tax:7695, ch400:11895 },
    explain: {
      ch200:'Les ventes propres suisses totalisent CHF 400’000.',
      ch303:'Toute la base propre est imposable au taux normal: CHF 400’000.',
      ch383base:'La contre-prestation nette des services cloud étrangers est CHF 95’000.',
      ch383tax:'CHF 95’000 × 8,1 % = CHF 7’695 d’impôt sur les acquisitions.',
      ch400:'Dans les hypothèses du cas, CHF 4’200 d’IP sur coûts suisses + CHF 7’695 d’impôt sur les acquisitions déductible = CHF 11’895.'
    }
  },
  {
    id: 'B', tab: 'Immobilier · option + IP', title: 'ImmoDev SA — immeuble à usages mixtes', meta: 'Immobilier · Genève · T4 2026', level: 'Expert', group: 'Immobilier',
    task: 'Distinguez chiffre d’affaires imposé par option, prestations immobilières exclues et correction de l’impôt préalable selon la clé d’affectation documentée du dossier.',
    info: 'Le ch. 205 identifie la part du ch. 200 imposée par <strong>option</strong>; il ne s’ajoute pas une seconde fois. Les ventes PPE et loyers d’habitation du cas sont traités comme prestations exclues sans option au ch. 230. Le dossier contient une analyse technique des surfaces et de l’affectation: 20 % de l’IP sur travaux est admise, 80 % doit être corrigée au ch. 415.',
    facts: [
      ['Ventes PPE exclues sans option dans les hypothèses du cas', 2800000, 'ch. 230'],
      ['Loyers commerciaux avec option valablement exercée', 360000, 'ch. 205 / 8,1 %'],
      ['Loyers d’habitation sans option', 180000, 'ch. 230'],
      ['IP sur coûts courants directement liés à l’activité imposable', 8000, 'ch. 400'],
      ['IP brut sur investissements / travaux', 185000, 'ch. 405'],
      ['Part non déductible selon clé d’affectation documentée: 80 %', 80, '80 %'],
      ['Correction ch. 415: 185’000 × 80 %', 148000, 'ch. 415']
    ],
    hiddenOutsideLearn:[6],
    legal: 'Art. 21, 22, 28 à 30 LTVA; affectation réelle et méthode appropriée à documenter.', sourceKeys:['law','form','control','controlDocs'],
    qualification: { question: 'Quelle affirmation est correcte pour le loyer commercial opté ?', options: ['Il est ajouté au ch. 200 puis encore une fois au ch. 205', 'Il est compris au ch. 200 et sa part est indiquée au ch. 205', 'Il est déduit au ch. 230', 'Il n’apparaît jamais dans le décompte'], correct:1, explain:'Le ch. 205 est une information comprise dans le ch. 200.' },
    checks: ['Ch. 200 = 2’800’000 + 360’000 + 180’000.', 'Ch. 205 = CHF 360’000, déjà compris dans le ch. 200.', 'Ch. 230 regroupe les prestations exclues sans option du scénario: CHF 2’980’000.', 'La correction IP n’est pas un pro-rata automatique de chiffre d’affaires: la clé de 80 % est donnée et documentée dans le cas.'],
    fields:['ch200','ch205','ch230','ch303','ch400','ch405','ch415'],
    expected:{ ch200:3340000, ch205:360000, ch230:2980000, ch303:360000, ch400:8000, ch405:185000, ch415:148000 },
    explain:{
      ch200:'Total des contre-prestations du dossier: CHF 3’340’000.',
      ch205:'CHF 360’000 de loyers commerciaux sont imposés par option et déjà compris dans le ch. 200.',
      ch230:'Ventes PPE CHF 2’800’000 + loyers habitation CHF 180’000 = CHF 2’980’000 de prestations exclues sans option.',
      ch303:'La base taxable au taux normal est le loyer commercial opté: CHF 360’000.',
      ch400:'IP directement attribuable à l’activité imposable: CHF 8’000.',
      ch405:'IP brute sur investissements: CHF 185’000.',
      ch415:'Correction selon la clé d’affectation fournie: CHF 185’000 × 80 % = CHF 148’000.'
    }
  },
  {
    id:'C', tab:'Subvention + sponsoring', title:'Association Sport & Région — financement public et sponsoring', meta:'Association · Sion · T1 2026', level:'Expert', group:'Subventions',
    task:'Séparez les contre-prestations commerciales du financement public et appliquez la réduction de l’impôt préalable prévue par la clé documentée du dossier.',
    info:'Le sponsoring avec visibilité constitue une contre-prestation commerciale dans les hypothèses du cas. La contribution cantonale et l’aide institutionnelle sont expressément qualifiées comme <strong>subventions sans contre-prestation individualisable</strong>: elles sont déclarées au ch. 900. La clé documentée du dossier fixe à 33 % la part de l’IP commun à réduire au ch. 420.',
    facts:[
      ['Droits d’entrée aux événements',180000,'8,1 %'],
      ['Nuitées facturées dans le cadre du cas',95000,'3,8 %'],
      ['Sponsoring avec droits de visibilité',60000,'8,1 %'],
      ['Subvention cantonale sans contre-prestation individualisable',120000,'ch. 900'],
      ['Aide institutionnelle qualifiée de subvention dans la décision',45000,'ch. 900'],
      ['IP commun avant réduction',22000,'ch. 400'],
      ['Clé de réduction documentée du dossier',33,'33 %'],
      ['Réduction ch. 420',7260,'ch. 420']
    ],
    hiddenOutsideLearn:[7],
    legal:'Art. 18 et 33 LTVA; prototype AFC ch. 900 et ch. 420; qualification du financement à documenter.', sourceKeys:['law','form','subsidies','control'],
    qualification:{question:'Comment traiter les CHF 165’000 de financement public du cas ?',options:['Comme chiffre d’affaires imposable au ch. 200','Comme subventions au ch. 900, avec examen de la réduction IP','Comme dons au ch. 910','Comme diminution de contre-prestation au ch. 235'],correct:1,explain:'Les décisions du dossier qualifient les montants de subventions sans contre-prestation individualisable.'},
    checks:['Le sponsoring reste dans le chiffre d’affaires et est imposable au taux normal dans le cas.', 'Les subventions ne sont pas ajoutées au ch. 200.', 'Le ch. 420 réduit l’IP; la clé de 33 % est une donnée du dossier, pas une règle universelle.', 'La qualification juridique du financement doit être conservée dans le dossier TVA.'],
    fields:['ch200','ch303','ch343','ch400','ch420','ch900'],
    expected:{ch200:335000,ch303:240000,ch343:95000,ch400:22000,ch420:7260,ch900:165000},
    explain:{
      ch200:'Contre-prestations: 180’000 + 95’000 + 60’000 = CHF 335’000.',
      ch303:'Événements CHF 180’000 + sponsoring CHF 60’000 = CHF 240’000 à 8,1 %.',
      ch343:'Hébergement du cas: CHF 95’000 à 3,8 %.',
      ch400:'IP commun avant réduction: CHF 22’000.',
      ch420:'Réduction selon la clé fournie: CHF 22’000 × 33 % = CHF 7’260.',
      ch900:'Subventions: CHF 120’000 + CHF 45’000 = CHF 165’000.'
    }
  },
  {
    id:'D', tab:'Groupe TVA', title:'Nexus Group — décompte du groupe d’imposition', meta:'Groupe de sociétés · Bâle · T2 2026', level:'Expert', group:'Groupe TVA',
    task:'Établissez le décompte du groupe en excluant les prestations internes du chiffre d’affaires à déclarer.',
    info:'Le groupe est valablement constitué comme <strong>groupe d’imposition TVA</strong>. Les sociétés sont traitées comme un seul assujetti; les prestations qu’elles se fournissent mutuellement ne sont pas imposées. Le décompte du cas ne reprend donc que les opérations externes.',
    facts:[
      ['Services externes Nexus Services Sàrl',680000,'8,1 %'],
      ['Ventes externes Nexus Distribution SA',920000,'8,1 %'],
      ['Management fees internes au groupe',240000,'hors décompte'],
      ['Refacturations IT internes au groupe',85000,'hors décompte'],
      ['IP déductible sur dépenses externes du groupe',52000,'ch. 400']
    ],
    legal:'Art. 13 LTVA; l’imposition de groupe traite les membres comme un seul assujetti.', sourceKeys:['law','group','form','control'],
    qualification:{question:'Que faire des CHF 325’000 de flux internes au groupe TVA ?',options:['Les inclure au ch. 200 puis les déduire au ch. 225','Ne pas les traiter comme prestations imposables du groupe envers lui-même','Les déclarer au ch. 230','Les déclarer au ch. 910'],correct:1,explain:'Dans un groupe d’imposition TVA, les prestations entre membres ne doivent pas être imposées.'},
    checks:['Ch. 200 reprend uniquement les contre-prestations externes du groupe dans ce cas.', 'Les flux internes ne sont pas une procédure de déclaration ch. 225.', 'Le dossier de groupe doit permettre de réconcilier les flux internes et externes.', 'Le représentant du groupe et le périmètre des membres doivent être documentés.'],
    fields:['ch200','ch303','ch400'],
    expected:{ch200:1600000,ch303:1600000,ch400:52000},
    explain:{
      ch200:'CA externe du groupe: CHF 680’000 + CHF 920’000 = CHF 1’600’000.',
      ch303:'Toute la base externe du scénario est imposable au taux normal.',
      ch400:'IP déductible sur dépenses externes: CHF 52’000.'
    }
  },
  {
    id:'E', tab:'TDFN → effective', title:'Alpina Services — passage TDFN vers méthode effective', meta:'Services B2B · Vaud · T1 2026', level:'Expert', group:'Changement de méthode',
    task:'Préparez le premier décompte à la méthode effective et traitez le dégrèvement sur la valeur résiduelle des biens et services selon le calcul déjà documenté dans le dossier.',
    info:'Depuis 2025, lors du passage <strong>TDFN → méthode effective</strong>, l’impôt préalable sur la valeur résiduelle qui n’avait pas été déduit peut, si les conditions sont remplies, être porté au <strong>ch. 410 du premier décompte effectif</strong>. Le calcul de CHF 8’000 est fourni par le dossier; le but est ici de choisir la bonne rubrique.',
    facts:[
      ['Prestations imposables du premier trimestre effectif',500000,'8,1 %'],
      ['IP sur coûts courants du trimestre',24000,'ch. 400'],
      ['IP sur investissements du trimestre',4000,'ch. 405'],
      ['Dégrèvement sur valeur résiduelle calculé et documenté',8000,'ch. 410']
    ],
    legal:'Art. 37 LTVA et pratique AFC sur les changements de méthode dès 2025.', sourceKeys:['law','tdfn','tdfn2025','form'],
    qualification:{question:'Où porter le dégrèvement de CHF 8’000 lors du passage TDFN → effective ?',options:['Ch. 410 du premier décompte effectif','Ch. 415 du dernier décompte TDFN','Ch. 420 du premier décompte effectif','Ch. 900'],correct:0,explain:'L’AFC indique le ch. 410 du premier décompte après passage à la méthode effective.'},
    checks:['Le TDFN n’est plus utilisé pour calculer la dette du trimestre.', 'L’IP courant est désormais déterminé selon la méthode effective.', 'Le dégrèvement sur valeur résiduelle est porté au ch. 410 selon le calcul documenté.', 'Les délais et conditions de changement doivent être vérifiés dans le dossier réel.'],
    fields:['ch200','ch303','ch400','ch405','ch410'],
    expected:{ch200:500000,ch303:500000,ch400:24000,ch405:4000,ch410:8000},
    explain:{
      ch200:'Prestations du trimestre: CHF 500’000.',
      ch303:'Base taxable au taux normal: CHF 500’000.',
      ch400:'IP sur coûts courants: CHF 24’000.',
      ch405:'IP sur investissements: CHF 4’000.',
      ch410:'Dégrèvement de valeur résiduelle fourni par le dossier: CHF 8’000.'
    }
  },
  {
    id:'F', tab:'Effective → TDFN', title:'FiduPro Sàrl — dernier décompte avant passage aux TDFN', meta:'Fiduciaire · Lausanne · T4 2026', level:'Expert', group:'Changement de méthode',
    task:'Établissez le dernier décompte à la méthode effective et reportez la correction de valeur résiduelle exigée par le passage aux TDFN.',
    info:'Lors du passage <strong>méthode effective → TDFN</strong>, l’AFC indique que les impôts préalables sur la valeur résiduelle concernés doivent être remboursés dans le <strong>dernier décompte effectif via le ch. 415</strong>. Le montant de CHF 6’000 est déjà calculé et justifié dans le dossier.',
    facts:[
      ['Prestations imposables du dernier trimestre effectif',420000,'8,1 %'],
      ['IP sur coûts courants',17000,'ch. 400'],
      ['IP sur investissements',3000,'ch. 405'],
      ['Correction de valeur résiduelle avant passage TDFN',6000,'ch. 415']
    ],
    legal:'Art. 37 LTVA et pratique AFC sur les changements de méthode dès 2025.', sourceKeys:['law','tdfn','tdfn2025','form'],
    qualification:{question:'Où porter la correction de CHF 6’000 avant le passage effective → TDFN ?',options:['Ch. 415 du dernier décompte effectif','Ch. 410 du premier décompte TDFN','Ch. 420 du dernier décompte effectif','Ch. 235'],correct:0,explain:'L’AFC indique le ch. 415 du dernier décompte selon la méthode effective.'},
    checks:['La correction ch. 415 diminue l’IP net.', 'Le montant de valeur résiduelle doit être calculé et documenté selon les règles applicables.', 'Le dernier décompte reste un décompte selon la méthode effective.', 'La facturation aux clients continue d’utiliser les taux légaux, pas le TDFN.'],
    fields:['ch200','ch303','ch400','ch405','ch415'],
    expected:{ch200:420000,ch303:420000,ch400:17000,ch405:3000,ch415:6000},
    explain:{
      ch200:'Prestations du dernier trimestre effectif: CHF 420’000.',
      ch303:'Base au taux normal: CHF 420’000.',
      ch400:'IP sur coûts: CHF 17’000.',
      ch405:'IP sur investissements: CHF 3’000.',
      ch415:'Correction de valeur résiduelle à rembourser: CHF 6’000.'
    }
  },
  {
    id:'G', tab:'Activités mixtes', title:'Centre Santé & Wellness — cinq statuts TVA', meta:'Santé / bien-être · Bâle · T1 2026', level:'Expert', group:'Activités mixtes',
    task:'Ventilez prestations exclues, prestation à l’étranger, taux normal et taux réduit, puis appliquez la correction IP selon l’analyse d’affectation fournie.',
    info:'Le dossier distingue des soins médicaux exclus sans option, des prestations de bien-être imposables, des ventes de denrées au taux réduit et une prestation B2B dont le lieu est en France. La correction IP de CHF 12’000 résulte d’un <strong>tableau d’affectation réel</strong> fourni au dossier, et non d’un simple ratio de chiffre d’affaires.',
    facts:[
      ['Soins médicaux exclus sans option',180000,'ch. 230'],
      ['Massages bien-être',120000,'8,1 %'],
      ['Café-restauration',85000,'8,1 %'],
      ['Denrées alimentaires admissibles à emporter',42000,'2,6 %'],
      ['Conseil B2B à une entreprise française, lieu en France selon les faits du cas',38000,'ch. 221'],
      ['IP sur coûts courants avant correction',24000,'ch. 400'],
      ['IP sur investissements avant correction',7000,'ch. 405'],
      ['Correction selon tableau d’affectation documenté',12000,'ch. 415']
    ],
    legal:'Art. 8, 21, 25 et 28 à 30 LTVA; qualification et affectation réelle déterminantes.', sourceKeys:['law','form','rates','control'],
    qualification:{question:'Quelle différence clé faut-il conserver entre ch. 221 et ch. 230 ?',options:['Aucune; les deux sont des prestations exclues','Le ch. 221 vise une prestation fournie à l’étranger; le ch. 230 une prestation exclue en Suisse sans option','Le ch. 221 vise les dons et le ch. 230 les subventions','Le ch. 221 vise l’IP et le ch. 230 le chiffre d’affaires'],correct:1,explain:'Le lieu de prestation à l’étranger et l’exclusion du champ en Suisse sont deux qualifications différentes.'},
    checks:['Ch. 200 inclut les contre-prestations du cas avant les déductions.', 'Ch. 221 = CHF 38’000; ch. 230 = CHF 180’000.', 'Ch. 303 = CHF 205’000 et ch. 313 = CHF 42’000.', 'La correction ch. 415 provient du tableau d’affectation du dossier, pas d’une règle de trois automatique.'],
    fields:['ch200','ch221','ch230','ch303','ch313','ch400','ch405','ch415'],
    expected:{ch200:465000,ch221:38000,ch230:180000,ch303:205000,ch313:42000,ch400:24000,ch405:7000,ch415:12000},
    explain:{
      ch200:'Total des contre-prestations: CHF 465’000.',
      ch221:'Conseil B2B réputé fourni en France dans les hypothèses du cas: CHF 38’000.',
      ch230:'Soins médicaux exclus sans option: CHF 180’000.',
      ch303:'Massages CHF 120’000 + restauration CHF 85’000 = CHF 205’000.',
      ch313:'Denrées admissibles à emporter: CHF 42’000.',
      ch400:'IP sur coûts courants avant correction: CHF 24’000.',
      ch405:'IP sur investissements avant correction: CHF 7’000.',
      ch415:'Correction selon l’affectation documentée: CHF 12’000.'
    }
  },
  {
    id:'H', tab:'Intégrateur', title:'Groupe Alpin Diversifié — décompte avancé complet', meta:'Hôtellerie / immobilier / SaaS · Valais · T2 2026', level:'Expert +', group:'Intégrateur',
    task:'Construisez un décompte combinant option immobilière, prestation exclue, trois blocs de TVA, impôt sur les acquisitions et subvention.',
    info:'Ce cas combine plusieurs mécanismes sans reprendre les anciennes rubriques du formulaire. Le loyer commercial opté est compris au ch. 200 et identifié au ch. 205; le logement sans option est déduit au ch. 230; AWS est déclaré au ch. 383; la subvention est hors ch. 200 et déclarée au ch. 900.',
    facts:[
      ['Nuitées',280000,'3,8 %'],
      ['Restaurant',110000,'8,1 %'],
      ['Prestations wellness',95000,'8,1 %'],
      ['Location de bureaux avec option',160000,'ch. 205 / 8,1 %'],
      ['Location d’habitation sans option',85000,'ch. 230'],
      ['SaaS vendu en Suisse',75000,'8,1 %'],
      ['Services cloud étrangers',42000,'ch. 383'],
      ['Impôt sur les acquisitions: 42’000 × 8,1 %',3402,'ch. 383'],
      ['Subvention cantonale qualifiée sans contre-prestation',55000,'ch. 900'],
      ['IP sur coûts courants, acquisition tax déductible comprise',48000,'ch. 400'],
      ['IP sur investissements',10000,'ch. 405'],
      ['Correction IP selon affectation documentée',5000,'ch. 415'],
      ['Réduction IP liée à la subvention selon clé du dossier',3000,'ch. 420']
    ],
    hiddenOutsideLearn:[7],
    legal:'Art. 8, 18, 21, 22, 25, 28 à 30, 33 et 45 ss LTVA; prototype AFC.', sourceKeys:['law','form','rates','acquisitions','subsidies','control'],
    qualification:{question:'Quelle combinaison de rubriques décrit correctement les éléments particuliers du cas ?',options:['205 option · 230 exclu · 383 acquisitions · 900 subvention','205 acquisitions · 230 rabais · 383 subvention · 900 option','205 exclu · 230 acquisition · 383 don · 900 chiffre d’affaires','Tous les éléments vont au ch. 200 uniquement'],correct:0,explain:'Le cas utilise la structure actuelle: option ch. 205, exclusion ch. 230, impôt sur acquisitions ch. 383 et subvention ch. 900.'},
    checks:['Ch. 200 = CHF 805’000; la subvention et l’achat étranger ne s’y ajoutent pas.', 'Ch. 205 est une information incluse dans le ch. 200.', 'Ch. 230 retire CHF 85’000 de prestations exclues.', 'Ch. 383 = CHF 42’000 / CHF 3’402.', 'Ch. 415 et 420 diminuent l’IP net.'],
    fields:['ch200','ch205','ch230','ch303','ch343','ch383base','ch383tax','ch400','ch405','ch415','ch420','ch900'],
    expected:{ch200:805000,ch205:160000,ch230:85000,ch303:440000,ch343:280000,ch383base:42000,ch383tax:3402,ch400:48000,ch405:10000,ch415:5000,ch420:3000,ch900:55000},
    explain:{
      ch200:'280’000 + 110’000 + 95’000 + 160’000 + 85’000 + 75’000 = CHF 805’000.',
      ch205:'Loyer commercial opté: CHF 160’000, déjà compris dans le ch. 200.',
      ch230:'Location d’habitation exclue sans option: CHF 85’000.',
      ch303:'Restaurant 110’000 + wellness 95’000 + bureaux optés 160’000 + SaaS 75’000 = CHF 440’000.',
      ch343:'Hébergement: CHF 280’000.',
      ch383base:'Services cloud étrangers: CHF 42’000.',
      ch383tax:'CHF 42’000 × 8,1 % = CHF 3’402.',
      ch400:'IP sur coûts courants selon le dossier, impôt sur acquisitions déductible compris: CHF 48’000.',
      ch405:'IP sur investissements: CHF 10’000.',
      ch415:'Correction IP selon l’affectation documentée: CHF 5’000.',
      ch420:'Réduction liée à la subvention selon la clé documentée: CHF 3’000.',
      ch900:'Subvention cantonale: CHF 55’000.'
    }
  },
  {
    id:'I', tab:'Concordance annuelle', title:'Helvetic Services — concordance annuelle et état corrigé', meta:'Services B2B · Fribourg · clôture 2026', level:'Expert +', group:'Contrôle & rectification',
    task:'À partir des écarts détectés lors du bouclement, reconstituez l’état corrigé qui doit soutenir la concordance et la rectification des périodes concernées.',
    info:'L’AFC exige une <strong>concordance annuelle</strong> entre décomptes et comptes annuels. Pour les erreurs découvertes lors de cette concordance, seules les différences sont déclarées dans le formulaire de concordance annuelle; pour une erreur isolée d’une période mensuelle, trimestrielle ou semestrielle, le décompte rectificatif de la période concernée doit être utilisé. Ici, le tableau pédagogique demande de reconstituer l’<strong>état corrigé</strong> du dossier avant dépôt.',
    facts:[
      ['Prestations imposables déjà correctement prises en compte',1000000,'8,1 %'],
      ['Facture client imposable oubliée',60000,'8,1 %'],
      ['Subvention cantonale qualifiée sans contre-prestation',40000,'ch. 900'],
      ['IP comptabilisé avant revue',70000,'ch. 400'],
      ['IP non justifié à corriger',5300,'ch. 415'],
      ['Réduction IP liée à la subvention selon calcul documenté',2400,'ch. 420']
    ],
    legal:'Art. 72 LTVA; concordance annuelle, décompte rectificatif et dossier de contrôle.', sourceKeys:['law','concordance','rectification','control','controlDocs','online'],
    qualification:{question:'Une erreur isolée d’un trimestre déjà remis est découverte pendant l’année. Quelle procédure indique l’AFC ?',options:['Corriger le décompte de la période concernée','Attendre obligatoirement la concordance annuelle','Ajouter silencieusement l’écart au trimestre suivant','Modifier uniquement la comptabilité'],correct:0,explain:'Pour une correction isolée, l’AFC indique le décompte rectificatif de la période concernée.'},
    checks:['L’état corrigé du CA imposable est CHF 1’060’000.', 'La subvention reste hors ch. 200 et va au ch. 900.', 'L’IP brut est reconstitué au ch. 400 puis les reprises apparaissent aux ch. 415 et 420.', 'Le dossier de concordance doit rapprocher comptes de revenus, comptes d’IP et décomptes remis.', 'Le mode de dépôt dépend de la nature de la correction: période isolée vs concordance annuelle.'],
    fields:['ch200','ch303','ch400','ch415','ch420','ch900'],
    expected:{ch200:1060000,ch303:1060000,ch400:70000,ch415:5300,ch420:2400,ch900:40000},
    explain:{
      ch200:'État corrigé des contre-prestations imposables: CHF 1’000’000 + CHF 60’000 = CHF 1’060’000.',
      ch303:'Toute la base corrigée est au taux normal: CHF 1’060’000.',
      ch400:'IP comptabilisé avant reprises: CHF 70’000.',
      ch415:'IP non justifié à corriger: CHF 5’300.',
      ch420:'Réduction liée à la subvention selon le calcul documenté: CHF 2’400.',
      ch900:'Subvention: CHF 40’000.'
    }
  }
];

const CASE_PROOFS = {
  A:['Facture / contrat du prestataire étranger','Preuve de la nature du service et du lieu de prestation','Calcul ch. 383','Justification de l’affectation ouvrant le droit à déduction'],
  B:['Baux et preuve de l’option','Plans / surfaces et affectations','Factures de travaux','Tableau de correction IP et méthode retenue'],
  C:['Décisions de subvention','Contrats de sponsoring','Tableau de réduction IP','Grand livre des financements et produits'],
  D:['Décision / confirmation du groupe TVA','Liste des membres et représentant','Réconciliation des flux internes','Consolidation des opérations externes'],
  E:['Demande / confirmation du changement de méthode','Inventaire des valeurs résiduelles','Calcul du dégrèvement ch. 410','Factures et registre des immobilisations'],
  F:['Demande / confirmation du changement de méthode','Inventaire des valeurs résiduelles','Calcul de la correction ch. 415','Dernier décompte effectif et pièces d’IP'],
  G:['Contrats et qualification des prestations','Preuves du lieu de prestation étranger','Ventilation des recettes par statut TVA','Tableau d’affectation et correction IP'],
  H:['Dossier par rubrique 200–910','Factures d’acquisition étrangères','Baux et option immobilière','Décision de subvention','Tableaux ch. 415 / 420'],
  I:['Grand livre CA et comptes TVA','Décomptes remis','Facture oubliée','Décision de subvention','Liste des factures IP reprises','Tableau de concordance annuelle']
};
CASES.forEach(c=>{ c.proofs = CASE_PROOFS[c.id] || []; });
