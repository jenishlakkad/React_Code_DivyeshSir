import React, { Component } from 'react'

export default class ClassFormBack extends Component {
    constructor(){
        super()
    }
  render() {
    return (
      <>
        <tr {...this.props.key1} >
            <td>{this.props.obj.id}</td>
            <td>{this.props.obj.name}</td>
            <td>{this.props.obj.lastName}</td>
            <td>{this.props.obj.gender}</td>
            <td>{this.props.obj.hobbies}</td>
            <td>{this.props.obj.city}</td>
            <td>{this.props.obj.state}</td>
            <td>
                <button type='button' className='btn btn-danger mx-2' onClick={() => this.props.dele()}>Delete</button>
                <button type='button' className='btn btn-success mx-2' onClick={() => this.props.edit()}>Edit</button>
            </td>
        </tr>
      </>
    )
  }
}
