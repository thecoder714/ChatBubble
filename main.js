function addUser() {
    user = document.getElementById("loginBox").innerHTML;
    localStorage.setItem("user", user);
    window.location = "main/main-page.html";
}
