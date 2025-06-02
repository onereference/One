// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMqTR298k1B3rkzKRYnKVwYVGMUDjRSO8",
  authDomain: "onereference-f6bd9.firebaseapp.com",
  databaseURL: "https://onereference-f6bd9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "onereference-f6bd9",
  storageBucket: "onereference-f6bd9.appspot.com",
  messagingSenderId: "314683717940",
  appId: "1:314683717940:web:22617e529804c538650d61",
  measurementId: "G-PMDVSW79MW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics and export it
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
