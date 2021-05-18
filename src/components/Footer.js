import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by kotech</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}  </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/adamako"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/koadamso"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/adamako/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
