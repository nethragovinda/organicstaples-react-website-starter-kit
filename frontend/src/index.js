import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import { AuthProvider } from './AuthContext';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/fonts/gothicb.ttf';
import './assets/fonts/bold/MouseMemoirs-Regular.ttf';
import './assets/fonts/indigo/demo-indigo-sky.otf';
import './assets/fonts/montserrat/Montserrat-Medium.otf';
import './assets/fonts/poppins/Poppins-Medium.otf';
import './assets/fonts/work-sans/WorkSans-Light.ttf';
import './assets/fonts/poppins/Poppins-Medium.otf';

import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <AuthProvider>
     <App />
     </AuthProvider>
   
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
