import React, {useEffect , useState} from "react";
import Navbar from "../components/Navbar";
import Personaje from "../components/Personaje";
import Pagination from "../components/Pagination";
import { BiSearch} from 'react-icons/bi';
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
   setBusqueda(e.target.value);
   
 }

 const filtrarStatus=(e)=>{
   setFiltroStatus(e.target.value);
   setBusqueda("");
     } 
     
  
  useEffect(()=>{

  },)
 
 

   const onPrevious = () => {
     ListaPersonajes(Info.prev);

   }

   const onNexts = () => {
     ListaPersonajes(Info.next);
   }
  
  let result=[];

  if(busqueda){
   result = personaje.filter((dato) =>
   dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
   )
  
  }else if(filtroStatus ){
   result = personaje.filter((dato) =>
   dato.status.toLowerCase().includes(filtroStatus.toLocaleLowerCase())
   )
  
  }else{
   result = personaje;
  }


  useEffect(() => {
        ListaPersonajes(initialUrl);


 }, [])



 return (
   <>


<Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />

<div className="filtroBusqueda">
<br></br>
<div className=" d-flex filtroNombre col-12">
  
  <div className="col-sm-10">
    
   <input  className="form-control  " value={busqueda} type="text" onChange={buscarPersonajes} placeholder="   Buscar personajes "   />
   
   </div>
   <div className=" col-10 IconCont" style={{width: " 15rem"}} ><BiSearch className="  searchIcon" /> </div>
   </div>
   <br></br>
   
   <div className="filtroCategorias  col-12">
    <h5 className="filtroText">Filtro por estado</h5>
            <select className="form-select form-select-sm mb-6 " style={{width: " 15rem"}} aria-label=".form-select-lg example" onChange={filtrarStatus}>
               <option className="filtroIem" value="Alive">Alive</option>
               <option className="filtroIem"value="dead">Dead</option>
               <option className="filtroIem" value="unknown">Unknown</option>
           </select>
</div>
          
           <div className='row'>
        
           </div>
</div>
<div className="container mt-5">
  
<Personaje personaje={result} />

<Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />
</div>
</>
   );
}

export default ListaPersonajes;




