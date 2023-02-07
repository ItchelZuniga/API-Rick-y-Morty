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


  const ListPersonaje = (url) => {
   fetch(url)
    .then ((Response) => Response.json())
    .then((data) => {
      setPersonaje(data.results);
      setInfo(data.info)
    })
    .catch((error)=> console.log(error))
  };

  /**Buqueda */
  const handleChange =e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value)
  }

  const filtrar=(namePersonaje)=>{
    let resultadoBusqueda=personaje.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(namePersonaje.toLowerCase())){
        return elemento;
      } });
      
      setPersonaje(resultadoBusqueda)
   
  }

    const onPrevious = () => {
      ListPersonaje(Info.prev);

    }

    const onNexts = () => {
      ListPersonaje(Info.next);
    }

   useEffect(() => {
         ListPersonaje(initialUrl);


  }, [])

  return (
    <>
<Navbar brand="Rick and Morty App" />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />

<div className="filtroBusqueda">
<label htmlFor="" className='textoBusqueda'>Busqueda de personajes:</label>
            <input type="text" className=' form-control' value={busqueda} placeholder='Ingrese el personaje' onChange={handleChange}/>
</div>
 <div className="container mt-5">
   
 <Personaje personaje={personaje} />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />
 </div>
</>
    );
}

export default ListaPersonajes;
