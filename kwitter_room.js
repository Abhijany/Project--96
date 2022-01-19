const firebaseConfig = {
    apiKey: "AIzaSyC7-smen7a4Q15iOaIMbnHrO-8JrVtsgMA",
    authDomain: "let-s-chat-29ffa.firebaseapp.com",
    databaseURL: "https://let-s-chat-29ffa-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-29ffa",
    storageBucket: "let-s-chat-29ffa.appspot.com",
    messagingSenderId: "744344248147",
    appId: "1:744344248147:web:c7dffc894ebcd0b8430ba6",
    measurementId: "G-7YDR97XJLV"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() 
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log(Room_names);
    row = "<div class='page_div' id=" + Room_names + "onclick='redirectToRoomPage(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
   });
  });
}
getData();

function redirectToRoomPage(name) 
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}