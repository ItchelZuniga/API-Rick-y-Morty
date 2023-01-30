import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Episodios from "./pages/Episodios";
import Lugares from "./pages/Lugares";
import Profile from "./components/Profile";
import Desarrolladoras from "./pages/Desarrolladoras";


function App() {
  const {isAuthenticated}=useAuth0();
  return (
    <div className="contenido-App">
      {isAuthenticated?(
        <>
        <Login/><Logout/>
        <div className="container">
          <Routes>
            <Route path='/navbar' element={Navbar}/>
            <Route path='/profile' element={Profile}/>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="lugares" element={<Lugares />} />
            <Route path="miCuenta" element={< miCuenta />} />
            <Route path="desarrolladoras" element={<Desarrolladoras />} />
          </Routes>

        </div>
        <div className='App-header'>
          
        </div>
        </>  
      ):(
        <div className='App-header'>
           
        </div>
      )}
        

    </div>

    
  );
}

export default App;