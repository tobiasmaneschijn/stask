
 import firebase from "firebase/app";
 import "firebase/firestore";


 
 const firebaseConfig = {
    apiKey: "AIzaSyDejPOfp-0o50T7k2vFaYNKf9ReBNPJN7g",
    authDomain: "stask-fba8c.firebaseapp.com",
    databaseURL: "https://stask-fba8c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stask-fba8c",
    storageBucket: "stask-fba8c.appspot.com",
    messagingSenderId: "995153194317",
    appId: "1:995153194317:web:6fe41d57054e70422edb04",
    measurementId: "G-KYZC0RWRBN"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

