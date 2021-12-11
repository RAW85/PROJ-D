// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged , sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaV19bjswbzhc9i8Qu7DwRbOJn8pEEzz0",
    authDomain: "proj-d-3b1c2.firebaseapp.com",
    projectId: "proj-d-3b1c2",
    storageBucket: "proj-d-3b1c2.appspot.com",
    messagingSenderId: "607417345536",
    appId: "1:607417345536:web:d9ca770bca0201da185ae5",
    measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

$("#reset").click( function()
{
var email = document.getElementById("email").value;
sendPasswordResetEmail(auth, email)
.then(function() {
  
alert("Password has been reset and sent to provided email");
location.replace("./index.html");

})
.catch(function(error)  {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);

  alert(errorMessage);
})

});