import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyA87Cct_g2Hmif29bTg8lbOl-N5ADeHT3I",
  authDomain: "minihelper-763da.firebaseapp.com",
  databaseURL: "https://minihelper-763da.firebaseio.com",
  projectId: "minihelper-763da",
  storageBucket: "minihelper-763da.appspot.com",
  messagingSenderId: "948977481079"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export {
  firebase,
  db
} ;