function addUser() {
    user = document.getElementById("loginBox").innerHTML;
    localStorage.setItem("user", user);
    window.location = "ChatBubble/main-page.html";
}
