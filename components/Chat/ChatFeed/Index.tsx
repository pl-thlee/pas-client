import React from 'react';
import { MessagesContainer, MessagesList, MessagesItem } from '@components/Chat/ChatFeed/styles';
import useChat from '@hooks/useChat';
import { RouteComponentProps, withRouter } from 'react-router';
import ChatInput from '@components/Chat/ChatInput/Index';

interface MatchParams {
  roomID: string;
}

interface message {
  [index: number]: number | string;
  body : String[];
  message: String;
  // id: string;
}

//let message: { body: String[]};
// function Map(message: messageItem){
//   return message.body;
// }

const ChatFeed: React.SFC<RouteComponentProps<MatchParams>> = ({match}) => {
  const { roomID } = match.params;
  const { messages } = useChat(roomID); // Creates a websocket and manages messaging

  return (
    <div id="#chatFeed" style={{ display: 'flex', flex: 0.8, padding: '1rem' }}>
      <MessagesContainer>
        <MessagesList>

          {messages.map((message: String, i: number, body: message["body"]) => (
            <MessagesItem key={i}>
              {body[i]}
            </MessagesItem>))}

        </MessagesList>
      </MessagesContainer>
    </div>
  );
};

export default withRouter(ChatFeed);
