import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDS7zmAAYcWDNmbktuuIZHrafPSwvXBy4U',
  authDomain: 'ecommerce-95081.firebaseapp.com',
  projectId: 'ecommerce-95081',
  storageBucket: 'ecommerce-95081.appspot.com',
  messagingSenderId: '552971921115',
  appId: '1:552971921115:web:8a8982b732e11f1b338efe'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };