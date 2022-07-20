import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyDpD-eko_K0He1d-LjcUwKTBrfMthwPTrc",  
    authDomain: "techbret-4ffab.firebaseapp.com",  
    databaseURL: "https://techbret-4ffab-default-rtdb.firebaseio.com",  
    projectId: "techbret-4ffab",  
    storageBucket: "techbret-4ffab.appspot.com",  
    messagingSenderId: "224556219958",  
    appId: "1:224556219958:web:fda69e69da620442686297",  
    measurementId: "G-32T1XEKHVN"
  
  };
  


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)






  