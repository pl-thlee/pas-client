import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatHeader from '@components/Chat/ChatHeader/Index';
import { TextInputField, EnterRoomBtn, Text, Wrap } from './styles';
import { colors } from '@material-ui/core';

const Url = () => {
  const [roomName, setRoomID] = useState("");
  
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
      <Wrap>
      <EnterRoomBtn>
        <input
          type="text"
          placeholder="Room"
          value={roomName}
          onChange={handleRoomNameChange}/>
      </EnterRoomBtn>

      {/* <JoinRoom to={'/${roomID}'}>Join Room</JoinRoom> */}
      <TextInputField>
        <Link to={`/${roomName}`}>
          <Text>Join room</Text>
        </Link>
      </TextInputField>
      </Wrap>

    </div>
  );
};

export default Url;