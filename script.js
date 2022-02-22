
function validateEmail(email) {
    email = document.querySelector(".enter-email");
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(mailFormat)) {
        document.querySelector(".subscribe-input").classList.add("active")
        document.querySelector(".warning").style.display = "block";
    } else {
        document.querySelector(".subscribe-input").classList.remove("active")
        document.querySelector(".warning").style.display = "none";
        
    }

}