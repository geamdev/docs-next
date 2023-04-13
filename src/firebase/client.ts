import { initializeApp } from "@firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjnJti1VVxxqXbVlhnU5zFqm8tzK4WoGU",
  authDomain: "devter-d68bb.firebaseapp.com",
  projectId: "devter-d68bb",
  storageBucket: "devter-d68bb.appspot.com",
  messagingSenderId: "846409441328",
  appId: "1:846409441328:web:8a6e056d9909ce009b0df5",
  measurementId: "G-VPNPR8NFSQ"
};

initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user: any) => {
  const { displayName, email, screenName, photoUrl } = (user as any).reloadUserInfo 
    return {
      name: displayName,
      email,
      username: screenName,
      avatar: photoUrl
    };
};

export const onAuthStateChanged = (onChange: any) => {
  return getAuth().onAuthStateChanged(user => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider();
  githubProvider.setCustomParameters(firebaseConfig);
  const auth = getAuth();
  return signInWithPopup(auth, githubProvider)
    .then(mapUserFromFirebaseAuthToUser)
};