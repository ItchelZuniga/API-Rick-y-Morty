import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


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
                    <p><b>Creado:</b>{new Date (props.created).getFullYear()}</p>
                    <img src={props.characters.image} />
                     </div>
                </div>    
            </div>
         )
}