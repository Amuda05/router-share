import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <header>
    <div className='wrapper'>
      <div>
        <Link to={"/"}>
        <img src="/src/media/logo.svg" alt="" />
        </Link>
      </div>
      <div className="header">
        <span> 
           <Link to="/purpose">purpose</Link>
           </span>
      
          <span>
            <Link to="/community">Community</Link></span>
           <span> <Link to={"/career"}>Careers</Link>
           </span>
           <span> <Link to={"/learn"}>Learn</Link></span>
          <span><Link to={"/united"}>United Kingdom</Link></span>
      </div>
    </div>
    </header>
  )
}

export default NavBar