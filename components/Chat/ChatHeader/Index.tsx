import React, { useEffect } from 'react';
import { ChatHeaderWrapper } from './styles';
import { withRouter, RouteComponentProps } from 'react-router';
interface MatchParams {
  roomID: string;
}

const ChatHeader: React.SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { roomID } = match.params; // Gets roomId from URL

  // useEffect(() => {
  //   fetch(`http://localhost:3000/playgrounds/${roomID}`);
  // }, [roomID]);

  return <ChatHeaderWrapper>{roomID}</ChatHeaderWrapper>;
};

export default withRouter(ChatHeader);
