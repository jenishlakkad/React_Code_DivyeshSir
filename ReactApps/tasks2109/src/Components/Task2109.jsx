// Date:- 21/09/23
// Day:- Thursday
// Topic:- Task of making a component of amazon 

import React from 'react'
import '../Assets/Css/Task2109.css'

const Task2109 = (pros) => {
  return (
    <>
        <div className="main">
            <p>{pros.title}</p>
            <div className="mainImgDiv">
                <div>
                    <div>
                        <img src={pros.image} alt="" />
                        <small className='dis'>{pros.dis}</small>
                    </div>
                    <div>
                        <img src={pros.image2} alt="" />
                        <small className='dis'>{pros.dis2}</small>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={pros.image3} alt="" />
                        <small className='dis'>{pros.dis3}</small>
                    </div>
                    <div>
                        <img src={pros.image4} alt="" />
                        <small className='dis'>{pros.dis4}</small>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Task2109