import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBOLU0_TzHQORJEm2zraOdu_NH2_-B7CJA",
  authDomain: "proyecto-react-33341.firebaseapp.com",
  projectId: "proyecto-react-33341",
  storageBucket: "proyecto-react-33341.appspot.com",
  messagingSenderId: "604990910018",
  appId: "1:604990910018:web:9c651ab52b163f3346c7db"
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
