import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ngram from 'Ngram'; 
function Header(){
    return(
        <Router>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Unofficial Homestuck 1.5</Navbar.Brand>
          <Nav className="me-auto"> 
            <Nav.Link path="/ngram" element={<ngram />}>Ngram</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            {/* Define Routes for each component */}
            <Routes>
        <Route path="/ngram" element={<Ngram />} />

      </Routes>
      </Router>
      
    )
}

export default Header;