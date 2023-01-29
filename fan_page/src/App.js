import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Mi_cuenta from './pages/Mi_cuenta';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Bienvenidos a la fan page de</h1>
      <p>Rick & Morty</p>
      </header>
        <Login/>

        <Mi_cuenta />
        <Logout />

    </div>

    
  );
}

export default App;