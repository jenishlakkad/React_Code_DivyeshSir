import React from 'react'


let offer = [
    {
        img: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/durango/vlp/desktop/MY23Durango_VLP_Desktop_hellcat.jpg.image.1000.jpg",
        title: "YOUR SHINING ARMOR",
        link: "View"
    },
    {
        img: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/durango/vlp/desktop/MY23Durango_VLP_Desktop_safety2.jpg",
        title: "LIGHT UP THE TRACK",
        link: "View"
    }
]
const Offer = () => {
    return (
        <>
            <div className='container-fluid bg-light py-4'>
                <div className='container py-5'>
                    <div className='row row-cols-1  row-cols-md-2 g-4'>
                        {
                            offer.map((item, i) => {
                                return (
                                    <div className='col position-relative' key={i}>
                                        <div className='card text-center h-100 w-100 border-0'>
                                            <img src={item.img} alt="" style={{ width: "100%", height: "100%" }} />
                                        </div>
                                        <div className='shadow-lg position-absolute p-4 bg-white text-center' style={{top:"5%", left: "5%"}}>
                                            <h5 className='pb-2'>{item.title}</h5>
                                            
                                            <a href="#" style={{color:"saddlebrown"}}>{item.link}</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Offer