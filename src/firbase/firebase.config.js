// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQjxYp8gyPj5CH0wolRVQj0piTmYC8aBo",
    authDomain: "project-ifti.firebaseapp.com",
    projectId: "project-ifti",
    storageBucket: "project-ifti.appspot.com",
    messagingSenderId: "381217164568",
    appId: "1:381217164568:web:3e7d98955eb55b6306226d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app