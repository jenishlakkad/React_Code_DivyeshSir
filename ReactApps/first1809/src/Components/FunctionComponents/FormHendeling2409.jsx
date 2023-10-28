

// import React, { Component } from 'react'

// export class FormHendeling2409 extends Component {
//     constructor(){
//         super();

//         this.state = {
//             obj : {},
//             count : 0,
//             array : [],
//             blankObj : {}
//         }
//     }

//     getData = (e) => {
//         if(e.target.type == 'checkbox'){
//             this.state.obj[e.target.name] = this.state.obj[e.target.name] ?? [];
//             this.state.blankObj[e.target.name] = []
//             if(e.target.checked){
//                 this.state.obj[e.target.name] = [...this.state.obj[e.target.name] , e.target.value]
//             }else{
//                 this.state.obj[e.target.name] = this.state.obj[e.target.name].filter(x => x != e.target.value)
//             }
//         }else{
//             this.state.obj[e.target.name] = e.target.value;
//             this.state.blankObj[e.target.name] = ''
//         }
//         // this.setState({obj : {...this.state.obj}})
//         // this.setState({blankObj : {...this.state.blankObj}})
//         this.setState({...this.state})
//     }
//     saveData = () => {
//         if(this.state.obj.id == undefined){
//             this.state.count = this.state.count+1;
//             this.state.obj.id = this.state.count;
//             this.state.array.push(this.state.obj)
//         }else{
//             let index = this.state.array.findIndex(x => x.id == this.state.obj.id)

//             this.state.array.splice(index , 1, this.state.obj)
//         }
//         this.state.obj = {...this.state.blankObj};
//         this.setState({...this.state})
//     }

//     editData = (id) => {
//         let editObj = this.state.array.find(x => x.id == id)
//         this.state.obj = editObj;
//         this.setState({...this.state})
//     }

//     deleteData = (id) => {
//         let index = this.state.array.findIndex(x => x.id == id)
//         this.state.array.splice(index , 1)
//         this.setState({...this.state})
//     }
//   render() {
//     return (
//       <>
//         <form className='w-50 mx-auto my-4 p-4 shadow shadow-lg'>
//             <h3>FORM</h3>
//             <label>First Name</label>
//             <input type="text" className='w-100 my-1 py-1' name="fname" value={this.state.obj.fname ?? ''} onChange={this.getData}/>
//             <label>Email</label>
//             <input type="email" className='w-100 my-1 py-1' name="email" value={this.state.obj.email ?? ''} onChange={this.getData}/>
//             <label>Gender</label> <br />
//             <input type="radio" name="gender" value='Male' onChange={this.getData} checked={this.state.obj.gender == 'Male'} />Male
//             <input type="radio" name="gender" value='Female' onChange={this.getData} checked={this.state.obj.gender == 'Female'}/>Female <br />
//             <label>Agree</label> <br />
//             <input type="radio" name="agree" value='Yes' onChange={this.getData} checked={this.state.obj.agree == 'Yes'} />Yes
//             <input type="radio" name="agree" value='No' onChange={this.getData} checked={this.state.obj.agree == 'No'} />No <br />

//             <label>Hobby</label> <br />
//             <input type="checkbox" name="hobby" value='Reading' onChange={this.getData} checked={this.state.obj.hobby?.includes('Reading') == true}/>Reading
//             <input type="checkbox" name="hobby" value='Travelling' onChange={this.getData} checked={this.state.obj.hobby?.includes('Travelling') == true}/>Travelling
//             <input type="checkbox" name="hobby" value='Sleeping' onChange={this.getData} checked={this.state.obj.hobby?.includes('Sleeping') == true}/>Sleeping
//             <input type="checkbox" name="hobby" value='Playing' onChange={this.getData} checked={this.state.obj.hobby?.includes('Playing') == true}/>Playing <br />

//             <button type='button' className='btn btn-warning mt-3' onClick={this.saveData}>Save</button>
//         </form>

//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>First Name</th>
//                     <th>Email</th>
//                     <th>Gender</th>
//                     <th>Agree</th>
//                     <th>Hobby</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     this.state.array.map((x,i) => {
//                         return <tr key={i}>
//                             <td>{x.id}</td>
//                             <td>{x.fname}</td>
//                             <td>{x.email}</td>
//                             <td>{x.gender}</td>
//                             <td>{x.agree}</td>
//                             <td>{x.hobby?.join(',')}</td>
//                             <td>
//                                 <button className='btn btn-info py-1 me-2' onClick={() => this.editData(x.id)}>EDIT</button>
//                                 <button className='btn btn-danger py-1 me-2' onClick={() => this.deleteData(x.id)}>DELETE</button>
//                             </td>
//                         </tr>
//                     })
//                 }
//             </tbody>
//         </table>
//       </>
//     )
//   }
// }

// export default FormHendeling2409



























import React, { useState } from 'react'

const FormHendeling2409 = () => {
    let [obj, setobj] = useState({});
    let [array, setarray] = useState([]);
    let [count, setCount] = useState(0);
    const [blankObj, setBlankObj] = useState({});
    let id ;



    const getData = (e) => {
        // if(e.target.type == 'radio'){     //if(e.target.type == 'checkbox'){
        //     // e.target.name = e.target.name ?? []
        //     obj[e.target.name] = e.target.value
        //     // console.log('radio');
        // }
                // ##########  ABOVE CODE IS FOR RADIO BUTTON BUT IT AUTOMETACLY ADD WITH ELSE CONDITION BELLOW 
                //             SAME AS FOR TEXT 

         if(e.target.type == 'checkbox'){
            // console.log('checkbox');
            obj[e.target.name] = obj[e.target.name] ?? []
            if(e.target.checked){
                obj[e.target.name].push(e.target.value)
            }
            else{
                // let rdbIndex = obj[e.target.name].forEach((x) => x == e.target.value);
                // obj[e.target.name].splice(rdbIndex, 1)

                obj[e.target.name] = obj[e.target.name].filter((x) => x != e.target.value)
            }
        }
        else{
            obj[e.target.name] = e.target.value
        }
        setobj({...obj})
        console.log(obj);
    }

    const saveData = () =>{
        if(obj.id == undefined){
            count++;
            setCount(count)
            obj.id = count;
            array.push(obj);
        }
        else{
            let index = array.findIndex(x => x.id == obj.id)
            array.splice(index,1,obj)
        }
    }
    const editData = (id) =>{
        let editData = array.find(x => x.id == id)
        obj = editData;
        setobj({...obj})
    }

  return (
    <>
        <form action="">
            <label htmlFor="">First Name:-</label>
            <input onChange={getData} type="text" name="fName" id="fName" />

            <label htmlFor="">Email:-</label>
            <input onChange={getData} type="email" name="email" id="email" />
            <br />
            <label htmlFor="">Gender:-</label>
            <br />
            <label htmlFor="">Male</label>
            <input onChange={getData} type="radio"value='Male' name="gender" id="gender" />
            <label htmlFor="">Female</label>
            <input onChange={getData} type="radio"value='Female' name="gender" id="female" />
            {/* <div>  </div> */}

            <label htmlFor="">Hobbies:-</label>
            <br />
            <label htmlFor="">Dancing</label>
            <input onChange={getData} type="checkbox" value='Dancing' name='Hobbies' id="Dancing" />
            <label htmlFor="">Singing</label>
            <input onChange={getData} type="checkbox" value='Singing' name='Hobbies'  id="Singing" />

            <button type='button' onClick={saveData}> Submit</button>
        </form>

        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fname</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Hobbies</th>
                </tr>
            </thead>
            <tbody>
                {
                     array.map((x,i) => {
                        return <tr key = {i}>
                            <td>{x.id}</td>
                            <td>{x.fNmae}</td>
                            <td>{x.email}</td>
                            <td>{x.gender}</td>
                            <td>{x.Hobbies}</td>
                            <td>
                                <button onClick={() => editData(x.id)}> Edit</button>
                                {/* <button onClick={() => deleteData(x.id)}> Delete</button> */}
                            </td>
                        </tr>
                    })
                }
            </tbody>

        </table>
    </>
  )
}

export default FormHendeling2409