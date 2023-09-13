import React, { useState } from 'react';
import { auth, db } from "../config/firebase"; // Make sure to import 'db' from your Firebase config
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Import 'doc' and 'setDoc' from Firestore
import { stats } from '../data/player';
import { mapAuthCodeToMessage } from '../js/fbscript/';

const SignUp = ({ toggleComponent }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null); // State to store and display errors

    const signUp = async (e) => {
        e.preventDefault();

        if (username.trim() === '') {
            setError("Please enter a username.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: username
            });

            const player = {
                uid: user.uid,
                username: username,
                coins: stats.coins,
                voxels: stats.voxels,
                blocks: stats.blocks,
                gems: stats.gems
            };

            await setDoc(doc(db, "players", user.uid), player);

            console.log("User and player data created successfully");
        } catch (error) {
            const errorMessage = mapAuthCodeToMessage(error.code); // Map the Firebase error code to a user-friendly message
            setError(errorMessage); // Set the error message in the state
            console.error("Error signing up or setting player data:", error);
        }
    }

    return (
        <div className='sign-in-container'>
            <div className='card bg-dark text-white signup-card' style={{"width" : "18rem"}}>
                <form onSubmit={signUp}>
                    <h2 className="card-title">Create Account</h2>
                    <input
                        type="text"
                        placeholder="Enter your Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Sign Up</button>
                    
                </form>
                <p>
                    Already have an account?{' '}
                    <button onClick={toggleComponent}>Sign In Here</button>
                </p>
                {error && <p className="error" style={{"marginTop" : "2rem" , "color" : "#E3242B"}}>{error}</p>} {/* Display error message if there is an error */}
            </div>
        </div>
    );
}

export default SignUp;