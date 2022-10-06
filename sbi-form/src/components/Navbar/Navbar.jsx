import React from 'react'
import "../SbiForm"
import { Link } from 'react-router-dom'
import "./navbar.css"


const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
      <Link to="/encryptform">Sbi-Encypt-form</Link>
        <Link to="/sbiform">Sbi-form</Link>
        <Link to="/reactsbiform">React-Sbi-form</Link>
        <Link to="/alluser">All-User</Link>
      </div>
    </div>
  )
}

export default Navbar
