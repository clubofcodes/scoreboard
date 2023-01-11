// React library and hooks API
import React, { useEffect, useState } from "react";

// styled-component library for designing components
import styled from "styled-components";

// JSON data
import streamersData from "assets/data/streamers.json";

// Utils
import { StreamersTypes } from "utils/globalTypes";
import { isEmpty } from "utils/constants";

// Custom component to list the steamers
import PlayersList from "components/playerslist/PlayersList";

// -------------------- Custom Style using styled-component --------------------
const DashboardContainer = styled.div`
  border-radius: 14px;
  background-color: ${props => props.theme.colors.listBg};
`;
// -------------------- Custom Style using styled-component --------------------

// JSX function starts from here
const ScoresDashboard = () => {

  // Constants
  const updatedList: StreamersTypes[] = []; // to push the randomly updated score streamer with other streamers

  // React state to store streamers data
  const [streamersList, setStreamersList] = useState<StreamersTypes[]>([]);

  // To set streamersList state once JSON file is imported with data
  useEffect(() => {
    if (!isEmpty(streamersData)) setStreamersList(streamersData);
  }, [streamersData]);

  // To set streamersList state after each sec with randomly updated score
  useEffect(() => {

    // To update streamersList data of only randomly player whose score is updated and rest of all as it is.
    // Will update score of 1 player at a time and every sec the same.
    let scoreUpdateTimer = setTimeout(() => {
      if (streamersList.length > 0) {

        const randomIndex = Math.floor(Math.random() * streamersList.length); // to generate random index as per JSON data length

        // Find the random index object from list of players and update score only of that.
        // And push into another array including not updated players data.
        streamersList?.map((item, index) => {
          if (index + 1 === randomIndex) {
            item.score = item.score + index + randomIndex * 100;
          }
          updatedList.push(item);
          return item;
        });

        // Set state with new array
        setStreamersList(updatedList);
      }
    }, 1000);

    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(scoreUpdateTimer);
    };

  }, [streamersList]);

  return (
    <DashboardContainer>
      <PlayersList data={streamersList} />
    </DashboardContainer>
  );
};

export default ScoresDashboard;
