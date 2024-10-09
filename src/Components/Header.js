import React, { Component } from 'react'
import { Container, Navbar, NavbarCollapse, NavbarToggle, Nav, Form } from 'react-bootstrap'
import logo from './logopulse.webp'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import  Головна  from '../Pages/Головна'
import  Галерея  from '../Pages/Галерея'
import  Правила  from '../Pages/Правила'
import  Забронювати  from '../Pages/Забронювати'
import  Контакти  from '../Pages/Контакти'

export default class Header extends Component {
  render() {
    return (
        <>
     <Navbar fixed="top" collapseOnSelect expend="md" bg="dark" variant="dark" >
        <Container>
            <Navbar.Brand href="/">
            <img
            src={logo}
            height="30"
            width="30"
            className="d-inline-block align-top"
            alt="Logo"
             />
            </Navbar.Brand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
               <Nav className="mr-auto"  >
                  <Nav.Link href="/"> Головна </Nav.Link>
                  <Nav.Link href="/gallery"> Галерея </Nav.Link>
                  <Nav.Link href="/rules"> Правила </Nav.Link>
                  <Nav.Link href="/reservation"> Забронювати </Nav.Link>
                  <Nav.Link href="/contacts"> Контакти </Nav.Link>
               </Nav>
               <Form inline>

               </Form>
            </NavbarCollapse>
        </Container>
     </Navbar>
     
     <Router>
      <Routes>
         <Route path="/" element={Головна} />
         <Route path="/gallery" element={Галерея} />
         <Route path="/rules" element={Правила} />
         <Route path="/reservation" element={Забронювати} />
         <Route path="/contacts" element={Контакти} />
      </Routes>
      </Router>
     
     </>
    )
  }
}
