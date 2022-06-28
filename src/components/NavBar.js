import React, { useState } from "react";
import logo from "../images/logo.jpg";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
const NavBar = ({ search }) => {
  return (
    <div>
      <Row>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/" className="logo">
              موقع أفلام
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <FormControl
                  onChange={(e) => search(e.target.value)}
                  type="search"
                  placeholder="بحث"
                  className="me-2"
                />
                <Button variant="outline-success">بحث</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </div>
  );
};

export default NavBar;
