import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Episodios from "../pages/Episodios";
import Lugares from "../pages/Lugares";
import MiCuenta from "../pages/Micuenta";
import Desarrolladoras from "../pages/Desarrolladoras";

function Profile(){
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
        <div>
            
        

        <div className="container">
            <BrowserRouter>
            <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="/lugares" element={<Lugares />} />
            <Route path="/miCuenta" element={<MiCuenta />} />
            <Route path="/desarrolladoras" element={<Desarrolladoras />} />
          </Routes>
          </BrowserRouter>

        </div>
            <img className="usser-image" src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
        )
    );
}

export default Profile;