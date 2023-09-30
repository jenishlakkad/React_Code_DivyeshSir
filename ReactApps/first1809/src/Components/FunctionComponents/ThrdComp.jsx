import React from 'react'
import img31 from '../assets/imges/31.jpg'
import img32 from '../assets/imges/32.jpg'
import img33 from '../assets/imges/33.jpg'
import img34 from '../assets/imges/34.jpg'
import '../assets/css/FirstComp.css'

const ThrdComp = () => {
  return (
    <>
    <div className='main'>
     <div className='comp'>
             <h3>Explore more</h3>
             <div className='i1'>
                    <div className='imgDiv'>
                        <div className='img'>
                         <img src={img31} alt="" />
                        </div>
                        <p>Delx T32</p>
                    </div>
                    
                    <div className='imgDiv'>
                        <div className='img'>
                         <img src={img32} alt="" />
                        </div>
                        <p>Driler Xr2</p>
                    </div>
                    
                </div>
                <div className="i2">
                    <div className='imgDiv'>
                        <div className='img'>
                            <img src={img33} alt="" />
                        </div>
                        <p>Driler Zdi-+</p>
                    </div>
                    
                    <div className='imgDiv'>
                        <div className='img'>
                        <img src={img34} alt="" />
                        </div>
                        <p>Powerbank</p>
                    </div>
                    
                </div>
         </div>
    </div>
 </>
  )
}

export default ThrdComp