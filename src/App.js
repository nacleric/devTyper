import React from "react";
import logo from "./logo.svg";

import Count from "./components/count.js";
import TextBody from "./components/textbody";

import "./static/App.css";

function App() {
  return (
    <div className="App">
      <h1 class="logo"> DevTyper (NotDone) </h1>
      <TextBody />
    </div>
  );
}

export default App;
