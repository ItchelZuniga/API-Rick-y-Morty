import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Episodios from "../pages/Episodios";
import Lugares from "../pages/Lugares";
import MiCuenta from "../pages/MiCuenta";
import Desarrolladoras from "../pages/Desarrolladoras";
import "../App.css";


function Profile(){
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (

        <div>

          <div className="">
        
           <BrowserRouter> 
           <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="/lugares" element={<Lugares />} />
            <Route path="/MiCuenta" element={<MiCuenta />} />
            <Route path="/desarrolladoras" element={<Desarrolladoras />} />
          </Routes>
          </BrowserRouter>
        </div>
           
        <img className="usser-imagen" src={user.picture} alt={user.name} />
            <h2 className="usserName">{user.name}</h2>
            <h1 className="perfilName">Bienvenid@</h1>
            <p className="usuario-email">{user.email}</p>
        </div>
        )
    );
}

export default Profile;