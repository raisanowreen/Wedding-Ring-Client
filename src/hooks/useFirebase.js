import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";


initializeAuthentication();


const auth = getAuth();
const useFirebase = () =>{
const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [authError, setAuthError] = useState('');

const registerUser = (email, password, name, history) =>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAuthError('');
    const newUser = {email, displayName: name};
    setUser(newUser);
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    history.replace('/')
    // ...
  })
  .catch((error) => {
    setAuthError (error.message);
    // ..
  })
  .finally(() =>{
      setIsLoading(false);
  });


}


const loginUser = (email, password, location, history) =>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
      // Signed in 
      const user = userCredential.user;
      setAuthError('');

    })
    .catch((error) => {
      setAuthError (error.message);
    })
    .finally(() =>{
        setIsLoading(false);
    });

}
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
        return () => unSubscribe;
      });
},[]);


const logOut = () =>{
    setIsLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      }) 
      .finally(() =>{
        setIsLoading(false);
    });
}




return{
    user,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    authError
}



}

export default useFirebase;