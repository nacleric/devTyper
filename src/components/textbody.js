import React, { useState, useEffect } from "react";

import TextBar from "./textbar";

import "../static/App.css";

const TextContext = React.createContext({});
const TextContextProvider = TextContext.Provider;
const TextContextConsumer = TextContext.Consumer;

function TextBody() {
  const [title, setTitle] = useState();
  const [text, setText] = useState();

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

          // console.log(json);
          setTitle(strip(json.title));
          // console.log(json.title[1]);
          setText(strip(json.body_html));
        });
    }
    grabData();
  }, []);

  // TODO: Fix This
  const renderSpans = () => {
    const el = document.getElementById("titleEl");
    for (let i = 0; i < title.length; i++) {
      // el.React.createElement("span", { class: "" }, title[i]);
    }
  };

  const textRecord = event => {
    const value = event.target.value;

    console.log(title);
    if (value !== title) {
      console.log("wrong");
    } else {
      console.log("correct");
    }
    console.log(value);
  };

  return (
    <div>
      <h1> DevTyper </h1>
      <h3>{title}</h3>
      <div id="titleEl"></div>
      {/* <div id="titleEl">Title: {title}</div> */}
      {/* <p>Text: {text}</p> */}
      {/* TODO: leave this in memory */}
      {/* <p>Test: {text}</p> */}
      {/* <TextContextProvider value={text}>
        <TextBar />
      </TextContextProvider> */}
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
export { TextContext, TextContextConsumer, TextContextProvider };
