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
        
        <div className="row bg-black w-100 py-5  g-4  row-cols-1 row-cols-lg-3  row-cols-md-2">
            {
                arr.map((x,i) => {
                    return(
                    <div key={i} className="col  mx-auto "> 
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