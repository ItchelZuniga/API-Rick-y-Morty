import React from "react";


export default function Personaje (props){
       
        return(
            <div className='col-md-3'>
                <div className="card mt-4">
                <div className="card-header">
                <img src={props.image} alt="personajes rick y morty" className="card-img-top"/>
                </div>
                <div className="card-body">
                    <h4><b>{props.name}</b></h4>
                    <p><b>Especie:</b>{props.species}</p>
                    <p><b>Estado:</b>{props.status}</p>
                    <p><b>Genero:</b>{props.gender}</p>
                    <p><b>Origen:</b>{props.origin.name}</p>        
                     </div>
                </div>    
            </div>
         )
}
