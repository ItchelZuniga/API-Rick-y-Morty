import React from "react";


export default function Episodio (props){
       
        return(
            <div className='col-md-3'>
                <div className="card mt-4">
                <div className="card-header">
                <h3>{props.name}</h3>
                </div>
                <div className="card-body">
                    <h4>Episodio:<b>{props.episode}</b></h4>
                    <p><b>Al aire:</b>{props.air_date}</p>
                    <p><b>Creado:</b>{props.created}</p>
                    <img src={props.characters.image} alt="" />
                     </div>
                </div>    
            </div>
         )
}