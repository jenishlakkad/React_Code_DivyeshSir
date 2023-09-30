import React from 'react'
import img41 from '../../assets/imges/41.jpg'
import img42 from '../../assets/imges/42.jpg'
import img43 from '../../assets/imges/43.jpg'
import img44 from '../../assets/imges/44.jpg'
import '../../assets/css/FirstComp.css'

const ForthComp = () => {
  return (
    <>
    <div className='main'>
     <div className='comp'>
             <h3>Pick up where you left off</h3>
             <div className='i1'>
                    <div className='imgDiv'>
                        <div className='img'>
                         <img src={img41} alt="" />
                        </div>
                        <p>Jenish Lakkad</p>
                    </div>
                    
                    <div className='imgDiv'>
                        <div className='img'>
                         <img src={img42} alt="" />
                        </div>
                        <p>Cable, Charger</p>
                    </div>
                    
                </div>
                <div className="i2">
                    <div className='imgDiv'>
                        <div className='img'>
                            <img src={img43} alt="" />
                        </div>
                        <p>Case and Cover</p>
                    </div>
                    
                    <div className='imgDiv'>
                        <div className='img'>
                        <img src={img44} alt="" />
                        </div>
                        <p>Powerbank</p>
                    </div>
                    
                </div>
         </div>
    </div>
 </>
  )
}

export default ForthComp