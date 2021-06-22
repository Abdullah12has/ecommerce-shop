import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAgfkf7gZOUVYsXzKPMD7Kpz5sULOFNVPU",
  authDomain: "algebra-store.firebaseapp.com",
  projectId: "algebra-store",
  storageBucket: "algebra-store.appspot.com",
  messagingSenderId: "952041767623",
  appId: "1:952041767623:web:9092d30d7fc7f32878f4e2",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const p = new firebase.auth.GoogleAuthProvider();
p.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(p);

export default firebase;

export const createUserProfileDoc = async (userAuth, otherData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (e) {
      console.log("error user creation", e.message);
    }
  }
  return userRef;
};
