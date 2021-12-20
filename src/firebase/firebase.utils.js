import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCSQWuBF-k3hHdh7wtBlGivRVxaEgzWTgI",
    authDomain: "crown-clothing-db-4f173.firebaseapp.com",
    projectId: "crown-clothing-db-4f173",
    storageBucket: "crown-clothing-db-4f173.appspot.com",
    messagingSenderId: "1003913348724",
    appId: "1:1003913348724:web:10e80ec34e1b0a454bb321",
    measurementId: "G-RB4YY5FT3W"
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;