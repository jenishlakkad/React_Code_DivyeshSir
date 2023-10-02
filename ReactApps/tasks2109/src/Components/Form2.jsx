import React, { Component } from 'react'

export default class Form2 extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <>
      {
        this.props.array?.map((x,i) => {
          return (<tr key={i}>
              <td>{x.id}</td>
              <td>{x.password}</td>
              <td>{x.email}</td>
              <td>{x.hobbies}</td>
              <td>{x.agree}</td>
              <td>{x.hobby?.join(',')}</td>
              <td>
                  <button className='btn btn-info py-1 me-2' onClick={() => this.props.edit(x.id)}>EDIT</button>
                  <button className='btn btn-danger py-1 me-2' onClick={() => this.props.delete(x.id)}>DELETE</button>
              </td>
          </tr>)
      })
  }
      
        
      </>
    )
  }
}
