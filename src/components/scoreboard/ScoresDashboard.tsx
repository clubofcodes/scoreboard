// React library and hooks API
import React, { useEffect, useState } from "react";

// styled-component library for designing components
import styled from "styled-components";

// JSON data
import streamersData from "assets/data/streamers.json";

// Utils
import { StreamersType } from "utils/globalTypes";
import { isEmpty } from "utils/constants";

// Custom component to list the steamers
import PlayersList from "components/playerslist/PlayersList";

// -------------------- Custom Style using styled-component --------------------
const DashboardContainer = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 5px 20px;
  `;
// -------------------- Custom Style using styled-component --------------------

// JSX function starts from here
const ScoresDashboard = () => {

  // React state to store streamers data
  const [streamersList, setStreamersList] = useState<StreamersType[]>([]);

  // To set streamersData in react state and to avoid side-effects
  useEffect(() => {
    if (!isEmpty(streamersData)) setStreamersList(streamersData);
  }, [streamersData]);

  return (
    <DashboardContainer>
      <PlayersList data={streamersList} />
    </DashboardContainer>
  );
};

export default ScoresDashboard;
