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
          <h1>startPage component</h1>
          <button onClick={renderTypeTest} className="startButton">
            Click Me!
          </button>
        </div>
      )}
    </div>
  );
}

export default StartPage;
