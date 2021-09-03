import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'

const ChatFeed = () => {
  const socket = io('ws://localhost:3000');
  const nickname = prompt("닉네임을 입력해주세요");
  if (!nickname) {
    window.location.reload();
  }

  let room: string = "1";
  if (!room) {
    window.location.reload();
  }

  socket.emit('welcome', nickname, 1);
  socket.on('connect', () => { // connect가 감지되면 실행해야되는것들

    socket.on(room, (data) => { // 실제 메시지 주고받는것 chatList에 표시
      $('#chatFeed').append(`<div>${data[0]} : ${data[1]}</div>`);
    });

    socket.on('comeOn' + nickname, (comeOn) => { // ~님이 입장했습니다 chatList에 표시
      $('#chatFeed').append(`<div style="color:blue;">${comeOn}</div>`);           
    });
  });

  return (
    <div id="#chatFeed" style={{ display: 'flex', flex: 0.8, padding: '1rem' }}>

    </div>);
};

export default ChatFeed;