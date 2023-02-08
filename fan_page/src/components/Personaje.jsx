import React from 'react'
import ListaEpisodios from '../pages/ListaEpisodios';
import ListaPersonajes from '../pages/ListaPersonajes';

const Personaje = ({personaje= []}) => {
  return (
    <>
  
    <div className="contenedorPersonaje col-md-10 ">
    <div className= 'PersonajeCont row'>  
      {personaje.map((item, index) => (
      <div key={index} className='col'>
        <div className='card' style={{minwidth: "200px"}}>
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
