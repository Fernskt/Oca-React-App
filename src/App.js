import './assets/css/App.css'
import NavBar from "./components/NavBar";
import Categorias from "./components/Categorias";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="contenedor-centrar">
        <div className="py-3 px-5 form-contenedor">
        <Categorias></Categorias>
        
        </div>
      </div> 
    </div> //App
  );
}

export default App;
