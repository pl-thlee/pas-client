import React, { useEffect } from 'react';
//import ChatFeed  from '/new_pas/pas-client/components/Chat/ChatFeed/index'
import ChatFeed from '@components/Chat/ChatFeed/index';
import ChatHeader from '@components/Chat/ChatHeader/Index';
import ChatInput from '@components/Chat/ChatInput/Index';

// const ChatFeed = require('@components/Chat/ChatFeed/Index');
// const JsChatFeed: any = ChatFeed;

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