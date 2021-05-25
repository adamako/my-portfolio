import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormattedMessage, useIntl } from "react-intl";
import messages from "./messages";

function Resume() {
  const intl = useIntl();

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">
              <FormattedMessage {...messages.experience} />
            </h3>
            <ResumeContent
              title={intl.formatMessage({
                id: "app.components.resume.fields.exp_title1",
              })}
              date={intl.formatMessage({
                id: "app.components.resume.fields.period_1",
              })}
              content={[
                intl.formatMessage({
                  id: "app.components.resume.fields.exp_1",
                }),
                intl.formatMessage({
                  id: "app.components.resume.fields.exp_2",
                }),
                intl.formatMessage({
                  id: "app.components.resume.fields.exp_3",
                }),
              ]}
            />

            <ResumeContent
              title={intl.formatMessage({
                id: "app.components.resume.fields.exp_title2",
              })}
              date={intl.formatMessage({
                id: "app.components.resume.fields.period_2",
              })}
              content={[
                intl.formatMessage({
                  id: "app.components.resume.fields.exp_4",
                }),
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <ResumeContent
              title={"Licence"}
              date={"2017-2020"}
              content={[
                intl.formatMessage({
                  id: "app.components.resume.fields.edu_1",
                }),
              ]}
            />
            <h3 className="resume-title">
              <FormattedMessage {...messages.learn} />
            </h3>
            <ResumeContent
              title={intl.formatMessage({
                id: "app.components.resume.fields.learn_title1",
              })}
              content={[
                intl.formatMessage({
                  id: "app.components.resume.fields.learn_1",
                }),
              ]}
            />
            <ResumeContent
              title="Docker"
              content={[
                intl.formatMessage({
                  id: "app.components.resume.fields.learn_2",
                }),
              ]}
            />
            <ResumeContent
              title="GraphQL"
              content={[
                intl.formatMessage({
                  id: "app.components.resume.fields.learn_3",
                }),
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
