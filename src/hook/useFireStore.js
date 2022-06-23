import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const useFireStore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const queryImages = async () => {
      const documents = [];
      const querySnapShot = await getDocs(collection(db, collectionName));
      querySnapShot.forEach((doc) => {
        documents.push({ ...doc.data() });
      });

      setDocs(documents);
    };
    queryImages();
  }, [collectionName]);

  return { docs };
};

export default useFireStore;
