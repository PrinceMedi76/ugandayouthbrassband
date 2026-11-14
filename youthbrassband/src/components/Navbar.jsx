import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
  useEffect(()=> {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);

    return ()=> {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className={`navme fixed-top ${scrolled ? "bg-white": ""}`}>
        <nav className="navbar sm:navbar-expand bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src='./images/newlogo.png' alt="Logo" />
    </a>
    <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class={`navbar-toggler-icon ${scrolled?"text-black":"text-white"}`} aria-hidden="true"></span>
    </button>
    <dialog class="drawer drawer-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
      <div class="drawer-header">
        <h5 class="drawer-title" id="navbarNavLabel">Menu</h5>
        <button type="button" class="btn2 btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div class="drawer-body d-flex flex-row-reverse">
        <ul class={`navbar-nav fs-lg gap-10 ${scrolled?"fill-gray-950 font-semibold":"fill-gray-950"}`}>
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
          <li class="nav-item hover-lift">
            <Link to='/contactus'>
              <a class="nav-link" href="#">Contact Us</a>
            </Link>
          </li>
          <li class="nav-item hover-lift">
              <button type="button" className="donate-btn">Donate 🤍</button> 
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
