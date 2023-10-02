 
import React, { Component, useState } from 'react'
// import ExampleCarouselImage from '../../Assets/Image/Logo.png';
import Carousel from 'react-bootstrap/Carousel';
import Slider2 from '../../Assets/Image/Car3.jpg';
import Slider1 from '../../Assets/Image/Car2.jpg';

const Carousel_2 = () => {
//     const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };
  return (
    <>
       <Carousel data-bs-theme="dark">
      <Carousel.Item  style={{height:'550px'}}>
        <img src={Slider2} alt="" className='d-block w-100 ' style={{height:'90vh'}} />
       <div  className='text-uppercase crausal' >
        <Carousel.Caption >
        {/* <h3 style={{color:'#FFFFFF',marginBottom:'0px'}} className=''>fruit organic food</h3> */}
        <span style={{fontSize:'80px',display:'block', fontWeight:'bolder',color:'gray'} }className='my-0'>big sale</span>
        <p style={{fontSize:'18px', fontWeight:'bolder',color:'#FFFFFF'}}  className=' py-1'>up to 30% off on all products</p>
        <button style={{background:'transparent',border:'2px solid #FFFFFF', padding:'8px'}}>See More</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item style={{height:'550px'}}>
        <img
          className="d-block w-100"
          style={{height:'90vh'}}
          src={Slider1}
          alt="Second slide"
        />
        <div  className='text-uppercase crausal2' >
        <Carousel.Caption>
        <span style={{fontSize:'80px', fontWeight:'bolder',color:'gray'}} className='my-0'>You are wellcome</span>
        <p style={{color:'#FFFFFF',marginBottom:'0px'}} className=' py-1'>Organic products grown with love</p>
        <button style={{background:'transparent',border:'2px solid #FFFFFF', padding:'8px',marginTop:'30px'}}>See More</button>
   
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>

    </>
  )
}

export default Carousel_2