// Second legal review — 17.08.2026
// This module narrows factual assumptions in selected cases without changing their arithmetic.
// Current law and final AFC practice remain authoritative for real files.
import { CASES } from './data.js';

const byId=id=>CASES.find(c=>c.id===id);

// A — acquisition tax: make the foreign-supplier condition explicit.
{
  const c=byId('A');
  if(c){
    c.info='CloudTech est inscrite au registre TVA. Le prestataire cloud du cas est établi à l’étranger, <strong>n’est pas inscrit au registre des assujettis à la TVA suisse</strong> et fournit une prestation relevant, dans les hypothèses du dossier, du principe du lieu du destinataire en Suisse. L’acquisition est donc traitée comme <strong>impôt sur les acquisitions</strong>. L’usage est exclusivement entrepreneurial et imposable: l’impôt sur les acquisitions ouvre aussi le droit à déduction et est intégré au ch. 400 avec les autres coûts de services.';
    c.facts[2]=['Services cloud acquis auprès d’un prestataire étranger non inscrit au registre TVA suisse',95000,'ch. 383'];
    c.legal='Art. 8, al. 1, art. 28 et art. 45 ss LTVA; prototype AFC, ch. 383 et impôt préalable.';
    c.qualification.explain='Dans les faits du cas, le prestataire est établi à l’étranger, non inscrit au registre TVA suisse et la prestation relève du lieu du destinataire en Suisse: l’acquisition doit être déclarée au ch. 383.';
    c.checks[1]='Ch. 383 contient la base de CHF 95’000 et l’impôt CHF 7’695, sous les hypothèses explicites du cas concernant le prestataire étranger et le lieu de la prestation.';
  }
}

// B — property: state that the option is assumed legally available and that the investment IP is mixed-use IP.
{
  const c=byId('B');
  if(c){
    c.info='Le ch. 205 identifie la part du ch. 200 imposée par <strong>option</strong>; il ne s’ajoute pas une seconde fois. Dans les faits du cas, l’option sur les locaux commerciaux est valablement exercée et leur destinataire ne les affecte pas exclusivement à l’habitation. Les ventes PPE et loyers d’habitation sont traités comme prestations exclues sans option au ch. 230. L’IP de CHF 185’000 concerne des investissements / travaux à <strong>double affectation</strong>; le dossier contient une analyse technique des surfaces et usages: 20 % est admis et 80 % est corrigé au ch. 415.';
    c.facts[4]=['IP sur investissements / travaux à double affectation avant correction',185000,'ch. 405'];
    c.legal='Art. 21, 22, 28 et 30 LTVA; option et affectation réelle à vérifier et documenter.';
    c.checks[3]='La correction IP relève ici de la double affectation selon l’art. 30 LTVA: la clé de 80 % est une donnée documentée du dossier, pas un pro-rata automatique de chiffre d’affaires.';
    c.explain.ch405='IP sur investissements / travaux à double affectation avant correction: CHF 185’000.';
  }
}

// C — subsidies: reflect the express-designation rule introduced in art. 18(3) LTVA.
{
  const c=byId('C');
  if(c){
    c.info='Le sponsoring prévoit des droits contractuels de visibilité et constitue une contre-prestation commerciale dans les hypothèses du cas. Pour les deux financements publics, les collectivités concernées indiquent <strong>expressément</strong> au bénéficiaire qu’il s’agit de subventions / contributions de droit public. Ils sont donc traités selon l’art. 18, al. 3, LTVA et déclarés au ch. 900. La clé documentée du dossier fixe à 33 % la réduction de l’IP commun au ch. 420.';
    c.facts[3]=['Versement cantonal expressément désigné comme subvention / contribution de droit public',120000,'ch. 900'];
    c.facts[4]=['Aide d’une collectivité publique expressément désignée comme subvention / contribution de droit public',45000,'ch. 900'];
    c.legal='Art. 18, al. 2, let. a et al. 3, et art. 33, al. 2, LTVA; art. 29 OTVA; prototype AFC ch. 900 et ch. 420.';
    c.qualification.explain='Les collectivités publiques ont expressément désigné les fonds comme subventions / contributions de droit public; l’art. 18, al. 3, LTVA est donc déterminant dans le scénario.';
    c.checks[3]='Conserver les décisions / communications des collectivités publiques établissant la désignation expresse des fonds; ne pas transposer ce traitement à un financement privé ou à une contre-prestation commerciale.';
    if(!c.sourceKeys.includes('ordinance')) c.sourceKeys.push('ordinance');
  }
}

// G — health: avoid implying that every medical-looking service is automatically excluded.
{
  const c=byId('G');
  if(c){
    c.info='Le dossier précise que les CHF 180’000 de soins remplissent les conditions légales de l’exclusion applicable aux prestations de santé; ils sont donc traités au ch. 230. À l’inverse, les massages bien-être de CHF 120’000 <strong>ne remplissent pas les conditions d’une exclusion</strong> et sont imposables au taux normal. Les ventes de denrées admissibles sont au taux réduit et la prestation B2B de conseil est réputée fournie en France. La correction IP de CHF 12’000 provient d’un tableau d’affectation documenté, et non d’un simple ratio de chiffre d’affaires.';
    c.facts[0]=['Soins remplissant les conditions de l’exclusion applicable aux prestations de santé',180000,'ch. 230'];
    c.facts[1]=['Massages bien-être ne remplissant pas les conditions d’une exclusion',120000,'8,1 %'];
    c.legal='Art. 8, 21, 25 et 28 à 30 LTVA; les conditions concrètes de l’exclusion santé et l’affectation réelle sont déterminantes.';
    c.checks[0]='Ne pas qualifier une prestation de santé par son seul intitulé: l’exclusion ch. 230 est une hypothèse factuelle expressément donnée dans ce dossier.';
  }
}

// H — integrator: same acquisition-tax and subsidy safeguards as the specialised cases.
{
  const c=byId('H');
  if(c){
    c.info='Ce cas combine plusieurs mécanismes. Le loyer commercial opté est compris au ch. 200 et identifié au ch. 205; le logement sans option est déduit au ch. 230. Le service cloud est acquis auprès d’un <strong>prestataire étranger non inscrit au registre TVA suisse</strong> et relève, dans les faits du cas, du lieu du destinataire en Suisse: il est déclaré au ch. 383. La collectivité publique a expressément désigné le versement de CHF 55’000 comme subvention / contribution de droit public: il reste hors ch. 200 et est déclaré au ch. 900.';
    c.facts[6]=['Services cloud acquis auprès d’un prestataire étranger non inscrit au registre TVA suisse',42000,'ch. 383'];
    c.facts[8]=['Versement cantonal expressément désigné comme subvention / contribution de droit public',55000,'ch. 900'];
    c.legal='Art. 8, 18, al. 2 et 3, 21, 22, 25, 28 à 30, 33 et 45 ss LTVA; prototype AFC.';
    c.checks[3]='Ch. 383 = CHF 42’000 / CHF 3’402 sous les hypothèses du cas: prestataire étranger non inscrit en Suisse et prestation soumise à l’impôt sur les acquisitions.';
  }
}

// I — annual reconciliation: ch. 415 is tied explicitly to dual use; distinguish worksheet totals from amounts filed in the annual reconciliation.
{
  const c=byId('I');
  if(c){
    c.task='À partir des écarts détectés lors du bouclement, reconstituez l’état corrigé servant au rapprochement. Attention: ces totaux pédagogiques ne sont pas à recopier tels quels dans le formulaire de concordance annuelle; seules les différences par rapport aux décomptes déjà remis y sont déclarées.';
    c.info='L’AFC exige une <strong>concordance annuelle</strong> entre les décomptes et les comptes annuels. Le tableau de cet exercice reconstitue d’abord l’<strong>état corrigé complet</strong> afin de contrôler le dossier. Dans le formulaire de concordance annuelle au sens de l’art. 72 LTVA, seules les différences constatées par rapport aux décomptes déjà remis sont déclarées. Une erreur isolée d’une période mensuelle, trimestrielle ou semestrielle se corrige au moyen du décompte rectificatif de la période concernée.';
    c.facts[4]=['IP sur charges à double affectation — part non déductible identifiée au bouclement',5300,'ch. 415'];
    c.legal='Art. 30 et 72 LTVA; concordance annuelle, décompte rectificatif et dossier de contrôle.';
    c.checks[2]='L’IP brut est reconstitué au ch. 400; la correction de CHF 5’300 correspond explicitement à une double affectation (art. 30 LTVA) au ch. 415 et la réduction liée à la subvention au ch. 420.';
    c.checks[4]='Ne pas recopier les totaux reconstitués dans la concordance annuelle: le formulaire art. 72 porte uniquement sur les différences par rapport aux décomptes déjà remis.';
    c.explain.ch415='Correction de l’IP liée à la double affectation identifiée au bouclement: CHF 5’300.';
  }
}
