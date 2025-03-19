
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8wYFqUHrGsfz7Bo6MtI6DBwmuUttTdls",
  authDomain: "w-finance-5ff80.firebaseapp.com",
  projectId: "w-finance-5ff80",
  storageBucket: "w-finance-5ff80.firebasestorage.app",
  messagingSenderId: "861304757337",
  appId: "1:861304757337:web:ce07ae0871c09270bee548",
  measurementId: "G-T0L2ZPVB37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);