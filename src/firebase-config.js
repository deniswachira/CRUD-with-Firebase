import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "crudwithfirebase-32145.firebaseapp.com",
    projectId: "crudwithfirebase-32145",
    storageBucket: "crudwithfirebase-32145.appspot.com",
    messagingSenderId: "48734389475",
    appId: "1:48734389475:web:c4bd9503f07d4868a531d6",
    measurementId: "G-8Z2H22HF1P"
  };

  const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);