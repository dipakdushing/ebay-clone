
    document.querySelector("form"),addEventListener("submit",formSubmit);
    
var login_data=JSON.parse(localStorage.getItem("login_Datas"))||[]
function formSubmit(event){
     event.preventDefault();
     var firstname=document.getElementById('firstname').value;
     var lastname=document.getElementById('lastname').value
     var email=document.getElementById('email').value;
     var pass=document.getElementById('password').value;
   
     if(firstname.length==0||lastname.length==0||email.length==0||pass.length==0){
          alert("Input can not be left blank")
     }
     else{
     
    if(!login_data)
    login_data = [];
    login_data.forEach(user =>{
        if(user.mail==email){
            alert("User already exists!")
            return;
        }
    })
     var obj={
        firstname:firstname,
        lastname:lastname,
          mail:email,
          pass:pass}
          login_data.push(obj)
         localStorage.setItem("login_Datas",JSON.stringify(login_data)) 
         alert("sign in success")
         window.location.href = "/signin.html"
console.log(login_data)}
     }