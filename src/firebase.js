// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAnAokj0RV0uzwJDDzuYepB08_MTcGLlDg",
    authDomain: "drive-46d38.firebaseapp.com",
    projectId: "drive-46d38",
    storageBucket: "drive-46d38.appspot.com",
    messagingSenderId: "129596930198",
    appId: "1:129596930198:web:454a3af37884b65a972ab7",
    measurementId: "G-RKTGXJ7HS0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleProvider();
  const storage = firebase.storage()
  const db = firebaseApp.firestore();

  export { auth, provider, db, storage }