// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqWnb9Q41xl5YrUx-KL1MjkgyH0AvhdMs",
  authDomain: "voxel-idle.firebaseapp.com",
  projectId: "voxel-idle",
  storageBucket: "voxel-idle.appspot.com",
  messagingSenderId: "573166709896",
  appId: "1:573166709896:web:dd9c4463a72cb3f990033d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
