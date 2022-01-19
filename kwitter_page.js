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
room_name = localStorage.getItem("room_name");

function send() 
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  } });  }); }
getData();