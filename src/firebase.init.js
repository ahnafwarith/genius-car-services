// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwuXKI8TBHOZiuzr0BOdgWV94Wh0Q9xvE",
    authDomain: "genius-car-services-99741.firebaseapp.com",
    projectId: "genius-car-services-99741",
    storageBucket: "genius-car-services-99741.appspot.com",
    messagingSenderId: "325115780285",
    appId: "1:325115780285:web:786dd885abe507ca64abd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;