import React, { useState } from "react";
import Remote from "remoteApp/App";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div></div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
      <Remote></Remote>
    </div>
  );
}

export default Home;
