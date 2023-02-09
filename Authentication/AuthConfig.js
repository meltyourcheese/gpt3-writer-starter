import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyCHTC4kMkW0HyMAWuNRi67NGJjraH28L0E",
  authDomain: "myc-web-app-ai.firebaseapp.com",
  projectId: "myc-web-app-ai",
  storageBucket: "myc-web-app-ai.appspot.com",
  messagingSenderId: "866860228803",
  appId: "1:866860228803:web:ca736ea43e7a97ea87c276",
  measurementId: "G-LTPLZTTKVN"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig, "MYC-web-app");
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

//Deliver
export {auth , provider};
