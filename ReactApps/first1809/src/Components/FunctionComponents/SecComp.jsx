import React from 'react'
import '../assets/css/FirstComp.css'
import img21 from '../assets/imges/21.jpg'
import img22 from '../assets/imges/22.jpg'
import img23 from '../assets/imges/23.jpg'
import img24 from '../assets/imges/24.jpg'
const SecComp = () => {
  return (
    <>
       <div className='main'>
        <div className='comp'>
                <h3>Keep shopping for</h3>
                <div className='i1'>
                    <div className='imgDiv'>
                        <div className='img'>
                         <img src={img21} alt="" />
                        </div>
                        <p>iQ000 Zx</p>
                    </div>
                    
                    <div className='imgDiv'>
                        <div className='img'>
                         <img src={img22} alt="" />
                        </div>
                        <p>Electric Mac</p>
                    </div>
                    
                </div>
                <div className="i2">
                    <div className='imgDiv'>
                        <div className='img'>
                            <img src={img23} alt="" />
                        </div>
                        <p>Led</p>
                    </div>
                    
                    <div className='imgDiv'>
                        <div className='img'>
                        <img src={img24} alt="" />
                        </div>
                        <p>Bag</p>
                    </div>    
                </div>
            </div>
       </div>
    </>
  )
}

export default SecComp