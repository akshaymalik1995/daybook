import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link className="nav-link" to="">Home</Link>
      </li>
      <li class="nav-item active">
        <Link className="nav-link" to="/add">Add</Link>
      </li>
      
    </ul>
  </div>
</nav>
    )
}
