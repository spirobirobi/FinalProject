const user=document.getElementById('user');
const password=document.getElementById('password');
const username=localStorage.getItem('username');
const password1=localStorage.getItem('password');
const button=document.getElementById('button');



button.addEventListener('click',()=>{
    if(user.value===username && password.value===password1){
        location.replace("index.html")
        
    }
    else if(user.value !== username &&password.value != password ){
        alert('Username and Password are incorect');
    }
    else if(user.value !== username){
        alert('Username incorect');
    }
    else if(password.value != password){
        alert('Password incorect');
    }
    
})