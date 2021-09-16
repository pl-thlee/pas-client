import useChat from '@hooks/useChat';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import { ChatArea, ChatToolbar, MessageBox, SendButton } from './styles';

interface MatchParams{
  roomID: string;
}

const ChatInput = ( ) => {
  const { messages, sendMessage } = useChat(roomID);
  const [newMessage, setNewMessage] = useState(""); // Message to be sent

  const handleNewMessageChange = useCallback((event:any) => {
    setNewMessage(event.target.value);
  },[newMessage]);


  const handleSendMessage = useCallback((e:SyntheticEvent) => {
    sendMessage(newMessage);
    setNewMessage("");
  },[newMessage]);

  return (
    <MessageBox>
      <ChatArea 
        placeholder="Enter the Message"
        onChange={handleNewMessageChange}>
        {newMessage}
      </ChatArea>
      <ChatToolbar>
        <IconContext.Provider value={{ size: '1.5rem', color: 'black' /* attr: { display: 'block' } */ }}>
          <GrEmoji />
            <button onClick={()=>handleSendMessage}>
            <BiSend />
            </button>
        </IconContext.Provider>
      </ChatToolbar>
    </MessageBox>
  );
};

export default ChatInput;

function roomID(roomID: any): { messages: any; sendMessage: any; } {
  throw new Error('Function not implemented.');
}
