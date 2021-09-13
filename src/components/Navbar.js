import { Link } from 'gatsby'
import React from 'react'
import Styled from 'styled-components'

import logo from '../images/logo.png'


// styling here
const StyledNavbar = Styled.nav`
  height : 100px;
  position : sticky;
  top : 0;
  right : 0;
  left : 0;
  z-index:1000;

  li{
    font-weight : bolder ;
    margin-left : 10px;
    margin-right : 10px; 
  }

`

const linkActiveStyle = {
  fontWeight: "bold",
  borderBottom: "3px solid black"
}

const menuBtnstyle = {
  color: "white",
  backgroundColor: "blue"
}


// component here
const Navbar = () => {
  return (
    <StyledNavbar className="navbar navbar-expand-lg navbar-light bg-light" style={{ fontFamily: "Rubik" }}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/">
          <img className="m-0" src={logo} alt="" width="80" height="80" class="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" activeStyle={linkActiveStyle} aria-current="page" to="/">HOME</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" activeStyle={linkActiveStyle} to="#aboutus">ABOUT US</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" activeStyle={linkActiveStyle} to="/gallery">GALLERY</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" activeStyle={linkActiveStyle} to="/contact-us">CONTACT US</Link>
            </li>
            {/* <li className="nav-item" style={menuBtnstyle}>
              <Link className="nav-link" activeStyle={linkActiveStyle} style={menuBtnstyle} to="/menu">MENU</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
