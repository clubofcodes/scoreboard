// React library and hooks API
import React from "react";

// styled-component library for designing components
import styled from "styled-components";

// Global Types
import { StreamersType } from "utils/globalTypes";

// -------------------- Custom Style using styled-component --------------------
const ListGroup = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const StreamerInfo = styled.div``;

const ScoreText = styled.p`
  margin: 2px;
`;

const SmallText = styled.small`
  margin-left: 2px;
  color: #a3a6af;
`;
// -------------------- Custom Style using styled-component --------------------

// Declaring type of props
interface PlayersListProps {
  data: StreamersType[];
}

// JSX function starts from here
const PlayersList = (props: PlayersListProps): JSX.Element => {

  // Destructuring of props
  const { data: streamersList } = props;

  return (
    <ListGroup>
      {streamersList?.map((streamer, index) => (
        <List key={streamer?.userID || index}>
          <StreamerInfo>
            {index + 1}
            {streamer?.picture}
            {streamer?.displayName}
          </StreamerInfo>
          <ScoreText>
            {streamer?.score}
            <SmallText>points</SmallText>
          </ScoreText>
        </List>
      ))}
    </ListGroup>
  );
};

export default PlayersList;
