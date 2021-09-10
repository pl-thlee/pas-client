import useChat from '@hooks/useChat';
import React from 'react';
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

  const handleNewMessageChange = (e:any) => {
    setNewMessage(e.currentTarget.value);
  };

  const handleSendMessage = (e:any) => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <MessageBox>
      <ChatArea>
        <textarea
          placeholder="메시지를 입력하세요"
          value={newMessage}
          onChange={handleNewMessageChange}>
        </textarea>
      </ChatArea>
      <ChatToolbar>
        <IconContext.Provider value={{ size: '1.5rem', color: 'black' /* attr: { display: 'block' } */ }}>
          <GrEmoji />
            <button onClick={handleSendMessage}>
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
