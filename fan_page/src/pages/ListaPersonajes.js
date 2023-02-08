import React, {useEffect , useState} from "react";
import Navbar from "../components/Navbar";
import Personaje from "../components/Personaje";
import Pagination from "../components/Pagination";
import "../App.css"

function ListaPersonajes() {

  const [personaje , setPersonaje] = useState([]);
  const [Info , setInfo] = useState({});

 const initialUrl = "https://rickandmortyapi.com/api/character";

const [busqueda, setBusqueda] =useState("")
const [filtroStatus, setFiltroStatus] = useState("");


  const ListaPersonajes = (url) => {
   fetch(url)
    .then ((Response) => Response.json())
    .then((data) => {
      setPersonaje(data.results);
      setInfo(data.info)
    })
    .catch((error)=> console.log(error))
  };

  /**Buqueda */
  const buscarPersonajes =(e)=>{
    setBusqueda(e.target.value)

  };
  

  const filtrarStatus=(e)=>{
    setFiltroStatus(e.target.value)
      } ;
     

      
      
   useEffect(()=>{

   },)
  
  

    const onPrevious = () => {
      ListaPersonajes(Info.prev);

    }

    const onNexts = () => {
      ListaPersonajes(Info.next);
    }
    


   useEffect(() => {
         ListaPersonajes(initialUrl);


  }, [])

  return (
    <>
<Navbar brand="Rick and Morty App" />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />

<div className="filtroBusqueda">
<br></br>
            <label htmlFor="">Busqueda: </label>
            <input type="text" onChange={buscarPersonajes}/>
            <select name="" id="" onChange={filtrarStatus}>
                <option value="Alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Desconocido</option>
            </select>​
            <div className="row">
            {
             
                personaje.filter((valor_busqueda) => {
                    return valor_busqueda.name.includes(busqueda)
                
                  
                }).filter((propiedad) => {
                    return propiedad.status.includes(filtroStatus)
                }).map((personaje, indice) => {
                    return <Personaje key={indice} figura={personaje} /> 
                })
            }
            </div>
</div>
 <div className="containerPersonaje mt-5">
   
 <Personaje personaje={personaje} />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />
 </div>
</>
    );
}

export default ListaPersonajes;
