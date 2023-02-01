import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login(){
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
        <h1 className='Welcome'>Bienvenidos a la fan page de</h1>
        <p className='Welcome-p'>Rick & Morty</p>
    <button class="btn-login btn-outline-dark" onClick={ () => loginWithRedirect() }> Iniciar Sesion</button>
</div>)}

export default Login;