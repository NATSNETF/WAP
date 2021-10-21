
window.onload= function(){
  
    var password = document.getElementById("password")
    , repassword = document.getElementById("repassword");
    var passw= /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;




 //this is for page redirect
 function getData()
 {
     //gettting the values
     var email = document.getElementById("email").value;
     var password= document.getElementById("password").value; 
     
     //saving the values in local storage
     localStorage.setItem("txtValue", email);
     localStorage.setItem("txtValue1", password);
     localStorage.setItem("txtValue2", mobile);
     localStorage.setItem("txtValue3", telephone);   
 }







 function validatTheInput(){


    if(!password.value.match(passw) || !repassword.value.match(passw)){
        alert("password ..........");
    }

 }   

document.getElementById("myform").onsubmit = function(){
   
        validatTheInput();
        validatePassword();
        getData();

}

function validatePassword(){

    if(password.value != repassword.value) {
        repassword.setCustomValidity("Passwords Don't Match");
    } else {
        repassword.setCustomValidity('');
       
    }
  }

password.onchange = validatePassword;
repassword.onkeyup = validatePassword
  
 
}