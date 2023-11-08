import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

//+ Initialize Firebase App
const firebaseConfig = {
  apiKey: 'AIzaSyBa6TsstqPR2CwyZGAYOBrCh5oqSMOXVhU',
  authDomain: 'space-city-next.firebaseapp.com',
  projectId: 'space-city-next',
  storageBucket: 'space-city-next.appspot.com',
  messagingSenderId: '166787209034',
  appId: '1:166787209034:web:592f3390eb759a099153b3',
};

const app = initializeApp(firebaseConfig);

//+ Initialize Firestore
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db, app };
