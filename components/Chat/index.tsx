import React, { useEffect } from 'react';
import ChatFeed from '@components/Chat/ChatFeed/Index';
import ChatHeader from '@components/Chat/ChatHeader/Index';
import ChatInput from '@components/Chat/ChatInput/Index';
import useChat from '@hooks/useChat';

import { RouteComponentProps } from 'react-router';

type Props = RouteComponentProps<{roomID: string}>;

const Chat: React.FC<Props> = ({match}) => {
  
  const { roomID } = match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomID); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (e:any) => {
    setNewMessage(e.currentTarget.value);
  };

  const handleSendMessage = (e:any) => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  useEffect(() => {
    fetch(`http://localhost:3000/playgrounds/${roomID}`);
  }, [roomID]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        height: 'calc(100vh - 4rem)',
      }}
    >
      <ChatHeader />
      <ChatFeed />
      chattest : {roomID}
      <ChatInput />
    </div>
  );
};

export default Chat;