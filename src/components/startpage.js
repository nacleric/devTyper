import React, { useState } from "react";

import TextBody from "./textbody.js";

function StartPage() {
  const [isClicked, setisClicked] = useState(false);

  const renderTypeTest = () => {
    setisClicked(true);
  };

  return (
    <div>
      {isClicked ? (
        <TextBody />
      ) : (
        <div>
          <h1 className="intro">
            Devtyper is a typing test game specifically meant to promote developer content.
            Currently it picks out a recent blogpost from DEV.TO but eventually I'd like to
            allow other devs to submit their content
          </h1>
          <button onClick={renderTypeTest} className="startButton">
            Start
          </button>
        </div>
      )}
    </div>
  );
}

export default StartPage;
