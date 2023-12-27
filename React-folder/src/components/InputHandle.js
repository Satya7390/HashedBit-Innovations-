import React, { Component, useEffect, useState } from "react";
const InputHandle = () => {
    const[name,setName] = useState('');
    const[city,setCity] = useState('');
  const changehandle = (event) =>{
    console.log(event.target.value)
    setName(event.target.value)
    setCity(event.target.value)
  }
  const changehandlefn = (event) =>{
    console.log(event.target.value)
    // setName(event.target.value)
    setCity(event.target.value)
  }
  const submitfn =()=>{
    console.log('name and city is :',name , city)
  }
  // Componentdidmount + Componentdidupdate
  useEffect(() => {
    console.log("UseEffect trigered.....Every Time")
  })
  //componentDid mount
  useEffect(() => {
    console.log(" UseEffect trigered.......Just first time") 
  },[])
  //componentWillmount
  useEffect(() =>{
    return () => {
      console.log(" UseEffect trigered.......on unmount") 

    }
  },[])
  useEffect(() => {
    console.log(" UseEffect trigered.......Just on Name change") 
  },[name])

  // componentdid update on condition
  useEffect(() => {
    console.log(name , city) 
  },[name,city])
   
    return(
        <>
        <h1>Input Handling</h1>
        {/* onBlur is for console after out of the box */}
        Name:<input type="text" onChange={changehandle}/> 
        <br/>
        City:<input type="text" onChange={changehandlefn}/><br/>
        <button onClick={submitfn}>submit</button>
        <div>Submit Value is : {name}&{city}</div>
        </>
    )

}
export default InputHandle;