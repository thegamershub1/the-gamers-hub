// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyDbb2wMO7VtJq4Vw-uEM9Dzj9jXWMZXnWY',
  authDomain: 'gamers-hub-booking.firebaseapp.com',
  projectId: 'gamers-hub-booking',
  storageBucket: 'gamers-hub-booking.appspot.com',
  messagingSenderId: '761570429502',
  appId: '1:761570429502:web:b08804fc9e6acff5be5f6f'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
