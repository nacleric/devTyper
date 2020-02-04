import React, { useState, useEffect } from "react";

import "../static/App.css";

// Helper Functions
function newSpan(parent, cssClass, char) {
  /* parent: obj, cssClass: string, char: obj

     Creates each individual span object for each character
  */
  const childEl = document.createElement("span");
  childEl.className = cssClass;
  childEl.innerHTML = char;
  parent.appendChild(childEl);
}

const renderSpans = string => {
  // Todo: In memory
  const parentEl = document.getElementById("titleEl");
  for (let i = 0; i < string.length; i++) {
    newSpan(parentEl, "testStyle", string[i]);
  }
};

// Main Component
function TextBody() {
  const [title, setTitle] = useState();
  const [text, setText] = useState(); // will be used later when everything works

  function strip(html) {
    // Converts json Obj to a string
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  useEffect(() => {
    function grabData() {
      fetch("https://dev.to/api/articles/150402")
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
          renderSpans(mTitle);
        });
    }
    grabData();
  }, []);

  // VanillaJS regular objects [TESTING]
  // TODO: Grab an array of the Element and compare it to textRecord
  const textRecord = event => {
    let value = event.target.value;
    let length = value.length;
    let errorCount = 0;
    console.log(`Value: ${value}`);
    console.log(`Length: ${length}`);
  };

  // React specific code
  // const textRecord = event => {
  //   const value = event.target.value;

  //   console.log(title);
  //   if (value !== title) {
  //     console.log("wrong");
  //   } else {
  //     console.log("correct");
  //   }
  //   console.log(value);
  // };

  return (
    <div>
      <h1> DevTyper </h1>
      <h3>Title: {title}</h3>
      <div id="titleEl"></div>
      {/* <div id="titleEl">Title: {title}</div> */}
      {/* <p>Text: {text}</p> */}
      <input
        onChange={textRecord}
        className="text__bar"
        type="text"
        id="message"
      ></input>
    </div>
  );
}

export default TextBody;
