// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBImV4-QroenwecFE2Nk53MeJGQt-aWE2o",
  authDomain: "studio-1263535307-205e6.firebaseapp.com",
  databaseURL: "https://studio-1263535307-205e6-default-rtdb.firebaseio.com",
  projectId: "studio-1263535307-205e6",
  storageBucket: "studio-1263535307-205e6.firebasestorage.app",
  messagingSenderId: "240447378915",
  appId: "1:240447378915:web:a69dc620dab3158851fcd6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function saveMessage() {
  const message = document.getElementById("messageInput").value;
  db.ref("messages").push().set({
    text: message
  });
  document.getElementById("messageInput").value = "";
}

// Listen for new messages
db.ref("messages").on("child_added", function(snapshot) {
  const li = document.createElement("li");
  li.textContent = snapshot.val().text;
  document.getElementById("messagesList").appendChild(li);
});
