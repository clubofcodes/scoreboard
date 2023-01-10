import React from "react";
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
    </div>
  );
}

export default App;

