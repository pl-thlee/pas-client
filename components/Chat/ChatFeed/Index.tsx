import React from 'react';
import { MessagesContainer, MessagesList, MessagesItem } from '@components/Chat/ChatFeed/styles';
import useChat from '@hooks/useChat';
import { RouteComponentProps, withRouter } from 'react-router';
import ChatInput from '@components/Chat/ChatInput/Index';

interface MatchParams {
  roomID: string;
}

const ChatFeed: React.SFC<RouteComponentProps<MatchParams>> = ({match}) => {
  const { roomID } = match.params;
  const { messages, sendMessage } = useChat(roomID); // Creates a websocket and manages messaging

  return (
    <div id="#chatFeed" style={{ display: 'flex', flex: 0.8, padding: '1rem' }}>
      <MessagesContainer>
        <MessagesList>
          {messages.map((messages, i) => (
            <MessagesItem key={i}>
              {messages}
              {/* {{messages.body}} */}
            </MessagesItem>
          ))}
        </MessagesList>
      </MessagesContainer>
    </div>
  );
};

export default withRouter(ChatFeed);

// function roomID(_roomID: any): { messages: any; sendMessage: any } {
//   throw new Error('Function not implemented.');
// }
