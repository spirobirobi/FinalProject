fetch('./data.json')
.then((response)=>response.json())
.then((json)=>{
    const urlSearchParams= new URLSearchParams(window.location.search);
    const params= Object.fromEntries(urlSearchParams.entries());
    
    const listFromLocalStorage=localStorage.getItem('list1');
    const lista=JSON.parse(listFromLocalStorage);
    
    const found=lista.find((itm)=>{
        return itm.id==parseInt(params.id);
    })
    console.log(found);
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
     const wywdList=document.getElementById('whatList');
    for(let i=0;i<found.role.items.length;i++){
        const li=document.createElement('li');
        const span=document.createElement('span');
        span.textContent=found.role.items[i];
        li.appendChild(span);
        wywdList.appendChild(li);
    }
    const footerText=document.getElementById('footerPos');
    footerText.textContent=found.position;
    
    const cmpSite=document.getElementById('company1');
   cmpSite.addEventListener('click',()=>{
    location.replace(found.website);  
   })
   
const butt1=document.getElementById('contentButton');
butt1.addEventListener('click',()=>{
   
    
     
        let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
    
    if(!existingEntries.includes(found.id)){
        existingEntries.push(found.id);
    }
    else{
        alert('already applied');
    }
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
  
   
})
const butt2=document.getElementById('footerButton');
    butt2.addEventListener('click',()=>{
        let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(existingEntries == null) existingEntries = [];
    
    if(!existingEntries.includes(found.id)){
        existingEntries.push(found.id);
    }
    else{
        alert('already applied');
    }
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    })
   

})



