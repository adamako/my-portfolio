import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Adama KO </span>
            from <span className="purple"> Ouagadougou, Burkina Faso.</span>

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Games
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Watching movies
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Learning new things
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)", marginTop:50 }}>
            "Tell your heart that the fear of suffering is worse than the suffering itself. And that no heart has ever suffered when it goes in search of its dreams, because every second of the search is a second's encounter with God and with eternity."{" "}
          </p>
          <br/>
          <footer className="blockquote-footer">Paulo Coelho, The Alchemist </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
