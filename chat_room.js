const firebaseConfig = {
    apiKey: "AIzaSyAVSo1DAYzBwtTxJz3eaSviPQbKTbxBZA0",
    authDomain: "let-chat-c885f.firebaseapp.com",
    projectId: "let-chat-c885f",
    storageBucket: "let-chat-c885f.appspot.com",
    messagingSenderId: "911834931477",
    appId: "1:911834931477:web:87aaa37b5930b92aa3c91c",
    measurementId: "G-NDF8HPK94J"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username = localStorage.getItem(user_name)
document.getElementById("username").innerHTML = username
function logout()
{
    window.location = "index.html"
}
function AddRoom() 
{ 
 room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });


localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}