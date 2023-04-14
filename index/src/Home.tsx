import React, { useState } from "react";
import Remote from "remoteApp/App";
import useCountStore from "remoteApp/store";

function Home() {
  // const [count, setCount] = useState(0);
  const { count, setCount } = useCountStore(state => state);

  return (
    <div className="App">
      <div></div>

      <h1>This is the home page</h1>
      <div className="card">
        <button onClick={() => setCount()}>count is {count}</button>
      </div>
      <Remote></Remote>
    </div>
  );
}

export default Home;
