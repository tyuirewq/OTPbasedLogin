// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function saveMessage() {
  const message = document.getElementById("messageInput").value;
  const messagesRef = ref(db, "messages");
  const newMessageRef = push(messagesRef);
  set(newMessageRef, {
    text: message
  });
  document.getElementById("messageInput").value = "";
}

// Listen for new messages
const messagesRef = ref(db, "messages");
onChildAdded(messagesRef, (snapshot) => {
  const li = document.createElement("li");
  li.textContent = snapshot.val().text;
  document.getElementById("messagesList").appendChild(li);
});
