import React from 'react';
import Cam from "../img/Cam.png";
import Add from "../img/Add user.png";
import More from "../img/more-horiz.png";
import Input from './Input.js';
import Messages from './Messages';
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />

        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat
