import React from 'react'
// import logo from '../../assets/images/logo_copy_large.png'
// import a1 from '../../assets/images/app-01_large.webp'
// import a2 from '../../assets/images/app-02_large.webp'
import logo from '../../Assets/Image/Logo.png';


const Footer = () => {
  return (
    <>
        <div className='container-fluid bg-dark'>
                <div className="container p-5  text-white">
                    <div className="row">
                        <div className="col m-2 p-3 ">
                            <img src={logo} alt="" className='w-75' />
                            <p className='mt-4 ms-3 fs-6 w-100'>Copyright © 2022 Team90Degree | Built with Drou by Team90Degree.</p>
                        </div>
                        <div className="col m-2 p-3 g">
                            <h2 className='fs-4'>Informaiton</h2>
                            <p>Product Support</p>
                            <p>Checkout</p>
                            <p>Licence Policy</p>
                            <p>Affliicate</p>
                        </div>
                        <div className="col m-2 p-3 ">
                            <h2 className='fs-4'>Customer Service</h2>
                            <p>Help Center</p>
                            <p>Reedem Voucher</p>
                            <p>Contact Us</p>
                            <p>Policies & Rules</p>
                        </div>
                        <div className="col m-2 p-3">
                            <h2 className='fs-4'>Download Our App</h2>
                            <p className='mt-4'>Download our App and get extra 15% Discount on your first Order..!</p>
                            <div className="row mt-4">
                                <div className="col " >
                                    {/* <img src={a1} className='w-100' alt="" /> */}
                                    <img src='' className='w-100' alt="" />
                                </div>
                                <div className="col " >
                                    {/* <img src={a2} className='w-100' alt="" /> */}
                                    <img src='' className='w-100' alt="" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </>

  )
}

export default Footer