(() => {
const dialog=document.querySelector('#site-search'),input=document.querySelector('#search-input'),results=document.querySelector('#search-results'),status=document.querySelector('#search-status');
document.querySelector('#search-toggle').addEventListener('click',()=>{dialog.showModal();input.focus()});
document.querySelector('#search-close').addEventListener('click',()=>dialog.close());
input.addEventListener('input',()=>{
 const terms=input.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
 results.replaceChildren();
 if(!terms.length){status.textContent='Type to search the website.';return;}
 const matches=window.siteSearchEntries.filter(item=>terms.every(term=>(item.text+' '+item.category).toLocaleLowerCase().includes(term)));
 status.textContent=matches.length?`${matches.length} results`:'No results. Try a different keyword.';
 for(const item of matches){const li=document.createElement('li'),a=document.createElement('a'),category=document.createElement('small');a.href=item.url;a.textContent=item.title;category.textContent=item.category;li.append(category,a);results.append(li);a.addEventListener('click',()=>dialog.close());}
});
})();
