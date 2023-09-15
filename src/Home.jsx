import React, { useEffect, useState } from 'react';
import { auth } from "./config/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Shop from './components/Shop';
import Bank from './components/Bank';
import Combat from './components/Combat';
import Completion from './components/Completion';
import Statistics from './components/Statistics';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings';
import Delve from './components/delve';


const Home = () => {
    const [selectedContent, setSelectedContent] = useState('bank');

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
    return (
        <div className="app-container">
          <Navbar />
          <div className="content-container">
            <Sidebar onSelectContent={setSelectedContent} />
            <div className="main-content">
            {selectedContent === 'bank' && <Bank />}
            {selectedContent === 'shop' && <Shop />}
            {selectedContent === 'combat' && <Combat />}
            {selectedContent === 'completion' && <Completion />}
            {selectedContent === 'statistics' && <Statistics />}
            {selectedContent === 'leaderboard' && <Leaderboard />}
            {selectedContent === 'settings' && <Settings />}
            {selectedContent === 'delve' && <Delve />}
            </div>
          </div>
        </div>
      );
    };

export default Home;