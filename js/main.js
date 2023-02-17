var email=document.getElementById("email");
var password=document.getElementById("password");
var login=document.getElementById("login");
var validation =document.getElementById("validation");
var users=JSON.parse( localStorage.getItem("users"));
var haveAccount=false;
var username;
login.onclick=function(){
    openAccount();
}

function openAccount(){
    if(email.value == "" && password.value == ""){
        validation.innerHTML="All inputs are required"
    }else{
        for(var i=0; i<users.length;i++){
            if(email.value.toLowerCase() == users[i].email.toLowerCase() && password.value === users[i].password ){
                haveAccount=true;
                username=users[i].name;
                break;
            }else{
                haveAccount=false;
            }
        }
        if(!haveAccount){
            validation.innerHTML="incorrect email or password"
        }
        else{
            window.open("./login.html?username="+username,"_self");
        }
    }    
}