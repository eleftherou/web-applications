window.onload = function () {
    document.getElementById("password1").onchange = validatePassword;
    document.getElementById("password2").onchange = validatePassword;
    document.getElementById("date").onchange = validateDate;
}

function validatePassword() {
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    if (pass1 != pass2)
        document.getElementById("password2").setCustomValidity("Οι κωδικοί δεν ταιριάζουν!");
    else
        document.getElementById("password2").setCustomValidity('');
}


function validateDate() {
    var date = document.getElementById("date").value;
    if (date > "2002-12-31")
        document.getElementById("date").setCustomValidity("Επιτρέπονται μόνο άτομα άνω των 18 ετών'.");
    else
        document.getElementById("date").setCustomValidity('');
}

