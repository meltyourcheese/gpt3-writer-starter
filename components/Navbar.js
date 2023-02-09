import React from "react";
import { SSRProvider } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link'
import SignIn from "../Authentication/SignIn";

export default function NavbarTop() {
    return (
       
        <div>
            {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Linkedin Writer</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Linkedin Writer
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="/#">Home</Nav.Link>
                  
                  
                <Nav.Link href="/AboutUs">About Us</Nav.Link>
                  
                </Nav>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/#">Features</Nav.Link>
                  
                  
                <Nav.Link href="/#">How it works?</Nav.Link>
                  
                </Nav>

                <Form className="d-flex">
                  <SignIn/>
                </Form>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>


    )
}