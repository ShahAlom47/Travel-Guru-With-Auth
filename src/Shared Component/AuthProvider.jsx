import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(1234567);
    
    const googleProvider = new GoogleAuthProvider();



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleLogIn = () => {

        return signInWithPopup(auth, googleProvider)
    }

    const logOutUser= ()=>{
        return signOut(auth)
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

        });

        return () => unSubscribe
    }, [])



    const AuthInfo = { user, googleLogIn, createUser,loginUser, logOutUser  }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {
                    children
                }
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {

    children: PropTypes.node.isRequired
}