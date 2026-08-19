# Ateliers professionnels — v2.3.0

Date de revue: 19.08.2026.

## Objet

Le Niveau 2 conserve ses 18 dossiers évalués et son examen final structuré. La v2.3.0 ajoute deux **ateliers autonomes** qui ne modifient pas le compteur 18/18 et n’entrent pas dans l’attestation du niveau.

L’objectif est de rapprocher le parcours du travail réel en fiduciaire: revue d’un décompte préparé par un junior, contrôle des pièces, bouclement annuel, calcul des différences et choix de la procédure de correction.

## Atelier 1 — Revue TVA

Le scénario présente huit points de risque dans un décompte T3 2026:

- subvention incluse à tort dans le ch. 200;
- exportation sans déduction ch. 220;
- prestation B2B fournie en France classée à tort au ch. 230;
- service cloud étranger ignoré alors que les conditions factuelles du cas entraînent l’impôt sur les acquisitions;
- DTe d’importation confondue avec le ch. 383;
- location commerciale avec option comptée deux fois entre ch. 200 et 205;
- réduction d’impôt préalable documentée omise au ch. 420;
- erreur isolée T2 déplacée à tort dans T3 au lieu d’un décompte rectificatif de la période concernée.

Le participant doit également sélectionner les pièces pertinentes à demander: facture cloud et statut TVA du prestataire, DTe, bail / option, décision de subvention et calcul IP, grand livre / concordance et décompte T2.

L’atelier comporte 15 contrôles et est réussi pédagogiquement dès 80 %. Le meilleur résultat est conservé sous `tva_avance_atelier_review_v1`.

## Atelier 2 — Bouclement & concordance annuelle

Le scénario de clôture 2026 contient quatre écarts:

1. vente imposable d’un moyen d’exploitation omise: CHF 15’000 HT au taux normal;
2. service cloud étranger CHF 10’000 HT soumis, selon les faits du cas, à l’impôt sur les acquisitions avec droit intégral à l’IP;
3. DTe d’importation valable: CHF 1’200 d’IP non déduite;
4. subvention CHF 25’000 correctement exclue du ch. 200 mais omise au ch. 900, avec réduction IP documentée de CHF 1’800 au ch. 420.

Différences attendues:

- ch. 200: +CHF 15’000.00;
- base ch. 303: +CHF 15’000.00;
- ch. 383: base +CHF 10’000.00 / impôt +CHF 810.00;
- ch. 399: +CHF 2’025.00;
- ch. 400: +CHF 2’010.00;
- ch. 420: +CHF 1’800.00;
- ch. 479: +CHF 210.00;
- différence nette en faveur de l’AFC: CHF 1’815.00;
- ch. 900: +CHF 25’000.00.

Le participant doit en outre distinguer la concordance annuelle du décompte rectificatif d’une période isolée et retenir le garde-fou des 180 jours pour les erreurs découvertes lors de l’établissement des comptes annuels. L’atelier compte 13 contrôles et est réussi pédagogiquement dès 80 %. Le meilleur résultat est conservé sous `tva_avance_atelier_closing_v1`.

## Sources principales

- AFC — concordance annuelle: https://www.estv.admin.ch/fr/tva-concordance-annuelle
- AFC — décompte rectificatif: https://www.estv.admin.ch/fr/tva-decompte-de-rectification
- AFC — impôt sur les acquisitions: https://www.estv.admin.ch/fr/impot-sur-les-acquisitions-tva
- AFC — DTe import/export: https://www.estv.admin.ch/fr/decisions-de-taxation-electroniques-de-la-douane
- AFC — déroulement d’un contrôle TVA: https://www.estv.admin.ch/fr/deroulement-dun-controle-tva
- AFC — documents nécessaires pour le contrôle TVA: https://www.estv.admin.ch/fr/documents-necessaires-pour-le-controle-tva
- Prototype AFC — méthode effective: https://www.estv2.admin.ch/mwst/formulare/mwst-form-abr-muster-effektiv-fr.pdf
- LTVA — Fedlex: https://www.fedlex.admin.ch/eli/cc/2009/615/fr

## QA

`tests/atelier.spec.js` vérifie les deux launchers, la résolution complète de l’atelier Revue, la sélection des pièces, la résolution complète du bouclement et la réconciliation à CHF 1’815.00. Le smoke test exécute `node --check` sur les nouveaux modules et vérifie les clés de stockage et les garde-fous principaux.

Le reset global du Niveau 2 efface également les résultats des deux ateliers.
