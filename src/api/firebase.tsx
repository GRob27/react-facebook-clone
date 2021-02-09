import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseApp = firebase.initializeApp();

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
