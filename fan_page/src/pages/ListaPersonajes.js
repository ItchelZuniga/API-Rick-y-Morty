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

            <select className="form-select form-select-sm mb-5" style={{width: " 15rem"}} aria-label=".form-select-lg example" onChange={filtrarStatus}>
               <option value="Alive">Alive</option>
               <option value="dead">Dead</option>
               <option value="unknown">Unknown</option>
           </select>

           <label htmlFor=""><b>Busqueda:</b>  </label>
           <input className="form-control me-2 " value={busqueda} type="text" onChange={buscarPersonajes}/>
​
           
​
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



/**{ 
  const ListaPersonajes = (url) => {
   fetch(url)
    .then ((Response) => Response.json())
    .then((data) => {
      setPersonaje(data.results);
      setInfo(data.info)
    })
    .catch((error)=> console.log(error))
  };}*/

  /**Buqueda 
  const buscarPersonajes =(e)=>{
    setBusqueda(e.target.value)

  };*/
  
/** 
  const filtrarStatus=(e)=>{
    setFiltroStatus(e.target.value)
      } ;
     


    const onPrevious = () => {
      ListaPersonajes(Info.prev);

    }

    const onNexts = () => {
      ListaPersonajes(Info.next);
    }
    


   useEffect(() => {
         ListaPersonajes(initialUrl);


  }, [])
*/ /**
  return (
    <>


 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />

<div className="filtroBusqueda">
<br></br>
            <label htmlFor="">Busqueda: </label>
            <input type="text" onChange={buscarPersonajes}/>
            <select name="" id="" onChange={filtrarStatus}>
                <option value="Alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Desconocido</option>

            </select>
            ​
            <div className="">
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
 <div className="mt-5">
   
 <Personaje personaje={personaje} />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />
 </div>
</>
    );
}

export default ListaPersonajes; */
