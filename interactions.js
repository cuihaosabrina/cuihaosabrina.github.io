const filterButtons = document.querySelectorAll('[data-filter]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  document.querySelectorAll('.publication').forEach(paper => {
    paper.hidden = button.dataset.filter !== 'all' && paper.dataset.topic !== button.dataset.filter;
    if (!paper.hidden) count++;
  });
  document.querySelectorAll('.pub-group').forEach(group => {group.hidden = !group.querySelector('.publication:not([hidden])');});
  document.querySelector('#result-count').textContent = `${count} publications & outputs`;
}));
const viewer = document.querySelector('#image-viewer');
document.querySelectorAll('.image-open').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#viewer-image').src = button.dataset.image;
  document.querySelector('#viewer-image').alt = button.dataset.caption;
  document.querySelector('#viewer-caption').textContent = button.dataset.caption;
  document.querySelector('#viewer-link').href = button.dataset.link;
  viewer.showModal();
}));
document.querySelector('.close-viewer')?.addEventListener('click', () => viewer.close());
viewer?.addEventListener('click', event => { if (event.target === viewer) {const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});

const typeSelect = document.querySelector('#presentation-type');
const yearSelect = document.querySelector('#presentation-year');
function filterPresentations() {
  let count = 0;
  document.querySelectorAll('.presentation').forEach(item => {
    item.hidden = (typeSelect.value !== 'all' && item.dataset.kind !== typeSelect.value) || (yearSelect.value !== 'all' && item.dataset.year !== yearSelect.value);
    if (!item.hidden) count++;
  });
  document.querySelector('#presentation-count').textContent = `${count} presentation${count === 1 ? '' : 's'}`;
  document.querySelector('#presentation-empty').hidden = count !== 0;
}
typeSelect?.addEventListener('change', filterPresentations);
yearSelect?.addEventListener('change', filterPresentations);

// Keep anchor targets below the actual navigation height on every screen.
const header = document.querySelector('header');
function updateHeaderHeight() {document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);}
new ResizeObserver(updateHeaderHeight).observe(header);
updateHeaderHeight();
const sectionLinks = [...document.querySelectorAll('nav div a')];
let navFrame = 0;
function updateCurrentSection() {
  navFrame = 0;
  if(document.body.classList.contains('news-page')) return;
  const threshold = header.getBoundingClientRect().height + 70;
  let active = document.querySelector('main > section');
  document.querySelectorAll('main > section').forEach(section => {if(section.getBoundingClientRect().top <= threshold) active = section;});
  sectionLinks.forEach(link => {if(link.hash === '#' + active.id) link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
}
addEventListener('scroll',()=>{if(!navFrame)navFrame=requestAnimationFrame(updateCurrentSection);},{passive:true});
updateCurrentSection();

document.querySelectorAll('[data-research]').forEach(node => node.addEventListener('click', () => {
  const filter = document.querySelector(`[data-filter="${node.dataset.research}"]`);
  filter.click();
  document.querySelector('#publications').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  filter.focus({preventScroll:true});
}));

const themeToggle=document.querySelector('#theme-toggle');
function themeLabel(){const dark=document.documentElement.dataset.theme==='dark';themeToggle.innerHTML=dark?'<span class="tt-glyph">\u2600\uFE0E</span><svg class="tt-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><path d="M12 1.8v3.4M12 18.8v3.4M1.8 12h3.4M18.8 12h3.4M4.8 4.8l2.4 2.4M16.8 16.8l2.4 2.4M4.8 19.2l2.4-2.4M16.8 7.2l2.4-2.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" fill="none"/></svg>':'<span class="tt-moon">☾</span>';themeToggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');themeToggle.title=dark?'Light mode':'Dark mode';}
themeToggle.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('theme-v2',theme);sessionStorage.setItem('theme-session-v1',theme)}catch(e){}themeLabel();});
themeLabel();
document.querySelector('#load-x')?.addEventListener('click',()=>{
 const button=document.querySelector('#load-x');button.disabled=true;button.textContent='Loading…';
 document.querySelectorAll('.twitter-tweet').forEach(post=>post.dataset.theme=document.documentElement.dataset.theme);
 const script=document.createElement('script');script.src='https://platform.twitter.com/widgets.js';script.async=true;
 script.onload=()=>{button.hidden=true;document.querySelector('#x-status').textContent='If a post does not appear, use its original link.';};
 script.onerror=()=>{button.disabled=false;button.textContent='Retry loading posts';document.querySelector('#x-status').textContent='X could not be loaded. The original post links are available above.';script.remove();};
 document.body.append(script);
});
