// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxSQpxsyfkKfUXdl7VkUbl5MrNWkdAdPU",
  authDomain: "auth-authentication-7b72a.firebaseapp.com",
  projectId: "auth-authentication-7b72a",
  storageBucket: "auth-authentication-7b72a.firebasestorage.app",
  messagingSenderId: "1066059169951",
  appId: "1:1066059169951:web:80386f4ea0b28d464b22aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);