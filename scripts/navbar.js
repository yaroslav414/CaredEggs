
//Popup window opening function 
function openPopUp(abc) {
    abc.style.visibility = "visible";
    document.querySelector("body").style.overflow = "hidden";
}


//Popup window closing function
function closePopUp(abc) {
    abc.style.visibility = "hidden";
    document.querySelector("body").style.overflow = "scroll";
}

//---------------------Sign-up functionality---------------------
let signUpButton = document.querySelector("#sign_up_button");
let signUp = document.querySelector("#sign_up");
let closeSignUp = document.querySelector("#close_sign_up")

signUpButton.addEventListener("click", function () {
    openPopUp(signUp);
})

closeSignUp.addEventListener("click", function () {
    closePopUp(signUp);
})


document.querySelector("#submit").addEventListener("click", getSignUpData);
let signUpForm = document.querySelector("#email");

let users = JSON.parse(localStorage.getItem("usersLS")) || [];

function getSignUpData(event) {
    event.preventDefault();

    let userExists = false;

    //checking user already exists or not
    users.forEach(function (el) {
        if (el.email == signUpForm.value) {
            alert("User already Exists!");
            userExists = true;
            return;
        }
    })

    //if user not exists then only able to sign up
    if (!userExists) {
        let obj = {
            email: signUpForm.value,
            password: 12345
        }

        users.push(obj);

        localStorage.setItem("usersLS", JSON.stringify(users));

        alert("🙂 Sign Up successfully, go for Sign-in.")
        alert("Password sent to your Gmail")

        signUpForm.value = "";
    }

    signUpForm.value = "";
}




//==================== Chat functionality ====================
// let dropDown = document.querySelector("")
let chat = document.querySelector("#chat");
let chatBox = document.querySelector("#chat-box");

let chatOpened = 0;

chat.addEventListener("click", function(){
    if(chatOpened == 0){
        chatOpened = 1;
        chatBox.style.visibility = "visible";
        document.querySelector("#box").style.opacity = "0";
        document.querySelector("#dropdown").style.rotate = "0deg";
    }else{
        chatOpened = 0;
        chatBox.style.visibility = "hidden";
        document.querySelector("#box").style.opacity = "1";
        document.querySelector("#dropdown").style.rotate = "-180deg";
    }
})