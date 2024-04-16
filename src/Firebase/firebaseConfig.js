
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfUsRgstzYI6J8wkU_Bm-xCrsqEcZhST8",
  authDomain: "glasses-authentication-b39e1.firebaseapp.com",
  projectId: "glasses-authentication-b39e1",
  storageBucket: "glasses-authentication-b39e1.appspot.com",
  messagingSenderId: "206990544562",
  appId: "1:206990544562:web:8bcb2ed547b969b5d603ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;