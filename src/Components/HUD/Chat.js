import React from "react";
import { ChatStyles, ChatForm } from "../../Styles/formStyle.module.scss";

const Chat = () => {
  return (
    <div className={ChatStyles}>
      <div>Chat</div>
      <div className={ChatForm}>
        <input type="text" placeholder="enter message..." />
        <button>sumbit</button>
      </div>
    </div>
  );
};

export default Chat;
