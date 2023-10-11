// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCUG_A-yK0OjjAPpJ-VPq50vNaxDwash5g",
    authDomain: "nequi-fa804.firebaseapp.com",
    projectId: "nequi-fa804",
    storageBucket: "nequi-fa804.appspot.com",
    messagingSenderId: "1065169111832",
    appId: "1:1065169111832:web:62140504a2555e94776c6d"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();