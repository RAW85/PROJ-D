// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

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



logIn.addEventListener('click',(e)=>
{
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  const dt = new Date();
  update(ref(database,'users/'+user.uid),{
  last_login:dt

})
location.replace("../home.html");
/*
if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.username);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}*/

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);
})

});
