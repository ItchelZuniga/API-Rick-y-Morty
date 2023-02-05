import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";


const Location = ({locations= []}) => {
  return (
    <>
    <br />
    <br />
    <br />


    <div className="container col-10 ">
         <div className="row">
      
      {locations.map((item, index) => (
      <div key={index} className='col-4'>
        <div className='card' style={{minwidth: "200px"}}>
          <img src={item.image} alt="" />
          <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            <hr />
            <p >Origin  : {item.origin.name} </p>
            <p >Location :{item.location.name} </p>
            <p >Type :{item.type} </p>
            <p >Dimension :{item.dimension} </p>
           
          
          </div>

        </div>
      <br />
      </div>
      
        ))}
      

    </div>
    </div>
    </>
  )
}

export default Location;
