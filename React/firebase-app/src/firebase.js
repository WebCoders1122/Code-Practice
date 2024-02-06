import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSrke2sp3SU5yG-sbZrw75Wv1eYPLptRM",
  authDomain: "app-a9ab4.firebaseapp.com",
  projectId: "app-a9ab4",
  storageBucket: "app-a9ab4.appspot.com",
  messagingSenderId: "23022362565",
  appId: "1:23022362565:web:5ee23db8c586f25d61f5ac",
  databaseURL: "https://app-a9ab4-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
