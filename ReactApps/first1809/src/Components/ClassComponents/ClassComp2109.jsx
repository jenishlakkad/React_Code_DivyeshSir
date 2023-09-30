// Date:- 21/09/23
// Day:- Thursday
// Topic:- Class componenets for first time

import { Component } from 'react'

export class ClassComp2109 extends Component {
    constructor(){
        super()
        this.state = {
            x : 1,
            arr : [1]
        }
        this.changeValue = this.changeValue.bind(this)
        console.log(this.state.x);
    }
    changeValue(){
        this.state.x += 1
        // let a = {x:this.state.x +1}
        // this.state.arr[...this.state.arr, ]

        this.setState({x:this.state.x,arr: [...this.state.arr, this.state.x] }) 
        console.log(this.state.arr)
    }
    render() {
        console.log(this.state.arr);
        return (
            <>
                <h1>22/09/23 Class Comp :</h1>
                <button onClick={this.changeValue}>Click </button>
                <div>{this.state.x}</div>
                <div>{this.state.arr}</div>
            </>
    )
  }
}
export default ClassComp2109