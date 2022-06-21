import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


//use .emv files instead
const firebaseConfig = {
    apiKey: "AIzaSyCCn-GMIQPxFxgPljdt9gs-Drguj3Pkucg",
    authDomain: "fir-tut-aa447.firebaseapp.com",
    projectId: "fir-tut-aa447",
    storageBucket: "fir-tut-aa447.appspot.com",
    messagingSenderId: "819252708326",
    appId: "1:819252708326:web:6420efdd55e3fc39c98c27",
    measurementId: "G-NPK6GZMT6P"
  };
  

  const app = initializeApp(firebaseConfig)
   export const db = getFirestore(app)