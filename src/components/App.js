import React, {Component, useState} from "react";
import { useState } from "react"
import "./../styles/App.css";

function App() {
    const [show,setShow]=useState(false)
    const parafunc=()=>{
   
   setShow(show=>!show)
   
    
  }
  return (
    <div id="main">
      <button id='click' onClick={parafunc} >Button</button>
      {show&&<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
