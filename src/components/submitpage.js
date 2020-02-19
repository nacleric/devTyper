import React, { useState } from "react";

import { TypingScoreContext } from "./textbody.js";

function SubmitPage() {
  return (
    <div>
      <h1 className="submit__title"> Score: </h1>
      
      <TypingScoreContext.Consumer>
        {context => {
          return (
            <React.Fragment>
              <div className="submit__container">
                Words Per Minute: <span id="wpm" className="submit__results"> {context.wpm} </span>
              </div>
              <div className="submit__container"> 
                Accuracy: <span id="accuracy" className="submit__results"> {context.accuracy} </span>
              </div>
            </React.Fragment>
          )
        }}
      </TypingScoreContext.Consumer>
      <button> Submit Score </button>
    </div>
  );
}

export default SubmitPage;
