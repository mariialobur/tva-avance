import { RATES } from './data.js';

export function parseAmount(value) {
  const text = String(value ?? '').trim();
  if (text === '') return null;
  const cleaned = text.replace(/CHF/gi,'').replace(/[\s\u00A0\u202F]/g,'').replace(/[’']/g,'').replace(',','.');
  if (!/^-?\d+(?:\.\d{1,2})?$/.test(cleaned)) return NaN;
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : NaN;
}
export function round2(value){ return Math.round((Number(value)+Number.EPSILON)*100)/100; }
function number(value){ const parsed=parseAmount(value); return Number.isFinite(parsed)?parsed:0; }

export function computeEffective(values={}) {
  const get=key=>number(values[key]);
  const ch289=round2(get('ch220')+get('ch221')+get('ch225')+get('ch230')+get('ch235')+get('ch280'));
  const ch299=round2(get('ch200')-ch289);
  const t303=round2(get('ch303')*RATES.ch303), t313=round2(get('ch313')*RATES.ch313), t343=round2(get('ch343')*RATES.ch343);
  const ch379=round2(get('ch303')+get('ch313')+get('ch343'));
  const ch399=round2(t303+t313+t343+get('ch383tax'));
  const ch479=round2(get('ch400')+get('ch405')+get('ch410')-get('ch415')-get('ch420'));
  const balance=round2(ch399-ch479);
  return {ch289,ch299,t303,t313,t343,ch379,ch399,ch479,ch500:Math.max(balance,0),ch510:Math.max(-balance,0)};
}
export function currentRateMatches(base,tax,tolerance=.0002){
  const b=number(base),t=number(tax);if(b<=0)return false;
  return Object.values(RATES).some(rate=>Math.abs(t/b-rate)<tolerance);
}
export function validateCaseArithmetic(caseData){
  const result=computeEffective(caseData.expected||{}),errors=[];
  if(['ch303','ch313','ch343'].some(k=>caseData.fields?.includes(k))&&Math.abs(result.ch379-result.ch299)>.01) errors.push(`Cas ${caseData.id}: ch. 379 (${result.ch379}) ≠ ch. 299 (${result.ch299}).`);
  const e=caseData.expected||{};
  if(e.ch383base&&e.ch383tax&&!currentRateMatches(e.ch383base,e.ch383tax)) errors.push(`Cas ${caseData.id}: ch. 383 incohérent avec les taux actuels.`);
  if(e.ch205&&e.ch200&&e.ch205>e.ch200) errors.push(`Cas ${caseData.id}: ch. 205 dépasse ch. 200.`);
  return {result,errors};
}
