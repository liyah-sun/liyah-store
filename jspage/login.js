// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7E2rc8KG45efSi6P9oEz7Mkk74-aev_Y",
  authDomain: "liyahstore.firebaseapp.com",
  projectId: "liyahstore",
  storageBucket: "liyahstore.firebasestorage.app",
  messagingSenderId: "402346839887",
  appId: "1:402346839887:web:f41e9cce5bbead2401ff3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);


const btn = document.getElementById("btn");
btn.addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Login Successful:", user);
            window.location.href = "index.html"

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);

            alert(error.message)
        });

    //  await 
    //         


    // try {
    //     await signInWithEmailAndPassword(
    //         auth,
    //         email,
    //         password

    //     );


    // } catch (error) {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(error.message);

    //     alert(error.message)
    // }



})