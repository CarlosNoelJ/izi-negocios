import React, { Fragment, useEffect, useState } from 'react'
import '../assets/Styles/components/Header.scss'
import logo from '../assets/Static/logoIziPay.png'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {

  const [showFixed, setShowFixed] = useState(false)
  
  useEffect(function(){
    
    const onScroll = e => {
        const newShowFixed = window.scrollY > 50
        showFixed != newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll',onScroll)

    return () => document.removeEventListener('scroll',onScroll);
  })

  // const showFixed = useHeaderScroll;

  const renderMenu = (scrollChange) => (
    <Navbar collapseOnSelect expand="lg" className={(scrollChange ? 'header-scrolled header fixed-top d-flex align-items-center header-transparent': 'header fixed-top d-flex align-items-center header-transparent')}>
    {/* <header className={(scrollChange ? 'header-scrolled header fixed-top d-flex align-items-center header-transparent': 'header fixed-top d-flex align-items-center header-transparent')}> */}
    <div className="container d-flex  justify-content-between align-items-center">

      {/* <div className="logo">
        <h1><a href="index.html">Izi Negocios</a></h1> 
        <a href="index.html"><img src={logo} alt=""/></a>
      </div> */}
      <Navbar.Brand className="logo">
        <a href="index.html"><img src={logo} alt=""/></a>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar">
          <Nav.Link className="nav-link scrollto active" href="#hero">Home</Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#about">¿Quién soy?</Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#features">Características</Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#pricing">Precios</Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#team">Líder</Nav.Link>
          <Nav.Link className="nav-link scrollto" href="#contact">Contactanos</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* <nav className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">¿Quién soy?</a></li>
          <li><a className="nav-link scrollto" href="#features">Características</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Precios</a></li>
          <li><a className="nav-link scrollto" href="#team">Líder</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contactanos</a></li>
        </ul>
      </nav> */}
    </div>
  {/* </header> */}
  </Navbar>
  )
  
  return (
    <Fragment>
      {renderMenu()}
      {showFixed && renderMenu(true)}
    </Fragment>
  )
}

export default Header;