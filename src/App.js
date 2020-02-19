import React, { useState } from "react";

import StartPage  from "./components/startpage.js";

import "./static/App.css";

function App() {
  return (
    <div className="App">
      <h1 className="logo">DevTyper</h1>
      <StartPage />
    </div>
  );
}

export default App;
