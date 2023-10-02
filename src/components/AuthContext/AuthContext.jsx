import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const Context = createContext()
const AuthContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // on auth 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => {

            unSubscribe()
            setLoading(false)
        }
    }, [])
    console.log(user);
    const authentications = {
        user,
        createUser,
        login,
        logOut,
        loading


    }
    return (
        <Context.Provider value={authentications}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;