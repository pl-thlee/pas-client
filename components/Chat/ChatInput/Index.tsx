import React from 'react';
import { BiSend } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import { ChatArea, ChatToolbar, MessageBox, SendButton } from './styles';

const ChatInput = () => {
  return (
    <MessageBox>
      <ChatArea placeholder="메시지를 입력하세요" />
      <ChatToolbar>
        <IconContext.Provider value={{ size: '1.5rem', color: 'black' /* attr: { display: 'block' } */ }}>
          <GrEmoji />
          <BiSend />
        </IconContext.Provider>
      </ChatToolbar>
    </MessageBox>
  );
};

export default ChatInput;