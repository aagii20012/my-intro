import * as React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { useState, useMemo } from "react";
import { BsGlobe } from "react-icons/bs";
import { MDBIcon } from "mdb-react-ui-kit";

const languages = [
  {
    code: "mn",
    name: "Монгол",
    flag: "mn",
  },
  {
    code: "en",
    name: "English",
    flag: "gb uk",
  },
];
function TopNavbar() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t, i18n } = useTranslation();
  const [pages, setPage] = useState([]);
  const [title, setTitle] = useState();

  useMemo(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    const data = t("navbar");
    let link = data.link;
    setTitle(data.title);
    setPage(link);
  }, [currentLanguage, t]);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#intro">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {pages.map((link, index) => (
              <Nav.Link href={"#" + link.link} key={"nabLink" + index}>
                {link.title}
              </Nav.Link>
            ))}
            <NavDropdown title={<MDBIcon fas icon="globe" />} id="basic-nav-dropdown">
              {languages.map(({ flag, name, code }) => (
                <NavDropdown.Item
                  className={{ disabled: currentLanguageCode === code }}
                  key={"flag" + code}
                  onClick={() => i18n.changeLanguage(code)}>
                  {<MDBIcon flag={flag} />}
                  {name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
