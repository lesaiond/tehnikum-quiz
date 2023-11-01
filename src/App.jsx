import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import { Button } from "./components/Button";


const App = () => {
  return (
    <div className="App">
      <Button />
      <Welcome />
    </div>
  );
};

export default App;
