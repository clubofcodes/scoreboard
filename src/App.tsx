import React from "react";
import ScoresDashboard from "./components/scoreboard/ScoresDashboard";
import "./styles.css";

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
};

const App = ({ message }: AppProps): JSX.Element => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ScoresDashboard />
    </div>
  );
};

export default App;