
//firebase settings
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDZvOCruHUkoda-dqojJe2sofzhwbAL4zc",
    authDomain: "masterclass-chat-b63ff.firebaseapp.com",
    projectId: "masterclass-chat-b63ff",
    storageBucket: "masterclass-chat-b63ff.appspot.com",
    messagingSenderId: "705131534925",
    appId: "1:705131534925:web:1729af2777464f80501a04"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize firestore (for real-time DB) and Auth 
const db = getFirestore(app);

export { db };