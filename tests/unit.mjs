import assert from 'node:assert/strict';
import '../level2-extension.js';
import '../legal-audit-2026-08.js';
import { CASES, FIELD_META, SOURCE_LIBRARY } from '../data.js';
import { computeEffective, validateCaseArithmetic } from '../logic.js';

assert.equal(CASES.length,18,'Le Niveau 2 doit contenir 18 dossiers.');
assert.equal(new Set(CASES.map(c=>c.id)).size,18,'Identifiants uniques.');
for(const c of CASES){
  assert.ok(c.title&&c.task&&c.qualification,`Cas ${c.id}: métadonnées manquantes.`);
  for(const k of c.fields||[])assert.ok(FIELD_META[k],`Cas ${c.id}: rubrique inconnue ${k}.`);
  for(const k of c.sourceKeys||[])assert.ok(SOURCE_LIBRARY[k],`Cas ${c.id}: source inconnue ${k}.`);
  const {errors}=validateCaseArithmetic(c);assert.deepEqual(errors,[],errors.join('\n'));
}
const byId=id=>CASES.find(c=>c.id===id);
const expectedResults={
 J:{ch299:350000,ch399:23950,ch479:23000,ch500:950},
 K:{ch399:18225,ch479:12025,ch500:6200},
 L:{ch399:27540,ch479:17340,ch500:10200},
 M:{ch399:13770,ch479:5430,ch500:8340},
 N:{ch399:14482.8,ch479:4332.8,ch500:10150},
 O:{ch399:12150,ch479:5000,ch500:7150},
 P:{ch399:6480,ch479:4050,ch500:2430},
 Q:{ch299:100000,ch399:8100,ch479:-32000,ch500:40100},
 R:{ch299:1180000,ch399:95580,ch479:97000,ch510:1420}
};
for(const [id,vals] of Object.entries(expectedResults)){const r=computeEffective(byId(id).expected);for(const [k,v] of Object.entries(vals))assert.equal(r[k],v,`${id}: ${k}`)}
for(const [id,re] of [['J',/grand livre/i],['K',/don privé/i],['L',/DTe/i],['M',/60 %/],['N',/0,9600/],['O',/tiers indépendants/i],['P',/compensation/i],['Q',/15\/20/],['R',/différences/i]])assert.match(`${byId(id).info} ${byId(id).task}`,re,`Cas ${id}: garde-fou manquant.`);
console.log('OK — 18 dossiers Niveau 2: intégrité, sources et calculs.');
