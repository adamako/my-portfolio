import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import TechStack from "./TechStack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

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
              <FormattedMessage {...messages.know} />
              <strong className="purple">
                <FormattedMessage {...messages.me} />
              </strong>
            </h1>
            <AboutCard />
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
          <FormattedMessage {...messages.professional} />
          <strong className="purple">
            <FormattedMessage {...messages.skill} />
          </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/*<TechStack iconName="devicon-symfony-original-wordmark " />*/}
          <TechStack iconName="devicon-react-original-wordmark" />
          <TechStack iconName="devicon-kotlin-plain-wordmark" />
          <TechStack iconName="devicon-flutter-plain" />
          <TechStack iconName="devicon-graphql-plain" />
          <TechStack iconName="devicon-nodejs-plain-wordmark " />
          <TechStack iconName="devicon-typescript-plain" />
          <TechStack iconName="devicon-terraform-plain" />
          <TechStack iconName="devicon-ansible-plain" />
          <TechStack iconName="devicon-kubernetes-plain" />
          <TechStack iconName="devicon-jenkins-plain" />
          <TechStack iconName="devicon-circleci-plain" />
          <TechStack iconName="devicon-prometheus-original" />
          <TechStack iconName="devicon-amazonwebservices-plain" />
          <TechStack iconName="devicon-mongodb-plain-wordmark" />
          <TechStack iconName="devicon-firebase-plain-wordmark" />
          <TechStack iconName="devicon-postgresql-plain" />
          <TechStack iconName="devicon-git-plain-wordmark" />
          <TechStack iconName="devicon-bash-plain" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">
            <FormattedMessage {...messages.tools} />
          </strong>
          <FormattedMessage {...messages.use} />
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <TechStack iconName="devicon-linux-plain" />
          <TechStack iconName="cib-visual-studio-code" />
          <TechStack iconName="cib-postman" />
          <TechStack iconName="cib-heroku" />
          <TechStack iconName="devicon-photoshop-line" />
          <TechStack iconName="devicon-intellij-plain" />
          <TechStack iconName="devicon-googlecloud-plain" />
          <TechStack iconName="devicon-docker-plain-wordmark" />
          <TechStack iconName="devicon-trello-plain" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
