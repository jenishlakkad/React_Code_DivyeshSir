import React, { useState } from 'react'

const F_04_10_UseState = () => {

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
          <button onClick={() => setCar(previousState => {return { ...previousState, color: "blue" }})}>Click</button>
        </>
  )
}

export default F_04_10_UseState