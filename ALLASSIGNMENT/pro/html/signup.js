// function signup(){
//     //signup is called on signup.html file on the click button
//     // get email
//     let email = document.getElementById('email').value;
//     // get password
//     let password =document.getElementById("password").value;
    

//     // validation
//     if(!email.includes("@")){
//         document.getElementById("error1").innerHTML += 'email should be valid'
//     }else if(password.length < 8){
//         document.getElementById("error2").innerHTML += 'password should be more than 8 character'
//     }else{
//         // store email and password
//       localStorage.setItem("email",email)
//       localStorage.setItem("password",password)
//         window.location.href ='signin.html' 
//     }



//     //  let customerE= localStorage.getItem("email")
//     //  let customerP= localStorage.getItem("password")
    
// }


//         // let customerEmails=[{email:"email",password:"pwd"}];
//         // let 
//         // function myNewFunction(sel) {
//         //       return (sel.options[sel.selectedIndex].text);
//         // }
//         // function submit(){
//         //     let email = document.getElementById("email").value;
//         //     let pwd = document.getElementById("password").value;
//         //     // let role = myNewFunction();
//         //     document.getElementById("output").innerHTML += "emial" + email;

//             //  let customerE= localStorage.getItem("email")
//             //  let customerP= localStorage.getItem("password")

//             //      if(email === 'manager@gmail.com'){
//             //         window.location.href="inventory.html";
//             //      }else if(email === customerE){
//             //         window.location.href="main.html";
//             //      }else{
//             //         document.getElementById("output").innerHTML += 'Incorrect email'
//             //      }
             
        
//     // if(email ===  && role=== "Manager")
//     //             window.location.href="inventory.html";
//     //         else
//     //             window.location.href="main.html";
//       //  }

let user = [{
        id: 1,
        email: "manager@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        email: "customer1@gmail.com",
        password: "123456"
    },
    {
        id: 3,
        email: "customer2@gmail.com",
        password: "123456"
    },
];

function signup() {
    // get email
    let email = document.getElementById('email').value;
    // get password
    let password = document.getElementById("password").value;


    // validation
    if (!email.includes("@")) {
        document.getElementById("error1").innerHTML += 'email should be valid'
    } else if (password.length < 4) {
        document.getElementById("error2").innerHTML += 'password should be more than 8 character'
    } else {
        // store email and password
    window.location.href = 'signin.html'
}
}

function signin() {
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;


    //validation
    if (!email.includes("@")) {
        document.getElementById("error1").innerHTML += 'email should be valid'
    } else if (pwd.length < 4) {
        document.getElementById("error2").innerHTML += 'password should be more than 8 character'
    }else {

    for (i = 0; i < user.length; i++) {
        if (email === 'manager@gmail.com') {
            window.location.href = "inventory.html";
        } else  {
            window.location.href = "yo.html";
        }
    }

    }
    // document.getElementById("output").innerHTML += 'Incorrect email'

}