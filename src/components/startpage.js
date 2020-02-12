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
          <h1 className="intro">DevTyper is a generic typing test thats probably worse, but we
          promote dev content so thats a plus, Click start to... uh start!</h1>
          <button onClick={renderTypeTest} className="startButton">
            Start
          </button>
        </div>
      )}
    </div>
  );
}

export default StartPage;
