import React from 'react'
import b1 from '../../Assets/Compo_4/1.png'
import b2 from '../../Assets/Compo_4/2.jpeg'
import b3 from '../../Assets/Compo_4/3.jpeg'
import b4 from '../../Assets/Compo_4/4.jpeg'
import b5 from '../../Assets/Compo_4/5.jpeg'
import b6 from '../../Assets/Compo_4/6.png'
import b7 from '../../Assets/Compo_4/7.png'
import b8 from '../../Assets/Compo_4/8.jpeg'

const Compo_4 = () => {
  return (
    <>
        <div className=" w-100 text-center   bg-dark"  >
            <div className=" py-5 w-100 row g-2">
                <div className='row col-12 g-2 p-lg-2 p-5'>   
                    <div className="col-6 col-lg-3">
                        <img src={b1} alt=""  className='rounded rounded-pill shadow ' style={{width:'200px', opacity: '0.5'}}/>
                    </div>
                    <div className="col-6  col-lg-3">
                        <img src={b2} alt="" className='rounded rounded-pill shadow ' style={{width:'200px', opacity: '0.5'}}/>
                    </div>
                    <div className="col-6  col-lg-3">
                        <img src={b3} alt="" className='rounded rounded-pill shadow ' style={{width:'200px', opacity: '0.5'}}/>
                    </div>
                    <div className="col-6  col-lg-3">
                    <img src={b4} alt="" className='rounded rounded-pill shadow ' style={{width:'200px', opacity: '0.5'}}/>
                    
                    </div>
                </div>

                <div className="row col-12 g-2  p-5">
                    <div className="col-6 col-lg-3">
                        <img src={b5} alt="" className='rounded rounded-pill shadow ' style={{width:'200px', opacity: '0.5'}}/>
                    </div>
                    <div className="col-6 col-lg-3">
                        <img src={b6} alt="" className='rounded rounded-pill shadow ' style={{width:'200px', opacity: '0.5'}}/>
                    </div>
                    <div className="col-6 col-lg-3">
                        <img src={b7} alt="" className='rounded rounded-pill shadow ' style={{width:'200px', opacity: '0.5'}}/>
                    </div>
                    <div className="col-6 col-lg-3">
                        <img src={b8} alt="" className='rounded rounded-pill shadow ' style={{width:'200px', opacity: '0.5'}} />
                    </div>
                </div>
          
            </div>
        </div>
    </>
  )
}

export default Compo_4