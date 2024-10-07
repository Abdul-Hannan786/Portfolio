import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3xusnbSzJ3aP48aXGO4GZkN7OvG-ErNk",
  authDomain: "bytewise-a00d1.firebaseapp.com",
  projectId: "bytewise-a00d1",
  storageBucket: "bytewise-a00d1.appspot.com",
  messagingSenderId: "773236672331",
  appId: "1:773236672331:web:35d4f9f0fb7a79bf85cace",
  measurementId: "G-NMBJTFQHKB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const db = getFirestore(app);
export { db,storage };
