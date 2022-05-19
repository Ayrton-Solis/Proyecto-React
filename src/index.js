import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBz7OprG3QlSlmavFE21mwsPSZ9R7duOiE",
  authDomain: "react-pt2.firebaseapp.com",
  projectId: "react-pt2",
  storageBucket: "react-pt2.appspot.com",
  messagingSenderId: "318634057107",
  appId: "1:318634057107:web:2729a3681ca204c6e49c66",
  measurementId: "G-KQZG0XX2VQ"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
