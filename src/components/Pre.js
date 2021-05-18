import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}/>;
}

export default Pre;
