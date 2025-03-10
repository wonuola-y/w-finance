// lib/auth.js
import { auth } from "./firebaseConfig";
import {
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
} from "firebase/auth";

const actionCodeSettings = {
  url: "http://localhost:3000/auth", // Change to your production URL
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  // The domain must be configured in Firebase Hosting and owned by the project.
  linkDomain: "custom-domain.com",
};


// Function to send email link
export const sendEmailLink = async (email) => {
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("emailForSignIn", email);
    return { success: true, message: "Check your email for the sign-in link." };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Function to confirm sign-in
export const confirmSignIn = async () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please enter your email for confirmation");
    }
    try {
      const result = await signInWithEmailLink(
        auth,
        email,
        window.location.href
      );
      window.localStorage.removeItem("emailForSignIn");
      return { success: true, user: result.user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
};
