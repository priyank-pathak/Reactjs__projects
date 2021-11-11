import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC3zFCJIs_PSmzDeSgobBPA1aVAdSdbM5s",
  authDomain: "watsapp-clone-569f4.firebaseapp.com",
  databaseURL: "https://watsapp-clone-569f4-default-rtdb.firebaseio.com",
  projectId: "watsapp-clone-569f4",
  storageBucket: "watsapp-clone-569f4.appspot.com",
  messagingSenderId: "152348066604",
  appId: "1:152348066604:web:296636e7b2217bcba26289",
  measurementId: "G-FLY5QCFQPL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
