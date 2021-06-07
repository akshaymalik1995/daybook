import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand navbar-light bg-light">
  
  
  
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link className="nav-link" to="">Home</Link>
      </li>
      <li class="nav-item active">
        <Link className="nav-link" to="/add">Add</Link>
      </li>
      
    </ul>
  
</nav>
    )
}
