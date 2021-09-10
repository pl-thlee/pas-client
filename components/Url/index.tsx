import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatHeader from '@components/Chat/ChatHeader/Index';
import { textInputField, enterRoomBtn } from './styles';

const Url = () => {
  const [roomID, setRoomID] = useState("");
  
  const handleRoomNameChange = (e:any) => {
    setRoomID(e.currentTarget.value);
  };

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
      <input
        type="text"
        placeholder="Room"
        value={roomID}
        onChange={handleRoomNameChange} />

      <Link to={`/${roomID}`}>
        Join room
      </Link>

    </div>
  );
};

export default Url;