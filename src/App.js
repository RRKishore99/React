import "./App.css";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
import { useState } from "react";
import React from 'react';
import Alert from "./components/Alert";
// import About from "./components/About";




function App() {

  //Below code is JSX react gives you the flexibilty to write all your code in a single file
  
  const [mode, setMode] = useState('light'); //this will tell the state of the mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg : message,
      type : type
    })

  }

  const toggleMode = () => {
    console.log("Switch for Dark Mode clicked");
    if(mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#6F7378';
      showAlert("Dark Mode enabled Successfully", "success");
    }
    else{ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    //This <> empty tag can add all the html in the js file
    /* <h1>This is the line that i wanted to include</h1>
    <div classNameName="App">
    <header classNameName="App-header">
    <img src={logo} classNameName="App-logo" alt="logo" />
    <p>
          Edit <code>src/App.js</code> and save to reload.
          </p> 
        <a
        classNameName="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React with Raju
        </a>
        </header>
      </div> */
    <>
    {/* <Navbar title="RajuTextUtils" aboutText="About Me"/> */}
    <Navbar title="RajuTextUtils" aboutText="About me" mode= {mode} toggleMode = {toggleMode}/>
    <Alert alert= {alert}/>
      <div className="container">
        <FormText textBoxName = "My Text Box" mode = {mode}/>
      </div>
      {/* <div className="container">
        <About/>
      </div> */}
      

    </>
    
  );
}



export default App;
