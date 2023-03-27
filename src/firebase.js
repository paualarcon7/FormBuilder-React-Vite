import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    
        apiKey: "AIzaSyAjAwETAIbVVyKXu_vIVdErNbwfvpldOaM",
        authDomain: "form-builder-6f8a6.firebaseapp.com",
        projectId: "form-builder-6f8a6",
        storageBucket: "form-builder-6f8a6.appspot.com",
        messagingSenderId: "323267201404",
        appId: "1:323267201404:web:a5f00ffee940c8c4823cf9",
        measurementId: "G-02PVBWY20Q"
      
}

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {db}