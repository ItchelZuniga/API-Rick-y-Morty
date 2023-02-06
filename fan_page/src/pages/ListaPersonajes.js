import React, {useEffect , useState} from "react";
import Navbar from "../components/Navbar";
import Personaje from "./Personaje";
import Pagination from "../components/Pagination";

function ListaPersonajes() {

  const [personaje , setPersonaje] = useState([]);
  const [Info , setInfo] = useState({});

 const initialUrl = "https://rickandmortyapi.com/api/character";


  const ListPersonaje = (url) => {
   fetch(url)
    .then ((Response) => Response.json())
    .then((data) => {
      setPersonaje(data.results);
      setInfo(data.info)
    })
    .catch((error)=> console.log(error))
  };

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

 <div className="container mt-5">
   
 <Personaje personaje={personaje} />

 <Pagination prev={Info.prev} next={Info.next}  onPrevious={onPrevious} onNexts={onNexts} />
 </div>
</>
    );
}

export default ListaPersonajes;
