
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-jsN6dH0LhHaQvivUj-2QITD11bvVBd8",
    authDomain: "challenge-d72b3.firebaseapp.com",
    projectId: "challenge-d72b3",
    storageBucket: "challenge-d72b3.appspot.com",
    messagingSenderId: "391590434335",
    appId: "1:391590434335:web:3ea42454529737ff65272a",
    measurementId: "G-8BDZQYY0PC"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };