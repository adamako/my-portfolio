import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              <FormattedMessage {...messages.programming_is} /> 🤷‍♂️
              <br />
              <br />
              <FormattedMessage {...messages.for_web} />
              <i>
                <b className="purple"> Javascript, PHP </b>
              </i>
              <br />
              <br />
              <FormattedMessage {...messages.role} /> &nbsp;
              <i>
                <b className="purple">React Native, Flutter and Kotlin</b>
              </i>
              <br />
              <br />
              <FormattedMessage {...messages.whenever} />
              <i>
                <b className="purple">
                  {" "}
                  Blockchain <FormattedMessage {...messages.and} />
                  Cloud Computing
                </b>
              </i>
              &nbsp; <FormattedMessage {...messages.like} />
              <i>
                <b className="purple">
                  {" "}
                  Ethereum Blockchain, Google Cloud Platform
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              <FormattedMessage {...messages.feel} />
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adamako"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/koadamso"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adamako/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
