import firebase from 'firebase/app';
import 'firebase/firestore';

export const APP = firebase.initializeApp({
  apiKey: 'AIzaSyDRp_AisY7ASdfzYDENz5gJZEW8VWKUPkA',
  authDomain: 'sudonims.firebaseapp.com',
  databaseURL: 'https://sudonims.firebaseio.com',
  projectId: 'sudonims',
  storageBucket: 'sudonims.appspot.com',
  messagingSenderId: '1073311456089',
  appId: '1:1073311456089:web:c5efc2ab0e6fc758dc4a48',
  measurementId: 'G-V2LYH4FGXP',
});

export const db = firebase.firestore();
