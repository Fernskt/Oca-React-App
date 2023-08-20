import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
    <div className="footer">
        
        <div className='footer-link'>
          
              <Link className='link' to="/Aguinaldo">Aguinaldo</Link>

              <Link className='link' to="/">Home</Link>
           
              <Link className='link' to="/Faq"> FAQ</Link>
            
        </div>
       
    </div>
    </>
  )
}
