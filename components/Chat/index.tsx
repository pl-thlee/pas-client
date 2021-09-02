import React from "react";

import {
  ChatRoomContainer,
  RoomName,
  MessagesContainer,
  MessagesList,
  NewMessageInputField,
  MessageItem,
  MyMessage,
  ReceivedMessage,
  SendMessageButton,
} from '@components/Chat/styles';
import useChat from "@hooks/useChat";

let props : any;
let event : any;

const Chat = () => {
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = () => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <ChatRoomContainer>
      <RoomName> <h1>Room: {roomId}</h1> </RoomName>
      <MessagesContainer>
        <MessagesList>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </MessagesList>
      </MessagesContainer>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </ChatRoomContainer>
  );
};

export default Chat;