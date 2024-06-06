import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCePgHzGm4RrHO7vN-pngJOzE0a2hihFJs",
  authDomain: "auth-flow-e54c7.firebaseapp.com",
  projectId: "auth-flow-e54c7",
  storageBucket: "auth-flow-e54c7.appspot.com",
  messagingSenderId: "182654235152",
  appId: "1:182654235152:web:99ebd656ce9d9f66e5d095",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get the Firebase Auth instance
const auth = getAuth(firebaseApp);

// Set up Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
