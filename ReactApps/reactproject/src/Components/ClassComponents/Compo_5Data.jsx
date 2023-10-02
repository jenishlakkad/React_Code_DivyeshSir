import React from 'react'

import Compo_5 from './Compo_5';

const Compo_5Data = () => {
    
    let arr=[
        {
            name : 'Hyundai',
            img:'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
            img2:'https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=400',
            desp : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            name : 'Bentley',
            img:'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=400',
            img2:'https://images.pexels.com/photos/93652/pexels-photo-93652.jpeg?auto=compress&cs=tinysrgb&w=400',
            desp : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'

        },
        {
            name : 'Shelby',
            img:'https://images.pexels.com/photos/210143/pexels-photo-210143.jpeg?auto=compress&cs=tinysrgb&w=400',
            img2:'https://images.pexels.com/photos/217326/pexels-photo-217326.jpeg?auto=compress&cs=tinysrgb&w=400',
            desp : 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        }
    ]
  return (
    <>
        <h1 className=' py-lg-4  py-2 my-0' id='c3Title'>Races..</h1>
        <div className='c3MainDiv bg-black py-5  d-flex  justify-content-center align-content-center'>
            {/* <div className='row'>    { */}
            <div style={{width: '90%'}} className="row row-cols-1 mx-auto row-cols-lg-3 row-cols-md-2  g-4">    {
            arr.map((x)=>{
                return <Compo_5 img1={x.img} img2 ={x.img2} name1={x.name} desp1={x.desp}/>
            })
        }
        </div>

        </div>

    </>
  )
}

export default Compo_5Data