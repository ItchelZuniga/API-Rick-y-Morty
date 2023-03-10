import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";


const Location = ({locations= []}) => {
  return (
    <>
    <br />
    <br />
    <br />

    <div className="" >
    <div className="container col-12" >
         <div className="row">
      
      {locations.map((item, index) => (
      <div key={index} className='col' >
        <div className='card' /**style={{width: " 15rem"}}*/>
          <div className='container-imagen-cards'>
            <img  className="card-img-top" src={item.image} alt="" />
          </div>
          
          <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            
            <p  className="card-text"><b>Origin: </b> {item.origin.name} </p>
            <p  className="card-text"><b>Location: </b>{item.location.name} </p>
            <p className="card-text"><b>Type: </b>{item.type} </p>
          
           
          
          </div>

        </div>
      <br />
      </div>
     

        ))}
      

    </div>
    </div>
    </div>
    </>
  )
}

export default Location;
