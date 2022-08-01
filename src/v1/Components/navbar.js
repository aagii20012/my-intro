import * as React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function TopNavbar() {
  const { t } = useTranslation();
  const data = t("navbar");
  const pages = data.link;
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#intro">{data.title}</Navbar.Brand>
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

export default TopNavbar;
