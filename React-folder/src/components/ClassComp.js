import { render } from "@testing-library/react";
import React, { Component } from "react";

class ClassComp extends Component {
    constructor(){
        super();
        console.log("Contructor running first in console")
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log(" componentDidMount running third time in console.......")
    }
  increasefn = () =>{
        console.log("Increasing..........")
       this.setState({
        count:this.state.count+1
       })
    }
    decreasefn = () =>{
        console.log("Decreasing.........")
        this.setState({
            count:this.state.count-1
        })
    }
    componentDidUpdate(){
        console.log("componentDidUpdate..........")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate..........")
        return true;
    }
   
    render() {
        console.log(" Render Running second time in console......")
        return (
            <>
                <div><h1>This is a class Component</h1>
                <p>Hello Satya What are you doing right NOw</p></div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.increasefn}>Increse</button>
                <button onClick={this.decreasefn}>Decrease</button>
            </>
        )
    }

}

export default ClassComp