import React from 'react'
import { Card } from 'react-bootstrap'

let car = [
    {
        img : "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/durango/vlp/desktop/MY23Durango_VLP_Desktop_gallery2.jpg",
        title : "DURANGO SXT RWD"
    },
    {
        img : "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVHd9pivwXGXQpMTV1rUh4g6OQCckPquBhS1U%25jzbTllxA0zmil%253QFmwpDkpd2dTBoM&&pov=fronthero&width=1450&height=546&bkgnd=transparent&resp=png&cut=&x=&y=&w=&h=",
        title : "DURANGO SXT PLUS RWD"
    },
    {
        img : "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVHd9pivwXGXQpMTV1rUp3g6OQCckPquBhS1U%25jzbTllxA0zmij%253QFmwphkpd2dqBoM4ljoZ&&pov=fronthero&width=1450&height=546&bkgnd=transparent&resp=png&cut=&x=&y=&w=&h=",
        title : "DURANGO GT PLUS RWD"
    }
]

const Products = () => {
    return (
        <>
            <div className='container-fluid pb-5' style={{backgroundColor : "rgb(130, 127, 127)"}}>
                <h1 className='new-title py-5 text-white'>Races..</h1>

                <div className="container mx-auto row row-cols-md-2  row-cols-1 g-5 " >
                    {
                        car?.map((item, i) => {
                            return (
                                <div key={i} className=" mx-auto  col">
                                    <Card className='h-100 mx-auto bg-dark border-0'>
                                        <Card.Img variant="top" style={{height : "400px"}} className='new-img' src={item.img} />
                                        <Card.Body>
                                            <Card.Title className='fs-1 fw-bold py-3'> {item.title} </Card.Title>
                                            <h6 className='fw-bold fs-5'>Buy Now</h6>

                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products
