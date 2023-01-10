// React library and hooks API
import React, { useEffect, useState } from "react";

// styled-components for desiging components
import styled from "styled-components";

// json data
import streamersData from "assets/data/streamers.json";

// utils
import { StreamersType } from "utils/globalTypes";
import { isEmpty } from "utils/constants";

// Custom Components
import PlayersList from "components/playerslist/PlayersList";

// -------------------- Custom Style using styled-component --------------------
const DashboardContainer = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 5px 20px;
  `;
// -------------------- Custom Style using styled-component --------------------

const ScoresDashboard = () => {

  const [streamersList, setStreamersList] = useState<StreamersType[]>([]);

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
