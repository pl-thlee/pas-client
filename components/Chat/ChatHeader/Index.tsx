import React, { useEffect } from 'react';
import { ChatHeaderWrapper } from './styles';
import { withRouter, RouteComponentProps } from 'react-router';

interface MatchParams{
  roomName: string;
}

const ChatHeader: React.SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { roomName } = match.params; // Gets roomId from URL
  
  useEffect(() => {
    fetch(`http://localhost:3000/playgrounds/${ roomName}`);
  }, [ roomName]);

  return <ChatHeaderWrapper>{roomName}</ChatHeaderWrapper>;
};

export default withRouter(ChatHeader);