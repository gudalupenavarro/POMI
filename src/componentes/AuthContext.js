import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import {auth} from "../firebase";
 const authContext = createContext();
 export const useAuth = () => {
    const context = useContext (authContext);
    if(!context) throw new Error ("there is no Auth provider")
    return context;
 };

 export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
 }