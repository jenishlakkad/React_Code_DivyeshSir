// Date:- 04/10/23
// Day:- Thursday
// Topic:- Usestate

import React from 'react'

function F_04_10_UseState() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
      
      return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
        </>
  )
}

export default F_04_10_UseState