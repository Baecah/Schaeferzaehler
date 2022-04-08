import React from "react";
import ReactDOM from "react-dom";

import {Counter} from "./components/counter/counter"; // ?

const App = () => {
  return (
    <div>
      <div>Döner</div>
      <Counter/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


// ohne {} => exportiert default 
// mit {} => exportiert genau das, was man will 

// bei mehreren countern => import * as counter 
//                          <fromCounter.Counter />