import React from 'react'
import "../App.css"


const Location = ({locations= []}) => {
  return (
    <div className='row'>
      
      {locations.map((item, index) => (
      <div key={index} className='col ' >
        <div className='card' style={{minwidth: "200px"}} >
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
  )
}

export default Location;
