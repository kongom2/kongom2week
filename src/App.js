import React from "react";

import Main from "./Main";
import Rating from "./Rating";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/rating/:week" exact>
        <Rating />
      </Route>
    </div>
  );
}

export default App;
