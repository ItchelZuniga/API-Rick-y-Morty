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
        <div className='card tarjeta' /**style={{width: " 15rem"}}*/>
            <div className='container-imagen-cards'>
              <img className='imagen-cards' src={item.image} alt="" />
            </div>
            
            <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            
            <p className='card-text'><b>Specie: </b>{item.species}</p>
            <p className='card-text'><b>Status: </b>{item.status}</p>
            <p className='card-text'><b>Gender: </b>{item.gender}</p>
            <p className='card-text'><b>Origin: </b>{item.origin.name}</p>         
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
