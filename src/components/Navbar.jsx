import React, { useState, useEffect } from 'react';
import { auth } from "../config/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';


const Navbar = ({ onToggleSidebar }) => {
    const user = auth.currentUser;
    const username = user.displayName;

    const userSignOut = () => {
        signOut(auth).then(() =>{
            console.log('sign out successful');
            location.reload();
        }).catch(error => console.log(error));
    }
    
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand game-title">VOXEL IDLE | V0.0.1</a>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-bs-placement="bottom-start" aria-haspopup="true" aria-expanded="false" data-bs-auto-end="false">
                {username}
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item dropdown-title">Account</a>
                    <a className="dropdown-item red-text" href="#"onClick={userSignOut}>Logout</a>
                    <hr />
                    <a className="dropdown-item dropdown-title">Other</a>
                    <a className="dropdown-item" href="#">Settings</a>
                </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
