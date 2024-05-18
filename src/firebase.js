import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrygUwpQ3hoa8lTPGLq5nSjASUOwuKP44",
    authDomain: "agricrafthub.firebaseapp.com",
    projectId: "agricrafthub",
    storageBucket: "agricrafthub.appspot.com",
    messagingSenderId: "1051871387805",
    appId: "1:1051871387805:web:d99ea57ee988bde02fb474",
    measurementId: "G-QZJ8LJJ8Q1"
};


const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

export { db };