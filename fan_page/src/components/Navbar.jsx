import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { HiOutlineHome} from 'react-icons/hi';
import { FaAsterisk} from 'react-icons/fa';
import { GrLocation} from 'react-icons/gr';
import { AiOutlineUser} from 'react-icons/ai';
import { HiOutlineInformationCircle} from 'react-icons/hi';
import logo from "../img/logo.jpeg";

function Navbar() {
    return (
        <>
            <header className="nav-container">  
                <nav className="menu-bar" >
                    <div className="menuImage-container">
                        <img className="menu-image" alt="logo" src={logo}/>
                    </div>
                    <ul className="nav-menu">
                        <li className="menu-item">
                            <HiOutlineHome  className="menu-icon" />
                            <Link to="/" className="link-menu"> Home   </Link>
                        </li>
                        <li className="menu-item">
                            <FaAsterisk  className="menu-icon" />
                            <Link to="/episodios" className="link-menu">  Episodios</Link>
                        </li >
                        <li className="menu-item">
                            <GrLocation   className="menu-icon"/>
                            <Link to="/lugares" className="link-menu">  Lugares</Link>
                        </li>
                        
                    </ul>

                    <ul className="nav-menu">
                    <li className="menu-item">
                        <AiOutlineUser  className="menuIcon-Inferior col-4" />
                        <Link to="/miCuenta" className="link-inferior">Mi Cuenta</Link>
                        </li>
                        <li className="menu-item">
                            <HiOutlineInformationCircle   className="menuIcon-Inferior col-4" />
                        <Link to="/desarrolladoras" className="link-inferior col-4">Desarrolladoras</Link> 
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    );
}

export default Navbar;