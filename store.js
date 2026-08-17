import './level2-extension.js';
import './legal-audit-2026-08.js';
import './hardening.js';
import './level2-version.js';

const STORAGE_KEY='tva_avance_v1_state';
const DEFAULT_STATE={version:1,caseIndex:0,view:'guided',mode:'learn',records:{},drafts:{}};
function safeGet(k){try{return localStorage.getItem(k)}catch{return null}}
function safeSet(k,v){try{localStorage.setItem(k,v)}catch{}}
function safeRemove(k){try{localStorage.removeItem(k)}catch{}}
function normalizeRecord(r={}){
  return {
    learningAttempts:Number(r.learningAttempts)||0,practiceAttempts:Number(r.practiceAttempts)||0,evaluationAttempts:Number(r.evaluationAttempts)||0,
    bestLearningScore:Number(r.bestLearningScore)||0,bestPracticeScore:Number(r.bestPracticeScore)||0,bestEvaluationScore:Number(r.bestEvaluationScore)||0,
    firstScore:Number.isFinite(Number(r.firstScore))?Number(r.firstScore):null,solutionViewed:Boolean(r.solutionViewed),mastered:Number(r.bestEvaluationScore)===100
  };
}
export function loadState(){
  const raw=safeGet(STORAGE_KEY);
  if(raw){try{const p=JSON.parse(raw),records={};Object.entries(p.records||{}).forEach(([id,r])=>records[id]=normalizeRecord(r));return {...DEFAULT_STATE,...p,records}}catch{}}
  return structuredClone(DEFAULT_STATE);
}
export function saveState(s){safeSet(STORAGE_KEY,JSON.stringify(s))}
export function clearState(){safeRemove(STORAGE_KEY);safeRemove('tva_av13')}
export function blankRecord(){return normalizeRecord({})}
export function blankDraft(){return {values:{},qualification:'',assisted:false,submitted:false,correctionShown:false,lastScore:null}}
