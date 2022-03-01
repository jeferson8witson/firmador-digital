import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage"; // <----
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXyvp-9yk1-pAxliOYH5vB0L5rLtcA9g0",
  authDomain: "firmador-digital.firebaseapp.com",
  projectId: "firmador-digital",
  storageBucket: "firmador-digital.appspot.com",
  messagingSenderId: "514908249449",
  appId: "1:514908249449:web:26091c5bfffebe0ebcb1f8"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.

export default firebase;
