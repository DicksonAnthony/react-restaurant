import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
