import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Home';
import { auth } from './config/firebase';



function App() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [user, setUser] = useState(null); // Store user information
  const [loading, setLoading] = useState(false); // Loading state
  const [redirectToHome, setRedirectToHome] = useState(false); // Redirect state

  const toggleComponent = () => {
    setShowSignIn(!showSignIn);
  };

  // Function to set loading state and redirect to Home after 5 seconds
  const setLoadingAndRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      setRedirectToHome(true);
    }, 2000); 
  };

  // Use useEffect to listen for changes in the user's authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update the user state with the authenticated user or null if not authenticated
      if (user) {
        setLoadingAndRedirect();
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Redirect to Home when redirectToHome is true
  if (redirectToHome) {
    return <Home />;
  }

  // Check if a user is authenticated
  if (user) {
    // Check if the user has a displayName (username)
    if (user.displayName) {
      return <Home />;
    } else {
      return (
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <p>Please set your username before proceeding.</p>
          )}
        </div>
      );
    }
  } else {
    // Display sign-in or sign-up based on showSignIn state
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {showSignIn ? (
              <SignIn toggleComponent={toggleComponent} />
            ) : (
              <SignUp toggleComponent={toggleComponent} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
