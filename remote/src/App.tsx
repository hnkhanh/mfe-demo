import { useState } from "react";
import reactLogo from "./img/react.svg";
// import viteLogo from "vite.svg";
import "./App.css";
import Button from "./Button";

function App() {
  const [bit] = useState(0);

  return (
    <div className="App border-red">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Remote About from 5003</h1>
      {bit}
      <Button></Button>
    </div>
  );
}

export default App;
