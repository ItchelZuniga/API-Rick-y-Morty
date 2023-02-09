import React from 'react'
import ListaEpisodios from '../pages/ListaEpisodios';
import ListaPersonajes from '../pages/ListaPersonajes';

const Personaje = ({personaje= []}) => {
  return (
    <>
  
    <div className="container col-12">
    <div className= 'row'>  
      {personaje.map((item, index) => (
      <div key={index} className='col'>
        <div className='card' style={{width: " 15rem"}}>
            <img src={item.image} alt="" />
            <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            <hr />
            <p><b>Specie:</b>{item.species}</p>
            <p><b>Status:</b>{item.status}</p>
            <p><b>Gender:</b>{item.gender}</p>
            <p><b>Origin:</b>{item.origin.name}</p>         
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

export default Personaje;
