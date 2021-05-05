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
  debugger;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
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

export const addCollectionAndDocuments = async (
  collectionKey,
  documentsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  documentsToAdd.forEach((collection) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, collection);
  });

  return await batch.commit();
};

export const converCollectionsSnapshotToMap = (collections) => {
  const pipe = (...fns) => (x) => fns.reduce((result, fn) => fn(result), x);
  const mapCollections = (docs) =>
    docs.map((doc) => {
      const { title, items } = doc.data();

      return {
        route: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    });
  const mapCollectionsToObject = (collections) =>
    collections.reduce((result, collection) => {
      result[collection.route] = collection;
      return result;
    }, {});

  return pipe(mapCollections, mapCollectionsToObject)(collections.docs);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      unsubscribeAuth();
      resolve(user);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
