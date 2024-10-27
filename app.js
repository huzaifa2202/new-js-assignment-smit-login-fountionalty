function loginfountion() {
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value

    if (email == "" || pass == "") {
        alert('please enter a password and email')
    }

    if (email.indexOf("@gmail.com") === -1) {
        alert("Please enter a valid Gmail address.@gmail.com");
        return;
    }

    if (email === "huzaifa1234@gmail.com" && pass === "12345678") {
        alert('login')
        window.location.href = './Home.html'
    } else {
        alert('worng password or email')
    }
    if (pass.length !== 8) {
        alert("Password must be exactly 8 characters long.");
    }


}

function passwordtoggle() {
    var togimage = document.getElementById('image');
    var passwordInput = document.getElementById('pass');
    if (passwordInput.type == "password" ) {
        passwordInput.type = "text"
    }else {
        passwordInput.type = "password"
    }
}