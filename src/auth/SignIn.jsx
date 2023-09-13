import React, { useState } from 'react';
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { mapAuthCodeToMessage } from '../js/fbscript/';

const SignIn = ({ toggleComponent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              console.log(userCredential);
          })
          .catch((error) => {
              const errorMessage = mapAuthCodeToMessage(error.code); // Map the Firebase error code to a user-friendly message
              setError(errorMessage); // Set the error message in the state
              console.log(error);
          });
  }

  return (
      <div className='sign-in-container'>
          <div className='card bg-dark text-white signin-card' style={{"width" : "18rem"}}>
              <form onSubmit={signIn}>
                  <h2 className="card-title">Log In</h2>
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
              {error && <p className="error" style={{"marginTop" : "2rem", "color" : "#E3242B"}}>{error}</p>} {/* Display error message if there is an error */}
          </div>
      </div>
  );
}

export default SignIn;