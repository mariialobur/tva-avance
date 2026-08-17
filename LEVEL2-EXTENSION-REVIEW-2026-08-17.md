# Revue d’extension — méthode effective Niveau 2

**Date : 17.08.2026**  
**Version : 2.0.0**  
**Périmètre : passage de 9 à 18 dossiers avancés**

## Objectif

La seconde moitié du Niveau 2 a été conçue pour réduire l’écart entre un exercice fiscal «propre» et le travail réel d’une fiduciaire. Les nouveaux dossiers partent davantage de comptes, pièces, erreurs préparées par un tiers, données internationales et situations de contrôle.

Le principe pédagogique est désormais: **détecter → qualifier → rapprocher → corriger → documenter**, et pas seulement calculer un montant déjà clairement qualifié.

## Dossiers ajoutés

| Cas | Thème | Compétence principale |
|---|---|---|
| J | Grand livre → décompte | reconstruire les rubriques depuis les comptes de produits |
| K | Audit du junior | détecter un mélange entre CA, don, prestation étrangère et achat étranger |
| L | Import + acquisition | distinguer TVA à l’importation, DTe et impôt sur les acquisitions |
| M | Acquisition + activité mixte | déclarer intégralement l’acquisition tout en limitant le droit à l’IP |
| N | Devise + ch. 383 | convertir une acquisition étrangère à la date déterminante |
| O | Personne étroitement liée | utiliser la valeur entre tiers indépendants lorsque l’art. 24, al. 2, LTVA s’applique |
| P | Compensation de créances | ne pas confondre prestations réciproques et règlement net |
| Q | Immeuble · changement | correction de valeur résiduelle après changement d’affectation immobilier |
| R | Contrôle annuel complet | rapprocher grand livre, CA, IP, subvention, corrections et concordance |

## Points de droit / pratique contrôlés

### Grand livre et contrôle TVA

L’AFC explique que l’expert fiscal détermine les contre-prestations à déclarer à partir de la comptabilité, compare les chiffres avec les décomptes remis et contrôle le fil conducteur entre pièces, comptes et déclarations. Elle cite également les compensations de créances, les personnes étroitement liées, les changements d’affectation, les parts privées et les paiements anticipés parmi les états de fait à examiner.

Source: https://www.estv.admin.ch/fr/deroulement-dun-controle-tva

### Importation et DTe

L’importation physique de biens est distinguée de l’impôt sur les acquisitions. La DTe à l’importation constitue une preuve pour la déduction de l’impôt préalable dans le décompte TVA et doit être archivée électroniquement.

Source: https://www.estv.admin.ch/fr/decisions-de-taxation-electroniques-de-la-douane

### Monnaies étrangères

Les montants en monnaie étrangère sont convertis en CHF. Pour l’impôt grevant les opérations et l’impôt sur les acquisitions, le cours déterminant est celui en vigueur au moment de la naissance de la créance fiscale; pour l’IP, celui au moment de la naissance du droit à déduction. L’AFC admet notamment le cours du jour ou le cours mensuel moyen; la méthode choisie doit être conservée pendant au moins une période fiscale.

Source: https://www.estv.admin.ch/fr/tva-cours-de-change-de-monnaies-etrangeres

### Personnes étroitement liées

Le dossier O applique l’art. 24, al. 2, LTVA: pour les prestations à des personnes étroitement liées, la contre-prestation correspond à la valeur qui aurait été convenue entre tiers indépendants. Le scénario fournit explicitement cette valeur afin d’éviter d’inventer une estimation dans l’exercice.

Source: LTVA, RS 641.20 — https://www.fedlex.admin.ch/eli/cc/2009/615/fr

### Changement d’affectation immobilier

Le dossier Q part d’une IP historiquement déduite sur un investissement immobilier qui passe d’un usage ouvrant droit à déduction à une habitation exclue. Le calcul pédagogique fournit cinq années écoulées et applique la logique de valeur résiduelle immobilière réduite d’un vingtième par année écoulée.

Source: LTVA, art. 31 ss — https://www.fedlex.admin.ch/eli/cc/2009/615/fr

### Concordance annuelle

Le dossier R reconstruit volontairement un état annuel complet pour le rapprochement. Ce tableau de travail ne doit pas être recopié comme tel dans la concordance annuelle: l’AFC demande d’y déclarer uniquement les différences constatées par rapport aux décomptes déjà remis.

Source: https://www.estv.admin.ch/fr/tva-concordance-annuelle

## Garde-fous pédagogiques

- Les cours EUR/CHF utilisés dans les exercices sont des **données de scénario**, jamais des cours à réutiliser dans un dossier réel.
- La DTe et l’affectation sont explicitement données lorsque la déduction de la TVA à l’importation est admise.
- Dans le cas M, la base soumise à l’impôt sur les acquisitions n’est pas artificiellement réduite en fonction du pourcentage d’IP déductible.
- La valeur entre tiers indépendants du cas O est fournie et documentée par le scénario; le participant ne doit pas inventer une valeur de marché.
- La compensation du cas P concerne deux prestations réciproques réelles; le montant net payé n’est pas utilisé comme chiffre d’affaires.
- Le cas Q précise l’historique de déduction, le changement complet d’affectation et le nombre d’années écoulées.
- Le cas R distingue explicitement l’état corrigé complet du rapprochement et les seules différences à déclarer dans la concordance annuelle.

## Évaluation et qualité

La progression A–I existante est conservée, mais les nouveaux dossiers J–R doivent être maîtrisés séparément. Le résultat final utilise désormais la clé locale `tva_avance_final_evaluation_v2`: une réussite obtenue avec l’ancien parcours de 9 dossiers ne débloque pas l’attestation du parcours étendu.

La version 2.0.0 ajoute une suite automatisée comprenant smoke tests, tests unitaires et Playwright E2E. Les tests vérifient notamment que les 18 dossiers existent, que leurs rubriques et sources sont connues, que l’arithmétique se réconcilie et que les nouveaux dossiers peuvent être ouverts dans l’interface.

## Limite

Cette revue porte sur la cohérence pédagogique des scénarios au regard des sources officielles identifiées à la date ci-dessus. Un dossier réel peut exiger une analyse différente en fonction des faits, des pièces, de la période fiscale ou d’une évolution du droit / de la pratique AFC.
