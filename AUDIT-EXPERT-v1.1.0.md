# Audit expert — TVA Avancé v1.1.0

Date de revue: 17.08.2026

## Périmètre

Revue ciblée sous six angles: fiscalité TVA, logique de décompte, pratique fiduciaire, pédagogie, UX/accessibilité et robustesse technique.

## Résultat fiscal

Les 9 cas A–I ont été revus sur la structure actuelle du décompte pédagogique: ch. 200/205, déductions 220/221/225/230/235/280, bases 303/313/343, impôt sur les acquisitions 383, impôt préalable 400/405/410/415/420, autres mouvements 900/910.

Aucune incohérence arithmétique bloquante n’a été détectée. Pour tous les cas, la relation entre ch. 299 et ch. 379 est cohérente dans le périmètre de l’exercice et les calculs ch. 399 / 479 / 500 / 510 sont cohérents avec les données attendues.

Points spécifiquement revus:
- Cas A: impôt sur les acquisitions au ch. 383 et déduction correspondante selon l’affectation.
- Cas B: option immobilière ch. 205, prestations exclues ch. 230 et correction IP ch. 415 selon une clé documentée.
- Cas C: sponsoring comme contre-prestation, subventions ch. 900 et réduction IP ch. 420 selon la clé du dossier.
- Cas D: groupe TVA traité comme un seul assujetti; flux internes exclus du chiffre d’affaires externe du groupe.
- Cas E: passage TDFN → méthode effective, dégrèvement de valeur résiduelle au ch. 410 du premier décompte effectif.
- Cas F: passage méthode effective → TDFN, correction de valeur résiduelle au ch. 415 du dernier décompte effectif.
- Cas G: activités mixtes et correction IP fondée sur un tableau d’affectation documenté, et non sur un ratio de chiffre d’affaires automatique.
- Cas H: cas intégrateur combinant option, exclusion, impôt sur les acquisitions, subvention et corrections IP.
- Cas I: distinction entre décompte rectificatif d’une période isolée et concordance annuelle.

## Concordance annuelle — précision v1.1.0

Le mémo distingue désormais les deux repères qui ne doivent pas être confondus:
- finalisation: correction au plus tard dans la période de décompte pendant laquelle tombe le 180e jour après la fin de l’exercice;
- 240 jours: si aucun décompte rectificatif de concordance n’est parvenu à l’AFC, elle part du principe que les décomptes remis sont complets et corrects et que la période est finalisée.

Le repère des 240 jours n’est donc pas présenté comme une autorisation d’attendre pour corriger une erreur déjà identifiée.

## Renforcement technique v1.1.0

- contrôle automatique des identifiants de cas et de questions;
- contrôle de l’existence des rubriques, valeurs attendues et sources;
- exécution automatique des contrôles arithmétiques des cas;
- blocage visuel d’alerte si une incohérence de données est détectée;
- trois questions supplémentaires dans la banque finale: 180 jours, 240 jours et rectification en ligne;
- confirmation avant abandon d’une évaluation finale en cours;
- prise en charge de la touche Échap avec la même protection;
- version du parcours ajoutée à l’attestation;
- amélioration focus clavier et préférence de réduction des animations;
- correction d’une coquille d’interface («Ouvrir le corrigé»).

## Sources officielles principales

- LTVA — Fedlex: https://www.fedlex.admin.ch/eli/cc/2009/615/fr
- OTVA — Fedlex: https://www.fedlex.admin.ch/eli/cc/2009/828/fr
- Prototype AFC — méthode effective: https://www.estv2.admin.ch/mwst/formulare/mwst-form-abr-muster-effektiv-fr.pdf
- Impôt sur les acquisitions: https://www.estv.admin.ch/fr/impot-sur-les-acquisitions-tva
- TDFN / changements de méthode: https://www.estv.admin.ch/fr/tva-taux-de-la-dette-fiscale-nette-et-taux-forfaitaires
- Concordance annuelle: https://www.estv.admin.ch/fr/tva-concordance-annuelle
- Décompte rectificatif: https://www.estv.admin.ch/fr/tva-decompte-de-rectification
- Contrôle TVA: https://www.estv.admin.ch/fr/deroulement-dun-controle-tva

## Limite

Cette revue sécurise un outil pédagogique indépendant. Elle ne transforme ni le parcours ni son attestation en certification officielle et ne remplace pas l’analyse d’un dossier TVA réel au regard de la loi, de la pratique publiée et des faits du cas.
