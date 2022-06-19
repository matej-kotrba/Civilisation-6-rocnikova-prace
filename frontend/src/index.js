import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// require('dotenv').config()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onscroll = () => {
  const button = document.getElementById('back-to-top')
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    button.classList.add('active')
  }
  else {
    button.classList.remove('active')
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
