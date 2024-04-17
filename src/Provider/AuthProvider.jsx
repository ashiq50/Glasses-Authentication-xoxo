
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebaseConfig';
export const AuthContext = createContext(null)
// social medias
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user)
    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // twitter login
    const twitterLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, twitterProvider)
    }

    // facebook login
    const facebookLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    // log out
    const logOut = () =>{
        setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(()=>{
       const unSubsCribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
          });
          return () => unSubsCribe()
    } ,[])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        twitterLogin,
        facebookLogin,
        githubLogin,
        logOut,
        user,
        loading
    }
    
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
  };
export default AuthProvider;