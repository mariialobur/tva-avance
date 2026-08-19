import assert from 'node:assert/strict';
import '../level2-extension.js';
import { EXAM_SIZE, PASS_SCORE, QUESTION_BANK } from '../evaluation-data.js';
import { selectBlueprintQuestions } from '../exam-blueprint.js';

assert.equal(EXAM_SIZE,15);
assert.equal(PASS_SCORE,12);
assert.ok(QUESTION_BANK.length>=30,'La banque avancée doit contenir au moins 30 questions après extension.');
assert.equal(new Set(QUESTION_BANK.map(q=>q.id)).size,QUESTION_BANK.length,'IDs de questions uniques.');
for(const q of QUESTION_BANK){assert.ok(q.q&&q.w&&q.s&&q.u,`Question ${q.id}: métadonnées manquantes.`);assert.equal(q.o.length,4,`Question ${q.id}: 4 options requises.`);assert.ok(Number.isInteger(q.a)&&q.a>=0&&q.a<4,`Question ${q.id}: réponse invalide.`);assert.equal(new Set(q.o).size,4,`Question ${q.id}: options dupliquées.`)}

const blueprint=[
  {label:'Formulaire & calcul',count:3,ids:['form205','form230','form235','rates','ch299','ch479','balance']},
  {label:'International & acquisitions',count:3,ids:['form383','acqRegistered','acqDeduct','mix','import-vs-383-adv','dte-adv','acq-partial','fx-acq']},
  {label:'Impôt préalable & immobilier',count:3,ids:['option','ip405','ip415','ip410','immovable20']},
  {label:'Structures & opérations particulières',count:3,ids:['sub900','sub420','group','tdfnToEff','effToTdfn','related-value','netting']},
  {label:'Rectification & concordance',count:3,ids:['concordance','isolatedCorrection','annualDifference','annual-differences']}
];
const selected=selectBlueprintQuestions(QUESTION_BANK,blueprint,EXAM_SIZE,()=>0.271828);
assert.equal(selected.length,15);
assert.equal(new Set(selected.map(q=>q.id)).size,15);
for(const section of blueprint) assert.equal(selected.filter(q=>q.examTheme===section.label).length,section.count,`Quota manquant: ${section.label}`);
const forbidden=new Set(['documents','control-docs','controlTurnover','proof']);
assert.equal(selected.filter(q=>forbidden.has(q.id)).length,0,'Le blueprint final ne doit pas tester un audit documentaire fiduciaire.');
console.log(`OK — banque avancée: ${QUESTION_BANK.length} questions, blueprint déclaration ${EXAM_SIZE}, seuil ${PASS_SCORE}.`);
