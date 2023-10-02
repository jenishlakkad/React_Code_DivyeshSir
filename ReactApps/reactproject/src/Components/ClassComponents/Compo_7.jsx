 import React from 'react'
 import carVideo1 from '../../Assets/Videos/carVideo1.mp4'
 const Compo_7 = () => {

    let arr = [
        {
            video : carVideo1,
            title : 'Car1',
            desc : 'asdfasdfa sdfasdas  fasdf asdfa sdfasd  sdfasdfas',
            foot : 'asdasd'
        },
        {
            video : carVideo1,
            title : 'Car2',
            desc : 'asdfasdfa sdfasdas  fasdf asdfa sdfasd  sdfasdfas',
            foot : 'asdasd'
        },
        {
            video : carVideo1,
            title : 'Car3',
            desc : 'asdfasdfa sdfasdas  fasdf asdfa sdfasd  sdfasdfas',
            foot : 'asdasd'
        }
    ]
   return (
     <>
        <h1>Compo_7</h1>
        <div className="row row-cols-1 bg-black w-100 row-cols-md-3 g-4">
            {
                arr.map((x,i) => {
                    return(
                    <div key={i} className="col"> 
                        <div className="card h-100">
                        <video width="100%" height="240" autoPlay   loop>
                            <source src={x.video} type="video/mp4"/>
                    </video>
                        <div className="card-body">
                            <h5 className="card-title">{x.title}</h5>
                            <p className="card-text">{x.desc}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">{x.foot}</small>
                        </div>
                        </div>
                    </div>
                )
                })
            }
</div>
     </>
   )
 }
 
 export default Compo_7