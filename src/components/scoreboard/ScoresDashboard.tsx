import React from "react";
import styled from "styled-components";

const ScoresDashboard = () => {
  const Box = styled.div`
    color: ${(props) => props.theme.color};
    display: flex;
  `;

  return <Box theme={{ color: "#000" }}>ScoresDashboard</Box>;
};

export default ScoresDashboard;
