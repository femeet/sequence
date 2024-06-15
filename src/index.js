import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const root = ReactDOM.createRoot(document.getElementById('root'));



// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJYu_Bm1eZgY5sm5a9lHLimckyJH19QlY",
    authDomain: "ssui-final-project.firebaseapp.com",
    projectId: "ssui-final-project",
    storageBucket: "ssui-final-project.appspot.com",
    messagingSenderId: "604660582335",
    appId: "1:604660582335:web:8d0052258ceeedd538830a",
    measurementId: "G-G5SSPKY9KB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const analytics = getAnalytics(app);

root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default db;
