import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {" "}
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/category/Pop">Pop</Nav.Link>
          <Nav.Link href="/category/Rock">Rock</Nav.Link>
          
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
