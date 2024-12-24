import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this line

const firebaseConfig = {
    apiKey: "AIzaSyCZSaibkP6WwR4K2SIYPbASHW_3WRy_GQo",
    authDomain: "auth-test-a6884.firebaseapp.com",
    projectId: "auth-test-a6884",
    storageBucket: "auth-test-a6884.firebasestorage.app",
    messagingSenderId: "1083652204021",
    appId: "1:1083652204021:web:4c9eaafff300281db8ecbc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };