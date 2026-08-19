# Exercices de synthèse — déclaration TVA · v2.3.1

Date de revue: 19.08.2026.

## Périmètre

Le Niveau 2 reste un **trainer de déclaration TVA**, pas un programme complet de revue fiduciaire. La v2.3.1 retire donc de ces exercices les tâches de collecte de pièces, d’audit documentaire et de fermeture de dossier.

Les deux exercices complémentaires servent uniquement à:

1. corriger directement un décompte comportant des erreurs de rubriques / qualification;
2. saisir les différences d’un rectificatif / d’une concordance et choisir la procédure correcte.

Ils restent hors compteur 18/18 et hors attestation.

## Exercice 1 — Décompte à corriger

Huit points ciblés sont présentés avec tous les faits nécessaires. Le participant choisit la correction déclarative correcte:

- subvention incluse à tort au ch. 200;
- exportation sans ch. 220;
- prestation B2B France mal classée au ch. 230 au lieu du ch. 221;
- acquisition de service étranger omise au ch. 383;
- TVA à l’importation / DTe confondue avec le ch. 383;
- ch. 205 ajouté une seconde fois au chiffre d’affaires;
- réduction d’IP ch. 420 omise;
- erreur isolée T2 reportée à tort dans T3.

Il n’y a plus de checklist de pièces à demander. Le score porte uniquement sur les huit corrections du décompte.

## Exercice 2 — Rectificatif / concordance

Les écarts ont déjà été identifiés. Le participant saisit uniquement les **différences à reporter**:

- différence ch. 200: CHF 15’000.00;
- différence ch. 303: CHF 15’000.00;
- différence ch. 383 base: CHF 10’000.00;
- différence ch. 383 impôt: CHF 810.00;
- différence ch. 399: CHF 2’025.00;
- différence ch. 400: CHF 2’010.00;
- différence ch. 420: CHF 1’800.00;
- différence ch. 479: CHF 210.00;
- différence nette en faveur de l’AFC: CHF 1’815.00;
- différence ch. 900: CHF 25’000.00.

Trois questions vérifient ensuite la différence entre rectificatif de période, concordance annuelle et garde-fou de finalisation.

## Sources principales

- Prototype AFC — méthode effective: https://www.estv2.admin.ch/mwst/formulare/mwst-form-abr-muster-effektiv-fr.pdf
- AFC — impôt sur les acquisitions: https://www.estv.admin.ch/fr/impot-sur-les-acquisitions-tva
- AFC — DTe import/export: https://www.estv.admin.ch/fr/decisions-de-taxation-electroniques-de-la-douane
- AFC — décompte rectificatif: https://www.estv.admin.ch/fr/tva-decompte-de-rectification
- AFC — concordance annuelle: https://www.estv.admin.ch/fr/tva-concordance-annuelle

## QA

`tests/atelier.spec.js` vérifie que les deux exercices sont directement centrés sur la déclaration, qu’aucune étape de document-audit n’est présente, qu’une résolution correcte atteint 100 % et que la progression 18/18 reste inchangée.

Les clés locales historiques sont conservées pour le reset global, avec un marqueur de scope afin qu’un ancien score des ateliers fiduciaires ne soit pas repris dans la nouvelle version simplifiée.
