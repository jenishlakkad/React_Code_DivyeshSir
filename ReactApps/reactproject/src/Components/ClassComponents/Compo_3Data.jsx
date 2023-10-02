import React from 'react'
import C11 from '../../Assets/Compo_3/11.jpg';
import C12 from '../../Assets/Compo_3/12.jpg';
import C13 from '../../Assets/Compo_3/13.jpg';
import Compo_3 from './Compo_3';

const Compo_3Data = () => {
    
    let arr=[
        {
            name : 'Hyundai',
            img:C11,
            desp : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            name : 'Bentley',
            img:C12,
            desp : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'

        },
        {
            name : 'Shelby',
            img:C13,
            desp : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        }
    ]
  return (
    <>
        <h1 className=' py-lg-4  py-2 my-0' id='c3Title'>Our best Seller</h1>
        <div className='c3MainDiv bg-black py-5'>
            {/* <div className='row'>    { */}
            <div style={{width: '90%'}} className="row row-cols-1 mx-auto row-cols-lg-3  row-cols-md-2  g-4">    {
            arr.map((x)=>{
                return <Compo_3 img1={x.img} name1={x.name} desp1={x.desp}/>
            })
        }
        </div>

        </div>

    </>
  )
}

export default Compo_3Data