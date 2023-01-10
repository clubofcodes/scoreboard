import React from "react";
import { ThemeProvider } from "styled-components";
import { COLORS } from "utils/constants";
import ScoresDashboard from "./components/scoreboard/ScoresDashboard";
import "./styles.css";

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={{ colors: COLORS }}>
            <ScoresDashboard />
        </ThemeProvider>
    );
};

export default App;