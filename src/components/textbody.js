import React, { useState, useEffect } from "react";

import SubmitPage from "./submitpage.js";

import "../static/App.css";

// Helper Functions
function newSpan(parent, cssClass, char) {
  /* parent: obj, cssClass: string, char: obj

     Creates each individual span object for each character
  */
  let childEl = document.createElement("span");
  childEl.className = cssClass;
  childEl.innerHTML = char;
  parent.appendChild(childEl);
}

function renderSpans(string) {
  let parentEl = document.getElementById("typeBody");
  for (let i = 0; i < string.length; i++) {
    newSpan(parentEl, "neutralChar", string[i]);
  }
}

function strip(html) {
  // Converts json Obj to a string
  let doc = new DOMParser().parseFromString(html, "text/html");
  let str = doc.body.textContent || "";
  str = str.replace(/\s+/g, " "); // Removes Extra Spaces
  return str.trim();
}

function isLocked(lock) {
  /* lock: bool

     Controls when user is unable to type in the "typeHere" DOM element
  */
  let typerEl = document.getElementById("typeHere");
  if (lock == true) {
    typerEl.readOnly = true;
    typerEl.value = "";
    typerEl.placeholder = "Locked";
  } else {
    typerEl.readOnly = false;
    typerEl.placeholder = "";
  }
}

function calculateResults() {
  // returns obj
  let childNodesArr = document.getElementById("typeBody").childNodes;
  let errors = 0;
  let correct = 0;
  let total = 0;
  for (let i = 0; i < childNodesArr.length; i++) {
    if (childNodesArr[i].className === "wrongChar") {
      errors += 1;
      total += 1;
    } else if (childNodesArr[i].className === "correctChar") {
      correct += 1;
      total += 1;
    }
  }
  let wpm = correct / 4.7;
  let accuracy = correct / total;
  return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2) };
}

function randomDevPost() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let randomNumber = getRandomInt(0, 30);
  let url = "https://dev.to/api/articles/";
  fetch(url)
    .then(res => {
      // Response is an Array
      return res.json();
    })
    .then(jsonArr => {
      console.log(jsonArr[randomNumber].id);
      sessionStorage.setItem("id", jsonArr[randomNumber].id);
    });
  let id = sessionStorage.getItem("id");
  return url + id;
}

const TypingScoreContext = React.createContext({});

// Main Component
function TextBody() {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [link, setLink] = useState();
  const [score, setScore] = useState();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    function grabData() {
      fetch(randomDevPost())
        .then(res => {
          // Turns the response object to json
          return res.json();
        })
        .then(json => {
          // Turns JSON objects into strings
          const mTitle = strip(json.title);
          const mText = strip(json.body_html);
          setTitle(mTitle);
          setText(mText);
          setLink(json.url);
          renderSpans(mText);
        })
        .catch(err => {
          console.log(err);
          setTitle("You have no internet");
          renderSpans("You have no internet");
        });
    }
    grabData();
  }, []);

  const textRecord = event => {
    let childNodes = document.getElementById("typeBody").childNodes;
    let value = event.target.value;
    let index = value.length - 1;
    let errorCount = 0;
    //console.log(`Value: ${value}`);
    //console.log(`Length: ${index}`);
    //console.log(`Expected Letter: ${childNodes[index].innerHTML}`);

    if (value[index] === childNodes[index].innerHTML) {
      console.log("correct");
      childNodes[index].className = "correctChar";
    } else if (value[index] !== childNodes[index].innerHTML) {
      console.log("wrong");
      childNodes[index].className = "wrongChar";
    } else {
      // TODO: placeholder currently will eventually render deletes
      console.log("in the else block");
    }
  };

  // Technically the main game Loop
  function startTimer() {
    let timerEl = document.getElementById("timer");
    isLocked(false);
    // TODO: Change this back to 60 when done
    let timeLeft = 60;
    let countdown = setInterval(() => {
      if (timeLeft != 0) {
        timeLeft -= 1;
        timerEl.innerHTML = timeLeft;
      } else {
        setScore(calculateResults());

        clearInterval(countdown);
        isLocked(true);
        // renders the next component
        setSubmit(true);
        localStorage.setItem(title, link)
      }
    }, 1000);
  }

  return (
    <div>
      {submit ? (
        <TypingScoreContext.Provider value={score}>
          <SubmitPage />
        </TypingScoreContext.Provider>
      ) : (
        <React.Fragment>
          <a target="_blank" className="article-link" href={link}>
            Title: {title}
          </a>
          <div className="typeBodyStyle pad" id="typeBody"></div>
          <input
            className="typeHereStyle"
            onChange={textRecord}
            type="text"
            id="typeHere"
            readOnly="true"
            placeholder="Locked"
          ></input>
          <button onClick={startTimer}>Start Test</button>

          <div className="pad">
            <span className="timer-score-label">Timer:</span>
            <span id="timer">60</span>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default TextBody;
export { TypingScoreContext };
