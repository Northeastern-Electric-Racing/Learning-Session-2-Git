import React, { useState } from "react";
import "./App.css";
import nerLogo from "./NER-Logo-App-Icon.svg";
import logo from "./logo.svg";

function App() {
  const [original, setOriginal] = useState(false);
  const [count, setCount] = useState(0);

  const onSwitchClicked = () => {
    setOriginal(!original);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className ="App-header"> Aryan Kale </header>
      <header className="App-header">
        {original ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <img src={nerLogo} className="App-logo" alt="logo" />
        )}
        <p>NER React Learning Session</p>
        <a
          className="App-link"
          href="https://finishlinebyner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Finishline!
        </a>
        <button onClick={onSwitchClicked} className={"App-logo-button"}>
          Switch Logo
        </button>
        <button onClick={incrementCount} className={"App-logo-button"}>
          {count}
        </button>
      </header>
    </div>
  );
}

export default App;
