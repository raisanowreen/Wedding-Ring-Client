import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";


initializeAuthentication();


const auth = getAuth();
const useFirebase = () =>{
const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [authError, setAuthError] = useState('');
const [admin, setAdmin] = useState(false);

const registerUser = (email, password, name, history) =>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAuthError('');
    const newUser = {email, displayName: name};
    setUser(newUser);
    // SAVE USER TO THE DATABASE
    saveUser(email, name, password);
    // save name to firebase after creation
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


useEffect(() =>{
  fetch(`http://localhost:5000/users/${user.email}`)
  .then(res=>res.json())
  .then(data => setAdmin(data.admin))
},[user.email])

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

const saveUser = (email, displayName, password) =>{
  const user = {email, displayName, password};
  console.log(user);
fetch('http://localhost:5000/users',{
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(user)
})
.then()
}


return{
    user,
    admin,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    authError
}



}

export default useFirebase;