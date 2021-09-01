import React from 'react';
import ChatFeed from './ChatFeed';
import ChatHeader from './ChatHeader';
import ChatInputForm from './ChatInput';

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
      <ChatInputForm />
    </div>
  );
};

export default Chat;
