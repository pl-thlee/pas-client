import React from 'react';
import { MessagesContainer, MessagesList, MessagesItem } from '@components/Chat/ChatFeed/styles';
import useChat from '@hooks/useChat';
import { RouteComponentProps, withRouter } from 'react-router';
import ChatInput from '@components/Chat/ChatInput/Index';

interface MatchParams {
  roomID: string;
}

interface messageItem {
  [index: number]: number | string;
  message: String;
  // id: string;
}

// function Map(message: messageItem){
//   return message.body;
// }

const ChatFeed: React.SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { roomID } = match.params;
  const { messages } = useChat(roomID); // Creates a websocket and manages messaging

  return (
    <div id="#chatFeed" style={{ display: 'flex', flex: 0.8, padding: '1rem' }}>
      <MessagesContainer>
        <MessagesList>
          {messages.map((message, i: number) => (
            <MessagesItem key={i}>{message.body}</MessagesItem>
          ))}
        </MessagesList>
      </MessagesContainer>
    </div>
  );
};

export default withRouter(ChatFeed);
