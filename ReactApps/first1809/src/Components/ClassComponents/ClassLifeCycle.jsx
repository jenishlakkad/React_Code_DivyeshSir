import React, { Component } from 'react'

export class ClassLifeCycle extends Component {
    constructor(){
        super()
        this.state ={
            a : 19,
            b : 30
        }
        console.log('constructor');
    }
    static getDerivedStateFromPrps(props,state){
        console.log('getDerivedStateFromPrps' , props, state);
        return{
            a : 60
        }
    }
    componetDidMount(){
        console.log('componetDidMount');
    }
  render() {
    console.log('render');
    return (
      <div>ClassLifeCycle {this.state.a} {this.state.b}</div>
    )
  }
}

export default ClassLifeCycle