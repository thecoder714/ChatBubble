const app = initializeApp(firebaseConfig);

do {
    console.log("lolol")
} while (5 == 5);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDL1cX6b9ONqcL7hIWpcHIqdW6MmYftbjI",
    authDomain: "chatbubble-a9301.firebaseapp.com",
    projectId: "chatbubble-a9301",
    storageBucket: "chatbubble-a9301.appspot.com",
    messagingSenderId: "119028641970",
    appId: "1:119028641970:web:824e925fab0a87d7f0d9ab"
};

function logout() {
    localStorage.removeItem("user");
    window.location = "/Chat%20Website/Login%20Pages/Main%20Pages/index.html";
}

function start() {
    user = localStorage.getItem("user")
    document.getElementById("username").innerHTML = "Welcome" + user;
}

function createGroup() {
    function getData() {
        firebase.database().ref("/").on('value',
            function (snapshot) {
                document.getElementById("output").innerHTML ="";
                snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;

                    //Start code
                        console.log(Room_names);
                        row = "<div id=" + Room_names + " onclick='redirect(this.id)' class='room_name'></div>"
                        row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'> + Room_names+'</div>"
                        document.getElementById("groupname").innerHTML += row;
                    //End code
                });
            });
    }
    getData();
}