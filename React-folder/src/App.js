// import logo from './logo.svg';
import React from "react";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // we need to for switch pages
import Header from "./components/common/Header";
import Menubar from "./components/common/Menubar";
import Footer from "./components/common/Footer";
import Sidebar from "./components/common/Sidebar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import IplTable from "./components/pages/IplTable";

function App() {
  return (
    <>
    <div className="container">
      <BrowserRouter> 
       <Header/>
       <Menubar/>
   
        
        <div className="row bg-primary bg-opacity-25">
        <Sidebar/>
            <div className="col-9 test">
              <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/ipltable" element={<IplTable/>}/>
              </Routes>
            </div>
        </div>
       <Footer/>
       </BrowserRouter>
    </div>
    
 </>   

  );
}

export default App;

{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Sir !!</h1>
        <p>
          techsatya730@gmail.com
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}