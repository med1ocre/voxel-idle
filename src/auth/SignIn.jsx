import React, { useState } from 'react';
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = ({ toggleComponent }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) =>{
            console.log(error);
        })
    }

    return (
        <div className='sign-in-container'>
          <form onSubmit={signIn}>
            <h1>Log In</h1>
            <input
              type="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
    
            <input
              type="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Log In</button>
          </form>
          <p>
            Don't have an account?{' '}
            <button onClick={toggleComponent}>Sign Up Here</button>
          </p>
        </div>
      );
    }

export default SignIn