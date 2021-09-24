import React from 'react';
import { MessagesContainer, MessagesList, MessagesItem } from '@components/Chat/ChatFeed/styles';
import useChat from '@hooks/useChat';
import { RouteComponentProps, withRouter } from 'react-router';
import ChatInput from '@components/Chat/ChatInput/Index';

interface MatchParams {
  roomID: string;
}

interface messageItem {
  body: string;
  message: string;
  // id: string;
}

function Map(message: messageItem){
  return message.body;
}

const ChatFeed: React.SFC<RouteComponentProps<MatchParams>> = ({match}) => {
  const { roomID } = match.params;
  const { messages } = useChat(roomID); // Creates a websocket and manages messaging
 
  return (
    <div id="#chatFeed" style={{ display: 'flex', flex: 0.8, padding: '1rem' }}>
      <MessagesContainer>
        <MessagesList>
          <MessagesItem>
            {messages.map((message, i)=> (
              <MessagesItem>
                {Map((message: messageItem): string[])}
              </MessagesItem>))
            }
          </MessagesItem>
        {/* <MessagesList>
          {messages.map((message, i) => (
            <MessagesItem key={i}>
              {message.body}
            </MessagesItem>))} */}
        </MessagesList>
      </MessagesContainer>
    </div>
  );
};

export default withRouter(ChatFeed);

// function roomID(_roomID: any): { messages: any; sendMessage: any } {
//   throw new Error('Function not implemented.');
// }

