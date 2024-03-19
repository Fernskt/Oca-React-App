import React from 'react'
import aguinaldo from '../assets/img/aguinaldo.png'
import faq from '../assets/img/preguntas.png'
import home from '../assets/img/home.png'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
    <div className="footer">
        
        <div className='footer-link'>
          
              <Link className='link' to="/Aguinaldo"><img src={aguinaldo} alt="Aguinaldo" className='img_footer'/>Aguinaldo</Link>

              <Link className='link' to="/Oca-React-App"><img src={home} alt="Home" className='img_footer'/>Home</Link>
           
              <Link className='link' to="/Faq"><img src={faq} alt="FAQ" className='img_footer'/> Guardias</Link>
            
        </div>
       
    </div>
    </>
  )
}
