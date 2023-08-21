import React from 'react'
import '../assets/css/App.css'
import NavBar from "../components/NavBar";
import Categorias from "../components/Categorias";
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className='contenedorPrincipal'>
     
      <NavBar></NavBar>
      <div className="contenedor-centrar">
        <div className="py-3 px-5 form-contenedor">
        <Categorias></Categorias>
        
        </div>
      </div> 
     
      <Footer></Footer>
    </div> 
   
  )
}
