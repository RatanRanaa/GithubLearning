import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.Navbar}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div>
        <div className='d-flex'>
          <div className='bg-primary rounded mx-2' onClick={()=>{props.toggle("primary")}} style={{height: "30px", width: "30px"}}></div>
          <div className='bg-danger rounded mx-2' onClick={()=>{props.toggle("danger")}} style={{height: "30px", width: "30px"}}></div>
          <div className='bg-success rounded mx-2' onClick={()=>{props.toggle("success")}} style={{height: "30px", width: "30px"}}></div>
          <div className='bg-warning rounded mx-2' onClick={()=>{props.toggle("warning")}} style={{height: "30px", width: "30px"}}></div>
        </div>
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
        <input className='form-check-input' onClick={props.toggleMode} type="checkbox" />
        <label className='form-check-label' htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav> 
    </>
  )
}

Navbar.propTypes = {
    Navbar: PropTypes.string.isRequired,
    // aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     Navbar: "Title here",
//     aboutText: "About text here"
// }