import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase';
export const AuthProvider = createContext();
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [loder, setLoder] = useState(true)
    const [user, setUser] = useState()
    const createUser = (email, password)=>{
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoder(true)
        return signOut(auth)
    }
    const updateUserProfile = update =>{
        return updateProfile(auth.currentUser, update)
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, createUser =>{
            setUser(createUser)
            setLoder(false)
        });
        return ()=>unsubscribed;
    },[])

    const value = {
        createUser,
        login,
        user,
        logOut,
        loder,
        updateUserProfile
    

    }
    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;