var userName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var signup = document.getElementById("signup");
var validation = document.getElementById("validation");
var users;
var isExist = false;
if (localStorage.getItem("users") == null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem("users"));
}

signup.onclick = function () {
    addUser();
}
function addUser() {
    isExist=false;
    if (userName.value == "" || email.value == "" || password.value == "") {
        validation.innerHTML = "All inputs are required";
    }
    else {

        for (var i = 0; i < users.length; i++) {
            if (users[i].email.toLowerCase() == email.value.toLowerCase()) {
                isExist = true;
                validation.classList.replace('text-success','text-danger');
                validation.innerHTML = "Email is already exist";
                validation.classList.replace()
                break;
            }
        }
        if (!isExist) {
            var newUser = {
                name: userName.value,
                email: email.value,
                password: password.value
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            validation.classList.replace('text-danger','text-success');
            validation.innerHTML="Succes";
            clearInputs();
        }

    }

}
function clearInputs() {
    userName.value = "";
    email.value = "";
    password.value = "";
}