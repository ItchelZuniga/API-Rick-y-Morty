
import React from "react";
import { Component } from "react";
import Personaje from './components/Personaje.jsx';

export default class Personajes extends Component{
    constructor(props){
        super(props);
    

this.state={
    personajes:[],
}
}

  obtenerPersonajes= async()=> {
     let resultados = await fetch ("https://rickandmortyapi.com/api/character"); 
     let datos = await resultados.json();
     //console.log(datos.results);

    
    this.setState({
        personajes:[...datos.results]
    })
}

  componentDidMount(){
     this.obtenerPersonajes();

}

render(){
    return ( 
        <div className="row">
            {
        this.state.personajes.map((personaje,indice)=>{
            return <Personaje key={indice} {...personaje} />
        })
    }
     </div>
  )
}
}
