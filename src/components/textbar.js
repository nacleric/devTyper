import React, { useState, userContext, useEffect } from "react";

import { TextContext, TextContextConsumer } from "./textbody.js";

import "../static/App.css";

function TextBar() {
  // Declare a new state variable, which we'll call "count"
  const [arr, setArr] = useState(0);

  useEffect(() => {
    //do something
  });

  return (
    <div className="text__container">
      <TextContextConsumer>
        {ctx => {
          return <input class="text__bar" type="text" id="message"></input>;
          // return <p> Hello {ctx} </p>;
        }}
      </TextContextConsumer>
    </div>
  );
}

export default TextBar;
