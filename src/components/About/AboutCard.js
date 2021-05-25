import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <FormattedMessage {...messages.me} />
            <span className="purple">Adama KO </span>
            <FormattedMessage {...messages.from} />
            <span className="purple"> Ouagadougou, Burkina Faso.</span>
            <br />
            <br />
            <FormattedMessage {...messages.apart} />
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right" />
              <FormattedMessage {...messages.play} />
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right" />
              <FormattedMessage {...messages.watch} />
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right" />
              <FormattedMessage {...messages.learn} />
            </li>
          </ul>

          <p
            style={{
              marginBlockEnd: 0,
              color: "rgb(155 126 172)",
              marginTop: 50,
            }}
          >
            <FormattedMessage {...messages.citation} />
          </p>
          <br />
          <footer className="blockquote-footer">
            Paulo Coelho, The Alchemist
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
