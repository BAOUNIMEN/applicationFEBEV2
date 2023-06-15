import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbars'>
        <div div className="entet2">
          
            <ul>
            <li><Link to="/accueil" className="link">Accueil</Link></li>
            
            <li><Link to="/perfum" className="link">Perfum</Link></li>
            
            <li><Link to="/brand" className="link">Brand</Link></li>
            
            <li><Link to="/blog" className="link">Blog</Link></li>
            
            <li><Link to="/contact" className="link">Contact</Link></li> 
            
             <li><Link to="/SigneIn" className="link">SignIn</Link></li>
            
            <li><Link to="/" className="link">SignUP</Link></li>
            
          </ul>
          
        </div>
    </div>
  )
}

export default Nav