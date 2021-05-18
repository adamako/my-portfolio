import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Ko-Adama-EN.pdf";

function Resume() {

    return (
        <Container fluid className="resume-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <i className="fas fa-download">&nbsp;</i>Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Experience</h3>
                        <Resumecontent
                            title="Web and Mobile developer"
                            date="November 2020, at Declic Africa"
                            content={[
                                "Web and Mobile developer at Declic Africa",
                                "I developed mostly cross-platform app with technologies like flutter, react-native",
                                "In Web development I use technologies like vueJs, nodeJs, symfony"
                            ]}
                        />

                      <Resumecontent
                          title="Internship as mobile/web developer"
                          date="Mars 2020, at Declic Africa"
                          content={[
                            "Build mobile applications with flutter. The dashboard was built in JavaScript, vueJs. We use a\n" +
                            "NoSQL database (firestore) and other firebase technologies.",

                          ]}
                      />
                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <Resumecontent
                          title={"Licence"}
                          date={"2017-2020"}
                          content={[
                            "Bachelor of Information Technology at New Dawn University, Burkina Faso 🇧🇫",
                          ]}
                        />
                      <h3 className="resume-title">Learning</h3>
                      <Resumecontent
                          title="Ethereum Blockchain"
                          content={[
                            "I'm learning to build smarts contracts with Ethereum's Blockchain",
                          ]}
                      />
                      <Resumecontent
                          title="Docker"
                          content={[
                            "I'm learning application containerisation with docker",
                          ]}
                      />
                      <Resumecontent
                          title="GraphQL"
                          content={[
                            "I'm learning to build API with GraphQL and nodeJs",
                          ]}
                      />

                    </Col>
                </Row>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button variant="primary" href={pdf} target="_blank">
                        <i className="fas fa-download">&nbsp;</i>Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
