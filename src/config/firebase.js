// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore'; // Import 'doc' and 'setDoc' from Firestore



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

export async function updateFirebaseWithStats(statsToUpdate) {
  // Get the currently authenticated user
  const user = auth.currentUser;

  if (user) {
      try {
          // Create a player object with updated stats
          const player = {
              uid: user.uid,
              coins: statsToUpdate.coins,
              voxels: statsToUpdate.voxels,
              blocks: statsToUpdate.blocks,
              gems: statsToUpdate.gems,
              // Add other player data here (e.g., score, level, etc.)
          };

          // Store the player object in Firestore using setDoc
          await setDoc(doc(db, "players", user.uid), player);
          
      } catch (error) {
          console.error("Error updating Firebase with stats:", error);
      }
  } else {
      console.log("User not authenticated.");
  }
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
