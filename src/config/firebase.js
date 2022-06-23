import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDblXA-kgmU179CScNAWElhhf7ONT1b11U",
  authDomain: "photo-gallery-a20cc.firebaseapp.com",
  projectId: "photo-gallery-a20cc",
  storageBucket: "photo-gallery-a20cc.appspot.com",
  messagingSenderId: "134118439133",
  appId: "1:134118439133:web:3433889afa2a88d29dc334",
  measurementId: "G-0YELW82QQM",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export { db, storage };
