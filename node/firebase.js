// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { connectAuthEmulator,getAuth,createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWtKGKS5P96YF3DQIpHhw2LY7evGrEJmM",
    authDomain: "licenta-d0d2c.firebaseapp.com",
    projectId: "licenta-d0d2c",
    storageBucket: "licenta-d0d2c.appspot.com",
    messagingSenderId: "908408780707",
    appId: "1:908408780707:web:2e61cf2010a2912817cc16"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, sendEmailVerification };