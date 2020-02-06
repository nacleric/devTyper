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

function renderSpans(string) {
  const parentEl = document.getElementById("typeBody");
  for (let i = 0; i < string.length; i++) {
    newSpan(parentEl, "neutralChar", string[i]);
  }
}

function strip(html) {
  // Converts json Obj to a string
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

// Main Component
function TextBody() {
  const [title, setTitle] = useState();
  const [text, setText] = useState(); // will be used later when everything works
  const [link, setLink] = useState();

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
          setLink(json.url);
          renderSpans(mTitle);
          // renderSpans(mText) // TODO: Uncomment this when done
        })
        .catch(err => {
          console.log(err);
          setTitle("You have no internet");
          renderSpans("You have no internet");
        });
    }
    grabData();
  }, []);

  // VanillaJS regular objects [TESTING]
  // TODO: Grab an array of the Element and compare it to textRecord
  const textRecord = event => {
    let childNodes = document.getElementById("typeBody").childNodes;
    let value = event.target.value;
    let index = value.length - 1;
    let errorCount = 0;
    console.log(`Value: ${value}`);
    console.log(`Length: ${index}`);

    if (value[index] === childNodes[index].innerHTML) {
      console.log("correct");
      console.log(`Expected Letter: ${childNodes[index].innerHTML}`);
      childNodes[index].className = "correctChar";
      // console.log(childNodes);
    } else if (value[index] !== childNodes[index].innerHTML) {
      console.log("wrong");
      childNodes[index].className = "wrongChar";
    } else {
      console.log("else");
    }
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
      <a target="_blank" class="article-link" href={link}>
        Title: {title}
      </a>

      <div class="padtop typeBodyStyle" id="typeBody"></div>
      {/* <div id="typeBody">Title: {title}</div> */}
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
