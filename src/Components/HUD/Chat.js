import React, { useState } from "react";
import axiosWithAuth from "../../Middleware/axiosWithAuth";
import { ChatStyles, ChatForm } from "../../Styles/formStyle.module.scss";

const Chat = () => {
  const [chat, setChat] = useState({
    token: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setChat({
      token: localStorage.getItem(localStorage.key(0))
        ? localStorage.getItem(localStorage.key(0))
        : "",
      message: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/adv/say/", chat)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        setChat({ token: "", message: "" });
        return err.message;
      })
      .finally(() => setChat({ token: "", message: "" }));
  };

  return (
    <div className={ChatStyles}>
      <div>Chat</div>
      <div className={ChatForm}>
        <input
          onChange={handleChange}
          type="text"
          name="chatBox"
          placeholder="enter message..."
        />
        <button onClick={handleSubmit}>sumbit</button>
      </div>
    </div>
  );
};

export default Chat;
