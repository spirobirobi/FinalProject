const urlSearchParams= new URLSearchParams(window.location.search);
const params= Object.fromEntries(urlSearchParams.entries());

const listFromLocalStorage=localStorage.getItem('list');
const lista=JSON.parse(listFromLocalStorage);

const found=lista.find((itm)=>{
    return itm.id==parseInt(params.id);
})
console.log(found);
const img=document.getElementById('headerImg');
img.setAttribute('src',found.img);
const company=document.getElementById('company');
company.textContent=found.title;
const site=document.getElementById('site');
site.textContent=found.site;
const time=document.getElementById('time');
time.textContent=found.time + '  '+ found.type;
const post=document.getElementById('post');
post.textContent=found.post;
const locations=document.getElementById('location');
locations.textContent=found.location;


