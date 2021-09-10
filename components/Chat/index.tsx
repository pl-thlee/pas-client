import React, { useEffect } from 'react';
import ChatFeed from '@components/Chat/ChatFeed/Index';
import ChatHeader from '@components/Chat/ChatHeader/Index';
import ChatInput from '@components/Chat/ChatInput/Index';

const Chat = () => {
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
      <ChatInput />
    </div>
  );
};

export default Chat;