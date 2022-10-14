const list= [
    {
        id:'1',
        title:'scoot',
        img:'/assets/logos/scott.svg',
        alt:'scoot',
        location:'United Kingdom',
        post:'Senior Software Engineer',
        type:'Full time',
        time:'5h ago •'
       
    },
    {
        id:'2',
        title:'Blogr',
        img:'/assets/logos/Blogr.svg',
        alt:'blogr',
        location:'United States',
        post:'Haskell and PureScript Dev',
        type:'• Part time',
        time:'20h ago'
       
    },
    {
        id:'3',
        title:'Vector',
        img:'/assets/logos/Vector.svg',
        alt:'vector',
        location:'Russia',
        post:'Midlevel Back End Engineer',
        type:'• Part time',
        time:'1d ago'
       
    },
    {
        id:'4',
        title:'Office Lite',
        img:'/assets/logos/Office-Lite.svg',
        alt:'office',
        location:'Japan',
        post:'Senior Application Engineer',
        type:'• Full time',
        time:'2d ago'
       
    },
    {
        id:'5',
        title:'Pod',
        img:'/assets/logos/Pod.svg',
        alt:'pod',
        location:'Thailand',
        post:'Remote DevOps Engineer',
        type:'• Part time',
        time:'2d ago'
       
    },
    {
        id:'6',
        title:'Creative',
        img:'/assets/logos/Creative.svg',
        alt:'creative',
        location:'Germany',
        post:'Desktop Support Manager',
        type:'• Part time',
        time:'4d ago'
       
    },
    {
        id:'7',
        title:'Pomodoro',
        img:'/assets/logos/Pomodoro.svg',
        alt:'pomodoro',
        location:'United States',
        post:'iOS Engineer',
        type:'• Full time',
        time:'1w ago'
       
    },
    {
        id:'8',
        title:'Maker',
        img:'/assets/logos/Maker.svg',
        alt:'maker',
        location:'United Kingdom',
        post:'Senior EJB Developer',
        type:'• Full time',
        time:'1w ago'
       
    },
    {
        id:'9',
        title:'Coffeeroasters',
        img:'/assets/logos/CoffeRoasters.svg',
        alt:'coffeeroasters',
        location:'Singapore',
        post:'Senior Frontend Developer',
        type:'• Part time',
        time:'1w ago'
       
    },
    {
        id:'10',
        title:'Mastercraft',
        img:'/assets/logos/Mastercraft.svg',
        alt:'mastercraft',
        location:'United States',
        post:'App & Website Designer',
        type:'• Freelance ',
        time:'2w ago'
       
    },
    {
        id:'11',
        title:'Crowdfund',
        img:'/assets/logos/Crowdfund.svg',
        alt:'crowdfund',
        location:'New Zeeland',
        post:'Fullstack Developer',
        type:'• Full Time ',
        time:'1mo ago'
       
    },
    {
        id:'12',
        title:'Typemaster',
        img:'/assets/logos/TypeMaster.svg',
        alt:'typemaster',
        location:'United Kingdom',
        post:'Technical Lead Engineer',
        type:'• Part Time ',
        time:'4d ago'
       
    }
    
]

function createItem(object){
    const item=document.createElement('div');
    item.classList.add('box');
    const img=document.createElement('img');
    img.setAttribute('src',object.img);
    img.setAttribute('alt',object.alt);
    item.appendChild(img);
    const time1=document.createElement('p');
    time1.textContent=object.time;
    item.appendChild(time1);
    const time2=document.createElement('p');
    time2.classList.add('itm');
    time2.textContent=object.type;
    item.appendChild(time2);
    const post=document.createElement('h3');
    post.textContent=object.post;
    item.appendChild(post);
    const company=document.createElement('p');
    company.textContent=object.title;
    item.appendChild(company);
    const location=document.createElement('h4');
    location.textContent=object.location;
    item.appendChild(location);
    return item;

}
function populate(countItem,lista){
    const content =document.getElementById('content');
    for(let i=0;i<countItem;i++)
    {
        const item1=createItem(lista[i]);
      content.appendChild(item1);
    }
}
function clean(){
    const content =document.getElementById('content');
    content.textContent='';
}
populate(list.length/2,list);
const footerButton=document.getElementById('footerButton');
footerButton.addEventListener('click',()=>{
    clean();
    populate(list.length,list);
})

const headerButton=document.getElementById('headerButton');
headerButton.addEventListener('click',()=>{
    const inputSearch=document.getElementById('search');
    const inputLocation=document.getElementById('inputLocation');
    const filter=list.filter((obj)=>{
        return obj.post.toLowerCase().includes(inputSearch.value.toLowerCase()) && obj.location.toLowerCase().includes(inputLocation.value.toLowerCase());
    });
    
    clean();
    populate(filter.length,filter);
   
   
})
let valoare=0;
const navCheck=document.getElementById('navCheck');
navCheck.addEventListener('change',()=>{
    valoare=valoare+1;
    const filter=list.filter((obj)=>{
        return obj.type.toLowerCase().includes('full');
       
    })
    if(valoare%2===0)
    {
        clean();
        populate(list.length/2,list);
    }
    else if(valoare%2===1){
        clean();
        populate(filter.length,filter);

    }
    
    console.log(valoare);
    
})




