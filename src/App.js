import React from "react";
import logo from "./logo.svg";

import Count from "./components/count.js";
import TextBody from "./components/textbody.js";
import StartPage  from "./components/startpage.js";

import "./static/App.css";

function App() {
  return (
    <div className="App">
      <h1 className="logo"> DevTyper (NotDone) </h1>
      <StartPage />
    </div>
  );
}

export default App;
