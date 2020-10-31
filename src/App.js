import React from "react";
import CovidTracker from "./components/CovidTracker";
import { ContextProvider } from "./GlobalContext";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <CovidTracker />
      </div>
    </ContextProvider>
  );
}

export default App;
