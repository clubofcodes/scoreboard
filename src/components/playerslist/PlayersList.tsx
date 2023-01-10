// React library and hooks API
import React from "react";

// styled-component library for designing components
import styled from "styled-components";
import { GRAY_IMG_URL } from "utils/constants";

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
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 15px 20px;
  &:hover{
    background-color: #4a69dd;
    color: white;
    &:first-child {
      border-radius: 12px 12px 0 0;
    }
    &:last-child {
      border-radius: 0 0 12px 12px;
    }
  }
  &:last-child{
    border-bottom: 1px solid transparent;
  }
`;

const StreamerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  background-color: #83b0f4;

  &#u-1 {
    background-color: #f53b3e;
  }
  &#u-2 {
    background-color: #ff793e;
  }
  &#u-3 {
    background-color: #ffa132;
  }
`;

const IMG = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 10px;
  border: 3px solid ${props => props.theme.colors.white};
  border-radius:50%;
  cursor:pointer;
`;

const ScoreText = styled.p`
  margin: 0;
  font-weight: 600;
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
            <Badge id={`u-${index + 1}`}>{index + 1}</Badge>
            <IMG src={streamer.picture || GRAY_IMG_URL} />
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
