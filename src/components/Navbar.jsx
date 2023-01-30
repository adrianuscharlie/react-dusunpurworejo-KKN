import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <header>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img
              className="d-inline-block align-top"
              src={Logo}
              width={64}
              height={64}
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="kegiatan">Kegiatan</Nav.Link>
              <Nav.Link href="struktur">Struktur Organisasi</Nav.Link>
              <Nav.Link href="kkn">KKN USD</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
