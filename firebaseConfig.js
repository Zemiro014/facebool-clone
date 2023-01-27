import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqIq_Shzb1qnuUQ8-sal7KR48MG2folE0",
    authDomain: "facebook-2-0-clone.firebaseapp.com",
    projectId: "facebook-2-0-clone",
    storageBucket: "facebook-2-0-clone.appspot.com",
    messagingSenderId: "186672624731",
    appId: "1:186672624731:web:aa952839bd913fa1fe3b7e"
  };

  // const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  // const app = firebase.initializeApp(firebaseConfig)
  // const db = app.firestore();
  // const storage = firebase.storage();
  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebaseApp.storage();

  export {auth, db, storage};