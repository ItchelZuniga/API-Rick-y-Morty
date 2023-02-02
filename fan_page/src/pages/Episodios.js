import React, {useEffect , useState} from "react";
import { Component } from "react";
import Episodio from '../components/Episodio.jsx';


 
 



export default class Episodios extends Component{
    constructor(props){
        super(props);

       

this.state={
    episodios:[],
}
}

  obtenerEpisodios= async()=> {
     let resultados = await fetch ("https://rickandmortyapi.com/api/episode"); 
     let datos = await resultados.json();
     //console.log(datos.results);

    
    this.setState({
        episodios:[...datos.results]
    })
}

  componentDidMount(){
     this.obtenerEpisodios();

}

render(){
    return ( 
        <>

        
        <div className="row">
            {
        this.state.episodios.map((episodio,indice)=>{
            return <Episodio key={indice} {...episodio} />
        }) 
    }
     </div>
     </>
  )
}
}
