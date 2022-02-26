document.querySelector("form").addEventListener("submit",signin);
var email_data=JSON.parse(localStorage.getItem("login_Datas"));
var count=0;
function signin(event){
    event.preventDefault();
    var email=document.getElementById("email").value;
  
    for(var i=0;i<email_data.length;i++){
        if(email_data[i].mail==email){
            
            window.location.href="password.html";
        }
        else{
            count++;
        }
    }
    if(count==email_data.length){
        alert("invalid Credentials")
    }
}