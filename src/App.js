import React from "react";
import logo from "./logo.svg";

import Count from "./components/count.js";
import TextBody from "./components/textbody";

import "./static/App.css";

function App() {
  return (
    <div className="App">
      <TextBody />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
