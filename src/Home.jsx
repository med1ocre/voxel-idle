import React, { useEffect, useState } from 'react';
import { auth } from "./config/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Navbar from './components/navbar';
import { getCoin } from './js/script'

const Home = () => {
    const user = auth.currentUser;
    const username = user.displayName;
    const[authUser, setAuthUser] = useState(null);
    useEffect(() =>{
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null);
            }
        });

        return() => {
            listen();
        }
    }, []);
    const userSignOut = () => {
        signOut(auth).then(() =>{
            console.log('sign out successful');
        }).catch(error => console.log(error));
    }
    return(    
        
        <div>
        <Navbar />
        <button onClick={getCoin}>Coin</button>
        </div>
    )

}

export default Home;