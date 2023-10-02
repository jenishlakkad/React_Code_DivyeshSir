import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';


import '../../Assets/Css/Comp_3.css'



const Compo_5 = (props) => {

  return (
    <> 
        <div className="c3MainCard col ">
        <Carousel data-bs-theme="dark">
      <Carousel.Item  style={{height:'300px'}}>
        {/* <img src={props.img} alt="" className='d-block w-100 ' style={{height:'90vh'}} /> */}
        <img src={props.img1} alt="" className='d-block w-100 ' style={{width:'200px'}} />
       <div  className='text-uppercase crausal' >
        {/* <Carousel.Caption >
        <span style={{fontSize:'80px',display:'block', fontWeight:'bolder',color:'gray'} }className='my-0'>big sale</span>
        <p style={{fontSize:'18px', fontWeight:'bolder',color:'#FFFFFF'}}  className=' py-1'>up to 30% off on all products</p>
        <button style={{background:'transparent',border:'2px solid #FFFFFF', padding:'8px'}}>See More</button>
        </Carousel.Caption> */}
        </div>
      </Carousel.Item>

      <Carousel.Item style={{height:'300px'}}>
        <img
          className="d-block w-100"
          // style={{height:'90vh'}}
          style={{width:'200px'}}
          src={props.img2}
          alt="Second slide"
        />
        <div  className='text-uppercase crausal2' >asdfad
        {/* <Carousel.Caption>
        <span style={{fontSize:'80px', fontWeight:'bolder',color:'gray'}} className='my-0'>You are wellcome</span>
        <p style={{color:'#FFFFFF',marginBottom:'0px'}} className=' py-1'>Organic products grown with love</p>
        <button style={{background:'transparent',border:'2px solid #FFFFFF', padding:'8px',marginTop:'30px'}}>See More</button>
   
        </Carousel.Caption> */}
        </div>
      </Carousel.Item>
    </Carousel>

            {/* <div className="c3Cards card h-100">
            <img src={props.img1} className="card-img-top h-50" alt="..."/>
            <div className="card-body pb-0">
                <h5 className="card-title">{props.name1}</h5>
                <p className="card-text">{props.desp1}</p>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary"><button type='button' className='btn border bottom-0 text-black bg-dark-subtle'>Book Now</button></small>
            </div>
            </div> */}
        </div>
         
    </>
  )
}

export default Compo_5



 