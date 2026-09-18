(() => {
  const canvas = document.querySelector('#network-background');
  const ctx = canvas.getContext('2d');
  const toggle = document.querySelector('#network-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches, frame = 0, last = 0, width = 0, height = 0;
  let nodes = [], pointer = null, elapsed = 0;
  const magic = document.createElement('canvas');
  magic.id='pointer-stars';magic.setAttribute('aria-hidden','true');document.body.append(magic);
  const glow=magic.getContext('2d');
  let stars=[];
  function drawStars(step) {
    elapsed+=step/60;
    glow.clearRect(0,0,width,height);
    const dark=document.documentElement.dataset.theme==='dark';
    stars=stars.filter(b=>b.life>0);
    stars.forEach(b=>{
      b.life-=step/60;b.y-=.12*step;
      const fade=Math.min(1,b.life)*Math.min(1,(3.2-b.life)*4);
      const shimmer=.25+.75*Math.pow(Math.sin(elapsed*3+b.phase),2);
      const alpha=fade*shimmer;
      const size=(b.size || 7)*(0.85+shimmer*.15);
      const kind=b.kind || 0;
      glow.save();glow.translate(b.x,b.y);glow.rotate(b.phase*.12);
      glow.shadowColor='#bdeaff';glow.shadowBlur=kind===2?5:9;
      glow.fillStyle=`rgba(${dark?'220,243,255':'117,176,208'},${alpha*.72})`;
      if(kind===2){
        glow.beginPath();glow.arc(0,0,size*.17,0,Math.PI*2);glow.fill();
      }else{
        const x=size*(kind===0?.48:.7), y=size*(kind===0?1.3:.8), waist=.22;
        glow.beginPath();glow.moveTo(0,-y);
        glow.bezierCurveTo(waist,-waist,waist,-waist,x,0);
        glow.bezierCurveTo(waist,waist,waist,waist,0,y);
        glow.bezierCurveTo(-waist,waist,-waist,waist,-x,0);
        glow.bezierCurveTo(-waist,-waist,-waist,-waist,0,-y);glow.fill();
        if(kind===1){
          glow.strokeStyle=`rgba(${dark?'215,242,255':'126,183,213'},${alpha*.28})`;
          glow.lineWidth=.4;glow.beginPath();
          glow.moveTo(-x*.5,-y*.5);glow.lineTo(x*.5,y*.5);
          glow.moveTo(x*.5,-y*.5);glow.lineTo(-x*.5,y*.5);glow.stroke();
        }
      }
      glow.fillStyle=`rgba(${dark?'255,255,255':'211,238,250'},${alpha*.9})`;
      glow.beginPath();glow.arc(0,0,kind===2?.5:.65,0,Math.PI*2);glow.fill();glow.restore();
    });
  }
  function label() { toggle.textContent = paused ? 'Play network' : 'Pause network'; toggle.setAttribute('aria-label', paused ? 'Play background animation' : 'Pause background animation'); }
  function resize() {
    width = innerWidth; height = innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = width * ratio; canvas.height = height * ratio;
    magic.width=width*ratio;magic.height=height*ratio;glow.setTransform(ratio,0,0,ratio,0,0);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    nodes = Array.from({length: width < 600 ? 30 : 65}, () => ({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22}));
    draw(0);
  }
  function draw(step) {
    ctx.clearRect(0,0,width,height);
    nodes.forEach(n => {
      n.x += n.vx*step; n.y += n.vy*step;
      if(n.x < 0 || n.x > width) n.vx *= -1;
      if(n.y < 0 || n.y > height) n.vy *= -1;
    });
    const nearby = pointer ? nodes.map(n => ({node:n, distance:Math.hypot(n.x-pointer.x,n.y-pointer.y)})).sort((a,b) => a.distance-b.distance).slice(0,3) : [];
    const pointerNodes = new Map(nearby.map(n => [n.node,n.distance]));
    for(let i=0;i<nodes.length;i++) {
      const a=nodes[i];
      for(let j=i+1;j<nodes.length;j++) {
        const b=nodes[j], d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<155) {ctx.strokeStyle=`rgba(36,100,109,${.23*(1-d/155)})`;ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
      }
      ctx.fillStyle='rgba(53,126,137,.44)';ctx.beginPath();ctx.arc(a.x,a.y,2,0,Math.PI*2);ctx.fill();
      if(pointer && pointerNodes.has(a)) {const opacity=.13+.1*Math.max(0,1-pointerNodes.get(a)/250);ctx.strokeStyle=`rgba(106,177,215,${opacity})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(pointer.x,pointer.y);ctx.stroke();}
    }
  }
  function tick(time) {
    frame=0;
    if(paused || document.hidden) return;
    const step=last ? Math.min((time-last)/16.67,2) : 0;
    draw(step);drawStars(step);last=time;
    frame=requestAnimationFrame(tick);
  }
  function schedule() {cancelAnimationFrame(frame);last=0;if(!paused&&!document.hidden)frame=requestAnimationFrame(tick);}
  toggle.addEventListener('click',()=>{paused=!paused;stars=[];glow.clearRect(0,0,width,height);label();schedule();});
  reduced.addEventListener('change',()=>{paused=reduced.matches;stars=[];glow.clearRect(0,0,width,height);label();schedule();});
  document.addEventListener('visibilitychange',schedule);
  addEventListener('resize',resize);
  function addStar(x,y) {
    if(stars.length>=7)stars.shift();
    stars.push({x:x+(Math.random()-.5)*35,y:y-12,life:3.2,born:elapsed,size:4+Math.random()*6,kind:Math.floor(Math.random()*3),phase:Math.random()*6.28});
  }
  addEventListener('pointerdown',event=>{
    if(paused)return;
    pointer={x:event.clientX,y:event.clientY};
    if(event.pointerType==='touch')for(let i=0;i<3;i++)addStar(pointer.x,pointer.y);
    else addStar(pointer.x,pointer.y);
  },{passive:true});
  addEventListener('pointermove',event=>{
    if(paused)return;
    pointer={x:event.clientX,y:event.clientY};
    if(!stars.length||elapsed-stars[stars.length-1].born>.16)addStar(pointer.x,pointer.y);
  },{passive:true});
  addEventListener('pointerup',event=>{if(event.pointerType==='touch')pointer=null;},{passive:true});
  addEventListener('pointercancel',()=>{pointer=null;},{passive:true});
  document.addEventListener('pointerleave',()=>{pointer=null;});
  resize();label();schedule();
})();
