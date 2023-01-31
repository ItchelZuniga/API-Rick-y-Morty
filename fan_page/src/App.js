import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

import Login from './components/Login';
import Logout from './components/Logout';
import Profile from "./components/Profile";


function App() {
  const {isAuthenticated}=useAuth0();
  return (
    <div className="App">
      <header className="App-header">
      <h1>Bienvenidos a la fan page de</h1>
      <p>Rick & Morty</p>
      </header>
        <Login/>

        <Profile />
        <Logout />

    </div>

    
  );
}

export default App;