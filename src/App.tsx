import React from "react";
import { spawn, Thread, Worker } from "threads";
import logo from "./logo.svg";
import "./App.css";

async function runWorker() {
  const add = await spawn(new Worker("./workers/add"));
  const sum = await add(2, 3);

  console.log(`2 + 3 = ${sum}`);

  await Thread.terminate(add);
}

function App() {
  runWorker().catch(console.error);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
