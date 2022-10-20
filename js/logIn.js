const user=document.getElementById('user');
const password=document.getElementById('password');
const username=localStorage.getItem('username');
const password1=localStorage.getItem('password');
const button=document.getElementById('button');



button.addEventListener('click',()=>{
    if(user.value===username && password.value===password1){
        location.replace("index.html")
        
    }
    
})