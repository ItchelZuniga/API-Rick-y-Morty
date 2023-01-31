import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';


function App() {
  return (
    <div className='background'>
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