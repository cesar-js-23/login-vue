// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA50E93G-V5O5J6m4nwItt5KL5f6DzbS3c",

  authDomain: "payroll-manager-39016.firebaseapp.com",

  projectId: "payroll-manager-39016",

  storageBucket: "payroll-manager-39016.appspot.com",

  messagingSenderId: "143865850348",

  appId: "1:143865850348:web:f24714161bf983404438c9",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
