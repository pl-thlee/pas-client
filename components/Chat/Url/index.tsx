import React from 'react';
import ChatFeed from '@components/Chat/ChatFeed/Index';
import ChatHeader from '@components/Chat/ChatHeader/Index';
import ChatInputForm from '@components/Chat/ChatInput/Index';

const Url = () => {
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

export default Url;