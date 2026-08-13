const c=document.getElementById('particles');
for(let i=0;i<150;i++){
  const p=document.createElement('div');
  p.className='particle';
  const s=Math.random()*8+3;
  const colors=['rgba(0,255,255,.5)','rgba(255,0,255,.4)','rgba(128,0,255,.4)'];
  p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;background:${colors[i%3]};animation-duration:${Math.random()*12+10}s;animation-delay:${Math.random()*15}s`;
  c.appendChild(p);
}