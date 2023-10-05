// Date:- 4/10/23
// Day:- Wednesday
// Topic:- Life Cycle 
//

import React, { Component } from 'react'

export default class C_04_10_LifeCycle1 extends Component {
  constructor(){
    super()
    this.state = {
      number : 0
    }
    console.log('Constructor',1);
  }
  static getDerivedStateFromProps(currentProps,currentState){
    console.log('getDerivedStateFromProps',2);
    return true
  }
  componentDidMount(){
    console.log('componentDidMount',4);
  }

  shouldComponentUpdate(currentProps,currentState) {
    console.log('shouldComponentUpdate',currentState);
    return true
  }

   getSnapshotBeforeUpdate(previousProps,previousState,value){
    console.log('getSnapshotBeforeUpdate',previousState);
    return 'fjfgfhkj'
  }
  componentDidUpdate(previousProps,previousState,value){
    console.log('componentDidUpdate',value);
    return 'afdas'
  }

  changeValue = () =>{
    this.setState({number : this.state.number +1})
    this.props.changeName()
  }
  render() {
    console.log('render',3);
        return (
          <>
          {this.props.name}
          <h1>Working</h1>
          <button onClick={() => this.changeValue()}>Increment</button>
          {/* <button onClick={() => this.props.changeName()}>Increment</button> */}

          {this.state.number}
      </>
    )
  }
}

