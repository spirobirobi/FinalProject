const urlSearchParams= new URLSearchParams(window.location.search);
const params= Object.fromEntries(urlSearchParams.entries());

const listFromLocalStorage=localStorage.getItem('list1');
const lista=JSON.parse(listFromLocalStorage);

const found=lista.find((itm)=>{
    return itm.id==parseInt(params.id);
})
const img=document.getElementById('headerImg');
img.setAttribute('src',found.logo);
const company=document.getElementById('company');
company.textContent=found.company;
const site=document.getElementById('site');
site.textContent=found.website;
const time=document.getElementById('time');
time.textContent=found.postedAt + ' • '+ found.contract;
const post=document.getElementById('post');
post.textContent=found.position;
const locations=document.getElementById('location');
locations.textContent=found.location;
const descript=document.getElementById('description');
descript.textContent=found.description;
const req=document.getElementById('reqShort');
req.textContent=found.requirements.content;
const req1=document.getElementById('reqList');
for(let i=0;i<found.requirements.items.length;i++){
    const li=document.createElement('li');
    const span=document.createElement('span');
    span.textContent=found.requirements.items[i];
    li.appendChild(span);
    req1.appendChild(li);
}
const wywd=document.getElementById('what');
wywd.textContent=found.role.content;
wywdList=document.getElementById('whatList');
for(let i=0;i<found.role.items.length;i++){
    const li=document.createElement('li');
    const span=document.createElement('span');
    span.textContent=found.role.items[i];
    li.appendChild(span);
    wywdList.appendChild(li);
}
const footerText=document.getElementById('footerPos');
footerText.textContent=found.position;




