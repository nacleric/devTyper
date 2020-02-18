import React, { useState } from "react";

import { TypingScoreContext } from "./textbody.js";

function SubmitPage() {
  return (
    <div>
      <h1> Score: </h1>
      
      <TypingScoreContext.Consumer>
        {context => {
          return (
            <React.Fragment>
              <div>
                WPM: <span id="wpm"> {context.wpm} </span>
              </div>
              <div> 
                Accuracy: <span id="accuracy"> {context.accuracy} </span>
              </div>
            </React.Fragment>
          )
        }}
      </TypingScoreContext.Consumer>
    </div>
  );
}

export default SubmitPage;
