import useChat from '@hooks/useChat';
import React, { KeyboardEvent, useCallback, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import { ChatArea, ChatToolbar, MessageBox, SendButton } from './styles';
// const chalk = require('chalk');
import chalk from 'chalk';

interface MatchParams {
  roomID: string;
}

const ChatInput = () => {
  const { messages, sendMessage } = useChat(roomID);
  const [newMessage, setNewMessage] = useState(''); // Message to be sent

  const handleNewMessageChange = useCallback(
    (e: any) => {
      // console.log('[handleNewMessageChange]', e.target.value);
      setNewMessage(e.target.value);
    },
    [newMessage],
  );

  const handleSendMessage = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(chalk.blue(e));
    if (e.key === 'Enter') {
      e.preventDefault();
      setNewMessage('');
      console.log(newMessage);
      sendMessage(newMessage);
    }
  }, []);

  return (
    <form onSubmit={handleNewMessageChange}>
      <MessageBox>
        <ChatArea
          placeholder="메시지를 입력하세요"
          onChange={handleNewMessageChange}
          value={newMessage}
          onKeyPress={handleSendMessage}
        />
        <ChatToolbar>
          <IconContext.Provider value={{ size: '1.5rem', color: 'black' /* attr: { display: 'block' } */ }}>
            <GrEmoji />
            <button /* onClick={handleSendMessage} */>
              <BiSend />
            </button>
          </IconContext.Provider>
        </ChatToolbar>
      </MessageBox>
    </form>
  );
};

export default ChatInput;

function roomID(roomID: any): { messages: any; sendMessage: any } {
  throw new Error('Function not implemented.');
  console.log('roomID', roomID);
}