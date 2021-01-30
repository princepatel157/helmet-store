import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvLp7S38bx_MO0yG32g-ae7j3zCST7Gco",
  authDomain: "ashi-helmets.firebaseapp.com",
  projectId: "ashi-helmets",
  storageBucket: "ashi-helmets.appspot.com",
  messagingSenderId: "31717289115",
  appId: "1:31717289115:web:aa1d8974f995fda6a0ea3e",
  measurementId: "G-ZDL74L6XZW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
