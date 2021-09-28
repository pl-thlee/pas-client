import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

const NEW_CHAT_MESSAGE_EVENT = 'message'; // Name of the event
const SOCKET_SERVER_URL = 'http://localhost:4000';

interface IMessage {
  [index: number]: number | string;
  body: String[];
  message: String;
}

const useChat = (roomID: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]); // Sent and received messages
  const socketRef = useRef<any | null>(null);

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomID },
    });

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
      const incomingMessage = {
        ...message,
        // ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

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
      // senderId: socketRef.current.id,
      // 함부로 가져온 거 쓰지말자.. id 속성값이 없다.
    });
    console.log('messageBody : ', messageBody);
  };

  return { messages, sendMessage };
};

export default useChat;
