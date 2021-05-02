import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfAAikLnKIx8uAvvBRpHIzzDEQmQ6PxJc",
    authDomain: "foryou-11.firebaseapp.com",
    databaseURL: "https://foryou-11-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "foryou-11",
    storageBucket: "foryou-11.appspot.com",
    messagingSenderId: "521233009717",
    appId: "1:521233009717:web:11fdc3bdb4f4a8c72cb57c",
    measurementId: "G-45W1V2D766"
};

// Initialize Firebase


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

/*
export const auth = firebase.auth();
export const authSession = firebase.auth;
export const db = firebase.firestore();
export const geo = firebase.firestore;

// Initialize Performance Monitoring and get a reference to the service
*/
