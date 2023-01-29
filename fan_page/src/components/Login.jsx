import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login(){
    const { loginWithRedirect } = useAuth0();

    return <button class="btn btn-outline-dark" onClick={ () => loginWithRedirect() }>Iniciar Sesion</button>
}

export default Login;