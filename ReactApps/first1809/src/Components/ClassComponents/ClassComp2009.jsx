// Date:- 20/09/23
// Day:- Wednesday
// Topic:- Class componenets for first time 

import { Component } from "react";

export class ClassComp2009 extends Component{

    // Constructor will be only run one type 
    constructor(){   
        super()
        this.state = {
            x : 1
        }
        this.changeValue = this.changeValue.bind(this)
        console.log(this.state.x);
    }
    
    changeValue(){
        this.state.x += 1
        this.setState({x: this.state.x})
        console.log(this.state.x)
    }
    render() {
        console.log(this.state.x);
        return (
            <>
        <h1>Class Comp:</h1>
        <button onClick={this.changeValue}>Click </button>
        {this.state.x}
      </>
    )
  }
}
