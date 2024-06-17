import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV3sRaVL3Ey9dJF9jrzVSbcIK1070d45A",
  authDomain: "netflix-gpt-c7ec5.firebaseapp.com",
  projectId: "netflix-gpt-c7ec5",
  storageBucket: "netflix-gpt-c7ec5.appspot.com",
  messagingSenderId: "202856979819",
  appId: "1:202856979819:web:2da651a1494187386c802e",
  measurementId: "G-XL53MFV869"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };