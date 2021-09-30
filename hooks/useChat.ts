import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = 'message'; // Name of the event
const SOCKET_SERVER_URL = 'http://localhost:4000';
const HEROKU_SERVER_URL = 'http://neopas-server.herokuapp.com';

const URL = process.env.NODE_ENV === 'development' ? SOCKET_SERVER_URL : HEROKU_SERVER_URL;

interface IMessage {
  [index: number]: number | string;
  body: String[];
  message: String;
  ownedByCurrentUser: boolean;
}

const useChat = (roomID: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]); // Sent and received messages
  const socketRef = useRef<any | null>(null);

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(URL, {
      //URL = SOCKET_SERVER_URL,
      query: { roomID },
    });

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
      //console.log('ownedByCurrentUser : ', incomingMessage.ownedByCurrentUser);
    }
    );

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomID]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody: string) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
    //console.log('messageBody : ', messageBody);
  };

  return { messages, sendMessage };
};

export default useChat;
