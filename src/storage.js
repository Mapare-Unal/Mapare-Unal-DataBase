const firebase =require("firebase");
require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACjVBIITuxlfUuKxE2yhKiGZKzgTRX-H8",
    authDomain: "mapareunal.firebaseapp.com",
    databaseURL: "https://mapareunal.firebaseio.com",
    projectId: "mapareunal",
    storageBucket: "mapareunal.appspot.com",
    messagingSenderId: "154321748506",
    appId: "1:154321748506:web:284932b8696d7a264387a3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
module.exports = firebaseApp;