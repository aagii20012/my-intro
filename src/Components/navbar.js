import * as React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const createData = (title, link) => {
  return {
    title: title,
    link: link,
  };
};

const pages = [createData("Нүүр хуудас", "Hello"), createData("Миний давуу ба сул тал", "MySpec"), createData("Миний хобби", "MyHobies")];

function topNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#intro">Миний танилцуулга</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {pages.map((link, index) => (
              <Nav.Link href={"#" + link.link} key={"nabLink" + index}>
                {link.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default topNavbar;
