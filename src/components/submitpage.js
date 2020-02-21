import React, { useState } from "react";

import Textbody, { TypingScoreContext } from "./textbody.js";

function SubmitPage() {
  const [playAgain, setPlayAgain] = useState(false);

  const renderGame = () => {
    setPlayAgain(true);
  };

  return (
    <div>
      {playAgain ? (
        <Textbody />
      ) : (
        <React.Fragment>
          <h1 className="submit__title"> Score: </h1>

          <TypingScoreContext.Consumer>
            {context => {
              return (
                <React.Fragment>
                  <div className="submit__container">
                    Words Per Minute:{" "}
                    <span id="wpm" className="submit__results">
                      {context.wpm}{" "}
                    </span>
                  </div>
                  <div className="submit__container">
                    Accuracy:{" "}
                    <span id="accuracy" className="submit__results">
                      {context.accuracy}{" "}
                    </span>
                  </div>
                </React.Fragment>
              );
            }}
          </TypingScoreContext.Consumer>
          <button onClick={renderGame}> Play again </button>
        </React.Fragment>
      )}
    </div>
  );
}

export default SubmitPage;
