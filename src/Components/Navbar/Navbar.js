import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Maninder Singh</h1>
        <p>Video Editor</p>
      </div>

      <a href="#contact" className="nav-cta">Get in touch</a>
    </nav>
  )
}

export default Navbar