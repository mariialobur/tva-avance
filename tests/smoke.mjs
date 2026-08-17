import assert from 'node:assert/strict';
import fs from 'node:fs';
for(const file of ['index.html','styles.css','evaluation.css','data.js','level2-extension.js','legal-audit-2026-08.js','hardening.js','level2-version.js','logic.js','store.js','app.js','evaluation.js','evaluation-data.js'])assert.ok(fs.existsSync(file),`Missing ${file}`);
const html=fs.readFileSync('index.html','utf8');
for(const token of ['app.js?v=2.0.0','evaluation.js?v=2.0.0','0 / 18 dossiers','Mémo professionnel — méthode effective · Niveau 2','Grand livre → décompte'])assert.ok(html.includes(token),`Missing token: ${token}`);
const evalJs=fs.readFileSync('evaluation.js','utf8');
for(const token of ['tva_avance_final_evaluation_v2','ATTESTATION DE PARCOURS','Niveau 2','CASES.length'])assert.ok(evalJs.includes(token),`Missing evaluation token: ${token}`);
console.log('OK — smoke advanced Level 2 v2.0.0');
