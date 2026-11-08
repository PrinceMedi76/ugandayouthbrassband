import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar sm:navbar-expand bg-black fg-2 sticky top-0">
  <div class="container-fluid sticky top-0">
    <a class="navbar-brand" href="#">
        <img src='./images/newlogo.png' alt="Logo" />
    </a>
    <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog class="drawer drawer-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
      <div class="drawer-header">
        <h5 class="drawer-title" id="navbarNavLabel">Menu</h5>
        <button type="button" class="btn2 btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div class="drawer-body d-flex flex-row-reverse">
        <ul class="navbar-nav fs-lg gap-10 bg-warning f">
          <li class="nav-item hover-lift">
            <Link to='/'>
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </Link>
          </li>
          <li class="nav-item hover-lift">
            <Link to='/about'>
              <a class="nav-link" href="#">About</a>
            </Link>
          </li>
          <li class="nav-item hover-lift">
            <Link to=''>
              <a class="nav-link" href="#">Media & Press</a>
            </Link>
          </li>
           <li class="nav-item hover-lift">
            <Link to=''>
              <a class="nav-link" href="#">News & Stories</a>
            </Link>
          </li>
           <li class="nav-item hover-lift">
            <Link to=''>
              <a class="nav-link" href="#">Get Involved</a>
            </Link>
          </li>
        </ul>
      </div>
    </dialog>
  </div>
</nav>
    </div>
  )
}

export default Navbar
