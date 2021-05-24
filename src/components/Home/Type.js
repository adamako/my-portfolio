import React, { useContext, useState } from "react";
import Typewriter from "typewriter-effect";
import { Context } from "../wrapper";

function Type() {
  const context = useContext(Context);
  return (
    <Typewriter
      options={{
        strings:
          context.locale === "en"
            ? [
                "Mobile Developer",
                "Web Developer",
                "Learning Blockchain Technology",
                "Open Source Contributor",
              ]
            : [
                "Devéloppeur Mobile",
                "Devéloppeur Web",
                "J'apprends la technologie de la blockchain",
                "Je suis un contributeur des projets libres",
              ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      onInit={""}
    />
  );
}

export default Type;
