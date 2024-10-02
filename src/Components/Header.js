import React, { Component } from 'react'
import { Container, Navbar, NavbarCollapse, NavbarToggle, Nav, Form } from 'react-bootstrap'
import logo from './logopulse.webp'
import { Router } from 'react-router'

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
        <Switch>
            
        </Switch>
     </Router>
     </>
    )
  }
}
