import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase/app';
import 'firebase/analytics';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBAWI13rs2v1R9QPt5ENq5VyVSd0Ct7COs",
  authDomain: "devicerdotspace.firebaseapp.com",
  databaseURL: "https://devicerdotspace.firebaseio.com",
  projectId: "devicerdotspace",
  storageBucket: "devicerdotspace.appspot.com",
  messagingSenderId: "1051201402757",
  appId: "1:1051201402757:web:b31d7d804622b11287b6ec",
  measurementId: "G-71824GLK6X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);