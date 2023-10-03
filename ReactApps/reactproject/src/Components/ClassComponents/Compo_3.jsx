import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import '../../Assets/Css/Comp_3.css'



const Compo_3 = (props) => {

  return (
    <> 
    {/* <div className="c3MainDiv bg-black py-5 col-4 ">
     <div style={{width: '90%'}} className="row row-cols-1 mx-auto row-cols-lg-3  row-cols-md-2  g-4"> */}
        <div className="c3MainCard col  mx-auto ">
            <div className="c3Cards card h-100">
            <img src={props.img1} className="card-img-top h-50" alt="..."/>
            <div className="card-body pb-0">
                <h5 className="card-title">{props.name1}</h5>
                <p className="card-text">{props.desp1}</p>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary"><button type='button' className='btn border bottom-0 text-black bg-dark-subtle'>Book Now</button></small>
            </div>
            </div>
        </div>
        {/* <div className="c3MainCard col">
            <div className="c3Cards card h-100">
            <img src={C12} className="card-img-top h-50" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bentley</h5>
                <p className="card-text">This card s a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary"><button type='button' className='btn border bottom-0 text-black bg-dark-subtle'>Book Now</button></small>
            </div>
            </div>
        </div>
        <div className="c3MainCard col mx-md-auto">
            <div className="c3Cards card h-100">
            <img src={C13} className="card-img-top h-50" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Shelby </h5>
                <p className="card-text">This is  ow as a  tent. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary"><button type='button' className='btn border bottom-0 text-black bg-dark-subtle'>Book Now</button></small>
            </div>
            </div>
        </div> */}

        {/* </div>
    </div> */}
    </>
  )
}

export default Compo_3



{/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> */}