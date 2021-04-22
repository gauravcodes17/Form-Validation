const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

const sendData = (sRate, count) => {
    if(sRate === count){
        swal("Yippe!", "Your Form Registered Successfully", "success");
    }
}

const success = () => {
    let formCon = document.getElementsByClassName("form-control");

    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            sendData(sRate, count);
        }else{
            return false;
        }
    }
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    const isEmail = (emailVal) => {
        var atSymbol = emailVal.indexOf("@");
        if(atSymbol < 1) return false;

        var dot = emailVal.lastIndexOf(".");
        if(dot <= atSymbol + 2) return false;
        if(dot === emailVal.length - 1) return false;
        return true;
    }

    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'username min 3 char');
    }else{
        setSuccessmsg(username);
    }

    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email');
    }else{
        setSuccessmsg(email);
    }

    if(phoneVal === ""){
        setErrorMsg(phone, 'phone number cannot be blank');
    }else if(phoneVal.length != 10){
        setErrorMsg(phone, 'Not a valid phone Number');
    }else{
        setSuccessmsg(phone);
    }

    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }else if(passwordVal.length <=5){
        setErrorMsg(password, 'Password Minimum 6 Char');
    }else{
        setSuccessmsg(password);
    }

    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Confirm password cannot be blank');
    }else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpassword, 'Password are not Matched');
    }else{
        setSuccessmsg(cpassword);
    }

    success();
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessmsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}