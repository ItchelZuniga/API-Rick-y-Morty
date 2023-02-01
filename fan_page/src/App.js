import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';


function App() {
  const{isAuthenticated}=useAuth0();
  return (
    <div className='contenido-App'>
      {isAuthenticated ? (
     <>
     
     

     <div className="container">
<Profile></Profile> <Logout></Logout>
     </div>
    
     </> 
      ):(
      
      <div className=''> 
        <Login></Login>
        </div>
    
    
      ) }

    </div>

    
  );
}

export default App;