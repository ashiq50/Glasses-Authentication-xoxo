
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebaseConfig';
export const AuthContext = createContext(null)
// social medias
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user)
    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    // twitter login
    const twitterLogin = () =>{
        return signInWithPopup(auth, twitterProvider)
    }

    // log out
    const logOut = () =>{
        setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
          });
    } ,[])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        twitterLogin,
        logOut,
        githubLogin,
        user
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