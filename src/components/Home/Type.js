import React, { useContext } from "react";
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
                "Cloud DevOps Engineer",
                "Web Developer",
                "Learning Blockchain Technology",
                "Open Source Contributor",
              ]
            : [
                "Devéloppeur Mobile",
                "Ingénieur Cloud DevOPs",
                "Devéloppeur Web",
                "J'apprends la technologie de la blockchain",
                "Je contribue aux projets libres",
              ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
      onInit={""}
    />
  );
}

export default Type;
