import React from 'react'
import img1 from '../assets/imges/1.jpg'
import img2 from '../assets/imges/2.jpg'
import img3 from '../assets/imges/3.jpg'
import img4 from '../assets/imges/4.jpg'
import '../assets/css/FirstComp.css'
const FirstComp = () => {
  return (
    <>
       <div className='main'>
        <div className='comp'>
                <h3>Top mobile accessories</h3>
                <div className='i1'>
                    <div className='imgDiv'>
                        <div className='img'>
                         <img src={img1} alt="" />
                        </div>
                        <p>Jenish Lakkad</p>
                    </div>
                    
                    <div className='imgDiv'>
                        <div className='img'>
                         <img src={img2} alt="" />
                        </div>
                        <p>Cable, Charger</p>
                    </div>
                    
                </div>
                <div className="i2">
                    <div className='imgDiv'>
                        <div className='img'>
                            <img src={img3} alt="" />
                        </div>
                        <p>Case and Cover</p>
                    </div>
                    
                    <div className='imgDiv'>
                        <div className='img'>
                        <img src={img4} alt="" />
                        </div>
                        <p>Powerbank</p>
                    </div>
                    
                </div>
            </div>
       </div>
    </>
  )
}

export default FirstComp