import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3q6WXN6RabpYkKrqJwJMrRUzA2VwXwPg",
    authDomain: "prepify-cb183.firebaseapp.com",
    projectId: "prepify-cb183",
    storageBucket: "prepify-cb183.firebasestorage.app",
    messagingSenderId: "697504325451",
    appId: "1:697504325451:web:98a6a2cdafcbe9d43052ce",
    measurementId: "G-8E7JNB30TK"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);