const user=document.getElementById('user');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cfmPassword=document.getElementById('cfmPassword');
const button=document.getElementById('button');
let validUser=false;
let validPassword=false;
let validEmail=false;
let validCfmPassword=false;
const re = /[A-Z]/;
const re1=/[0-9]/;
 


button.addEventListener('click',()=>{
   
if(user.value.length<5){
    validUser=false;
}
else if(user.value.length=0){
validUser=false;
}
else{
    validUser=true;
}
if(email.value.includes('@')){
    validEmail=true;
}
else{
    validEmail=false;
}
    if(password.value.search(re)!= -1 && password.value.search(re1)!= -1 && password.value.length>5){
        validPassword=true;}
    else{
     validPassword=false;   
    }
    if(cfmPassword.value===password.value){
        validCfmPassword=true;
    }
    else{
        validCfmPassword=false;
    }
   if(validUser===true && validEmail===true && validPassword===true && validCfmPassword===true){
    alert('account successfully created');
    localStorage.setItem('username',user.value);
    localStorage.setItem('password',password.value);
   }
   else if(validUser===false){
    alert('Usernames must be at least 6 characters long ')
   }
   else if(validPassword===false){
    alert('password must be at least 5 characters long contain a number and an uppercase letter')
   }
   else if(validCfmPassword===false){
    alert('Passwords did not match');
   }
})

