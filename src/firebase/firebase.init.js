// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv9O79zQkKdNJrL8gPDHNSyFcQFvHh1SY",
  authDomain: "email-pass-auth-fc607.firebaseapp.com",
  projectId: "email-pass-auth-fc607",
  storageBucket: "email-pass-auth-fc607.appspot.com",
  messagingSenderId: "637645432795",
  appId: "1:637645432795:web:157cc2d2e1413505d669fe",
  measurementId: "G-SS7TJBFHH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;