import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Home from './Home';
import Dash from './components/Dashboard';
import reportWebVitals from './reportWebVitals';
import ClassComp from './components/ClassComp';
import InputHandle from './components/InputHandle';
import Calculator from './Assignment-9/Calculator';
import Home2 from './Home2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Home />
  //    <Dash/>
  //    <App /> 
  //    <ClassComp/>
  // </React.StrictMode>
  // <ClassComp/>
  // <InputHandle/>
  // <Calculator/>
  <Home2/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
