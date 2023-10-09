import React from 'react';
import {Link , NavLink} from 'react-router-dom';


export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink   className={({isActive})=>
              isActive ? 'text-success' : 'text-primary'  

          } style={{textDecoration:'none'}} to="/">Home</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink   className={({isActive})=>
            isActive ? 'text-success' : 'text-primary' 
          } style={{textDecoration:'none'}} to="/about">About</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink  className={({isActive})=>
             isActive ? 'text-success' : 'text-primary' 

          } style={{textDecoration:'none'}} to="/contact">Contact</NavLink>
        </li>
         <li className="nav-item">
          <NavLink  className={({isActive})=>
             isActive ? 'text-success' : 'text-primary'  

          } style={{textDecoration:'none'}} to="/github">Github</NavLink>
        </li>
       
       
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}
