import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import TechStack from "./TechStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <TechStack iconName="devicon-symfony-original-wordmark " />
          <TechStack iconName="devicon-kotlin-plain-wordmark" />
          <TechStack iconName="devicon-flutter-plain" />
          <TechStack iconName="devicon-graphql-plain" />
          <TechStack iconName="devicon-nodejs-plain-wordmark " />
          <TechStack iconName="devicon-react-original-wordmark" />
          <TechStack iconName="devicon-mongodb-plain-wordmark" />
          <TechStack iconName="devicon-firebase-plain-wordmark" />
          <TechStack iconName="devicon-git-plain-wordmark" />
          <TechStack iconName="devicon-typescript-plain" />
          <TechStack iconName="devicon-bash-plain" />
          <TechStack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <TechStack iconName="devicon-linux-plain" />
          <TechStack iconName="cib-visual-studio-code" />
          <TechStack iconName="cib-postman" />
          <TechStack iconName="cib-heroku" />
          <TechStack iconName="devicon-photoshop-line" />
          <TechStack iconName="devicon-intellij-plain" />
          <TechStack iconName="devicon-googlecloud-plain" />
          <TechStack iconName="devicon-docker-plain-wordmark"/>
          <TechStack iconName="devicon-trello-plain"/>
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
