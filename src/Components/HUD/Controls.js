import React, { useState } from "react";
import axiosWithAuth from "../../Middleware/axiosWithAuth";
import {
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaStore,
  FaHandRock,
  FaHandPaper,
} from "react-icons/fa";
import {
  ControlsStyles,
  ControlsDiv,
  HoverText,
  ControlIcon,
} from "../../Styles/formStyle.module.scss";

const Controls = () => {
  const [move, setMove] = useState({
    token: "",
    direction: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    setMove({
      token: localStorage.getItem(localStorage.key(0))
        ? localStorage.getItem(localStorage.key(0))
        : "",
      direction: e.target.value,
    });
    axiosWithAuth()
      .post("/adv/move/", move)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => err.message)
      .finally(() => setMove({ token: "", direction: "" }));
  };

  return (
    <div className={ControlsStyles}>
      <div>controls</div>
      <div className={ControlsDiv}>
        <button value="take" onClick={handleClick}>
          <div className={HoverText}>
            <p>take item</p>
            <FaHandRock className={ControlIcon} />
          </div>
        </button>
        <button value="drop" onClick={handleClick}>
          <div className={HoverText}>
            <p>drop item</p>
            <FaHandPaper className={ControlIcon} />
          </div>
        </button>
        <button value="w" onClick={handleClick}>
          <div className={HoverText}>
            <p>move left</p>
            <FaArrowCircleLeft className={ControlIcon} />
          </div>
        </button>
        <button value="n" onClick={handleClick}>
          <div className={HoverText}>
            <p>move up</p>
            <FaArrowCircleUp className={ControlIcon} />
          </div>
        </button>
        <button value="e" onClick={handleClick}>
          <div className={HoverText}>
            <p>move right</p>
            <FaArrowCircleRight className={ControlIcon} />
          </div>
        </button>
        <button value="s" onClick={handleClick}>
          <div className={HoverText}>
            <p>move down</p>
            <FaArrowCircleDown className={ControlIcon} />
          </div>
        </button>
        <button value="shop" onClick={handleClick}>
          <div className={HoverText}>
            <p>shop</p>
            <FaStore className={ControlIcon} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Controls;
