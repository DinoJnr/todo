import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const h1 = document.createElement("h1")
//   h1.textContent = "Hello world"
//   h1.className = "header"
//   console.log(h1)

//   const element = <h1 className='header'>THis is JXS</h1>
//   console.log(element)
//       ReactDOM.render(element, document.getElementById("root"))
      