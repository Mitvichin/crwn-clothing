import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBWsJMGVGSZQHmuR1FDzHmQNLLshCOCoH4",
  authDomain: "crwn-db-e2396.firebaseapp.com",
  projectId: "crwn-db-e2396",
  storageBucket: "crwn-db-e2396.appspot.com",
  messagingSenderId: "836524544954",
  appId: "1:836524544954:web:c00a8211fb1757118e4383",
  measurementId: "G-YH9K7JE2K5",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const creationDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creationDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error happened during account creation!", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
