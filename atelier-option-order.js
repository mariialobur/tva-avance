// Vary the visual order of atelier choices without changing their semantic values.
function rotateLabels(container,offset){
  if(!container)return;
  const labels=[...container.querySelectorAll(':scope > label')];
  if(labels.length<2)return;
  const shift=((offset%labels.length)+labels.length)%labels.length;
  [...labels.slice(shift),...labels.slice(0,shift)].forEach(label=>container.appendChild(label));
}

function reorderReview(){
  document.querySelectorAll('#level2ReviewDialog [data-review-card]').forEach((card,index)=>rotateLabels(card.querySelector('.atelier-review-options'),index%4));
}
function reorderClosing(){
  document.querySelectorAll('#level2ClosingDialog [data-closing-question]').forEach((fieldset,index)=>rotateLabels(fieldset,index+1));
}

document.addEventListener('click',event=>{
  const button=event.target.closest('[data-atelier-open]');
  if(!button)return;
  if(button.dataset.atelierOpen==='review')setTimeout(reorderReview,0);
  if(button.dataset.atelierOpen==='closing')setTimeout(reorderClosing,0);
},true);
