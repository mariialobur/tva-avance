# Audit fiscal et refonte — TVA Avancé

Date: 17.08.2026  
Version cible: 1.0.0

## Pourquoi la refonte était nécessaire

La version initiale `v13` utilisait une ancienne cartographie pédagogique du décompte, notamment:
- ch. 205 présenté comme «prestations à soi-même»;
- ch. 220 présenté comme acquisitions étrangères;
- ch. 230 utilisé pour les diminutions;
- 302 / 312 / 342 au lieu de 303 / 313 / 343;
- ch. 405 utilisé comme correction d’IP;
- ch. 410 utilisé comme réduction liée aux subventions;
- ch. 420 utilisé comme IP sur acquisitions.

La version 1.0.0 adopte la structure du prototype AFC actuel utilisée également dans le parcours `tva-debutant`.

## Structure retenue

- 200: total des contre-prestations
- 205: part du 200 imposée par option
- 220: prestations exonérées
- 221: prestations fournies à l’étranger
- 225: procédure de déclaration
- 230: prestations exclues sans option
- 235: diminutions de contre-prestation
- 303 / 313 / 343: bases aux taux 8,1 / 2,6 / 3,8 %
- 383: impôt sur les acquisitions
- 400 / 405: impôt préalable par nature
- 410: dégrèvement ultérieur
- 415: corrections de l’impôt préalable
- 420: réduction de la déduction de l’impôt préalable
- 900: subventions et contributions correspondantes
- 910: dons, dividendes, dédommagements, etc.

## Principes pédagogiques ajoutés

1. Qualification TVA avant saisie.
2. Trois modes séparés: apprentissage, entraînement, évaluation.
3. Aides et sources masquées en mode évaluation.
4. Contrôles métier et liste de pièces à conserver.
5. Refus des pro-rata automatiques non documentés.
6. Évaluation finale séparée des cas.
7. Attestation de parcours avec disclaimer explicite.

## Sources principales

- LTVA — Fedlex
- OTVA — Fedlex
- Prototype AFC — méthode effective
- AFC — taux de TVA
- AFC — impôt sur les acquisitions
- AFC — TDFN et changements de méthode
- AFC — concordance annuelle
- AFC — décompte de rectification
- AFC — déroulement et documents du contrôle TVA

Les sources officielles et la pratique en vigueur restent déterminantes pour tout dossier réel.
