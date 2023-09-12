import React, { useState } from 'react';
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const SignUp = ({ toggleComponent }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const signUp = (e) => {
        e.preventDefault();
    
        // Check if the username is empty
        if (username.trim() === '') {
            console.log("Please enter a username.");
            return; // Exit the function if the username is empty
        }
    
        // Create a user with email, password, and username
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Get the user from the userCredential object
            const user = userCredential.user;
            
            // Update the user's profile with the username
            updateProfile(user, {
                displayName: username
            })
            .then(() => {
                // Username is set successfully
                console.log("Username set:", username);
                
            })
            .catch((error) => {
                console.log("Error setting username:", error);
            });
        })
        .catch((error) => {
            console.log("Error signing up:", error);
        });

    }
    

    return (
        <div className='sign-in-container'>
            <form onSubmit={signUp}>
                <h1>Create an Account</h1>
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
        </div>
    );
}

export default SignUp;
