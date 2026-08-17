# TVA Suisse — pratique avancée

**Version actuelle : v1.1.0** · Revue juridique approfondie : **17.08.2026**

Parcours pédagogique indépendant consacré à la pratique avancée de la TVA suisse selon la **méthode effective**. L’objectif n’est pas de mémoriser des numéros de rubriques, mais d’apprendre à qualifier une opération, construire le décompte, contrôler l’impôt préalable et documenter un dossier défendable.

🌐 **Démo :** https://mariialobur.github.io/tva-avance/

## Objectif pédagogique

Le parcours se situe après le niveau «Méthode effective» et avant ou en parallèle d’une spécialisation TDFN. Les scénarios reproduisent des situations proches de dossiers PME / fiduciaire: opérations internationales, immobilier, financements publics, groupe TVA, activités mixtes, changements de méthode et clôture annuelle.

Chaque cas repose sur des hypothèses factuelles explicites. Un résultat valable dans un exercice ne doit pas être transformé en règle générale lorsque le droit dépend notamment du lieu de la prestation, du statut du fournisseur, de l’affectation, des pièces disponibles ou des conditions d’une exclusion / option.

## Les 9 dossiers

| Cas | Dossier | Compétence principale |
|---|---|---|
| **A** | SaaS étranger | Impôt sur les acquisitions, ch. 383 et droit à déduction |
| **B** | Immobilier à usages mixtes | Option, ch. 205/230 et correction IP selon l’affectation |
| **C** | Subvention + sponsoring | Contre-prestation, art. 18 LTVA, ch. 900 et réduction ch. 420 |
| **D** | Groupe TVA | Périmètre du groupe et traitement des flux internes |
| **E** | TDFN → effective | Valeur résiduelle et dégrèvement ch. 410 |
| **F** | Effective → TDFN | Valeur résiduelle et correction ch. 415 |
| **G** | Activités mixtes | Santé, prestations à l’étranger, taux multiples et double affectation |
| **H** | Intégrateur | Construction d’un décompte complexe multi-mécanismes |
| **I** | Concordance annuelle | Rapprochement, art. 72 LTVA, rectification et dossier de clôture |

## Trois modes de travail

**Apprentissage** affiche les explications, les sources, les contrôles métier et les pièces à conserver. **Entraînement** réduit progressivement l’aide afin de forcer la qualification autonome. **Évaluation** masque les indices et le corrigé avant la remise; un cas n’est considéré comme maîtrisé qu’après un résultat de **100 %** dans ce mode.

La progression est enregistrée uniquement dans le navigateur via `localStorage`.

## Évaluation finale et attestation

L’évaluation finale se débloque après validation des **9/9 cas** en mode Évaluation. Elle comporte **15 questions tirées aléatoirement** d’une banque plus large, avec un seuil de réussite de **12/15 (80 %)**.

Après réussite, une **Attestation de parcours — TVA suisse · pratique avancée** peut être générée localement. Le nom est saisi par le participant dans son navigateur; aucune identité n’est vérifiée et aucun résultat n’est certifié par un tiers. Cette attestation ne constitue ni un diplôme, ni un titre professionnel, ni une certification reconnue ou accréditée.

## Référentiel juridique

Le parcours est construit à partir des sources officielles actuellement applicables, notamment:

- **LTVA** — RS 641.20;
- **OTVA** — RS 641.201;
- prototype AFC du décompte selon la méthode effective;
- publications et pages de pratique de l’**AFC/ESTV** concernant les taux, l’impôt sur les acquisitions, les TDFN, la concordance annuelle, les rectifications et les contrôles TVA.

Les taux utilisés pour les périodes 2026 du parcours sont **8,1 % / 2,6 % / 3,8 %**.

### Règle de maintenance

Seuls le droit en vigueur et la pratique AFC publiée comme applicable sont intégrés comme référence normative. Les **projets législatifs en consultation** et les **projets de pratique AFC** ne sont pas présentés comme du droit applicable avant leur entrée en vigueur ou leur publication définitive.

Cette distinction est particulièrement importante en 2026: plusieurs modifications TVA sont en consultation et ne doivent pas être intégrées prématurément dans les solutions du simulateur.

## Revue juridique des cas

Une deuxième revue détaillée, cas par cas, a été effectuée le **17.08.2026**. Les calculs et montants attendus des neuf dossiers ont été conservés; certaines hypothèses ont été renforcées pour éviter des généralisations abusives, notamment pour l’impôt sur les acquisitions, l’option immobilière, les subventions, les prestations de santé et la concordance annuelle.

📄 **Rapport :** [LEGAL-REVIEW-2026-08-17.md](LEGAL-REVIEW-2026-08-17.md)

Autres traces de contrôle disponibles dans le dépôt:

- [AUDIT-FISCAL-2026-08-17.md](AUDIT-FISCAL-2026-08-17.md)
- [AUDIT-EXPERT-v1.1.0.md](AUDIT-EXPERT-v1.1.0.md)

## Contrôles techniques

La version v1.1.0 comporte un contrôle automatique de cohérence qui vérifie notamment les identifiants de cas, les rubriques utilisées, les valeurs attendues, les sources référencées, la structure des questions, l’arithmétique des dossiers et l’intégrité de la banque d’examen.

Les repères **180 / 240 jours** de la concordance annuelle sont volontairement distingués: le premier concerne la finalisation et la correction des erreurs constatées lors de l’établissement des comptes; le second décrit la présomption de l’AFC en l’absence de décompte rectificatif de concordance dans les 240 jours.

## Données et confidentialité

Le projet est un site statique HTML/CSS/JavaScript hébergé sur GitHub Pages. Aucun compte utilisateur, serveur applicatif ou base de données n’est nécessaire au fonctionnement du parcours. La progression, le résultat final et le nom utilisé pour l’attestation restent dans le navigateur de l’utilisateur, sous réserve du fonctionnement normal de son navigateur et de son environnement.

## Avertissement

Projet pédagogique indépendant, sans affiliation avec l’AFC/ESTV ou le SEFRI. Le simulateur ne remplace ni le formulaire officiel, ni la pratique AFC en vigueur, ni l’analyse d’un dossier réel par une personne responsable de la TVA. En cas de divergence, les textes légaux et les publications officielles applicables sont déterminants.
