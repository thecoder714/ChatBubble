function addUser() {
    user = document.getElementById("loginBox").innerHTML;
    localStorage.setItem("user", user);
    window.location = "/Chat%20Website/Login%20Pages/Main%20Pages/main-page.html";
}