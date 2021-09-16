import useChat from '@hooks/useChat';
import React, { useCallback } from 'react';
import { BiSend } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import { ChatArea, ChatToolbar, MessageBox, SendButton } from './styles';

interface MatchParams{
  roomID: string;
}

const ChatInput = ( ) => {
  const { messages, sendMessage } = useChat(roomID);
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event:any) => {
    setNewMessage(event.target.value);
  };


  const handleSendMessage = (e:any) => {
    sendMessage(newMessage);
    setNewMessage("");
    console.log('The link was clicked.');
  };

  return (
    <MessageBox>
      <ChatArea>
        <textarea
          placeholder="Enter the Message"
          value={newMessage}
          onChange={handleNewMessageChange}>
        </textarea>
      </ChatArea>
      <ChatToolbar>
        <IconContext.Provider value={{ size: '1.5rem', color: 'black' /* attr: { display: 'block' } */ }}>
          <GrEmoji />
            <button onClick={()=>handleSendMessage}>
            BTN
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
