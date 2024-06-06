import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Gallery from "./Page/Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <Gallery />
      </div>
    </Router>
  );
}

export default App;