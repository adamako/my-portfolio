import React, { useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { Context } from "../wrapper";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const context = useContext(Context);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <i className="fas fa-home" />
                <FormattedMessage {...messages.home} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-user" />
                <FormattedMessage {...messages.about} />
              </Nav.Link>
            </Nav.Item>
            {/*<Nav.Item>*/}
            {/*    <Nav.Link*/}
            {/*        as={Link}*/}
            {/*        to="/project"*/}
            {/*        onClick={() => updateExpanded(false)}*/}
            {/*    >*/}
            {/*        <i className="fab fa-codepen"/> Projects*/}
            {/*    </Nav.Link>*/}
            {/*</Nav.Item>*/}
            {/*<Nav.Item>*/}
            {/*  <Nav.Link*/}
            {/*    as={Link}*/}
            {/*    to="/resume"*/}
            {/*    onClick={() => updateExpanded(false)}*/}
            {/*  >*/}
            {/*    <i className="far fa-file-alt" />*/}
            {/*    <FormattedMessage {...messages.resume} />*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}
            <Nav.Item className={"select"}>
              <Nav.Link>
                <select
                  value={context.locale}
                  onChange={context.selectLanguage}
                >
                  <option value={"fr"}>FR</option>
                  <option value={"en"}>EN</option>
                </select>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
