import React from "react";
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
  text,
} from "../../Styles/formStyle.module.scss";

const Controls = () => {
  return (
    <div className={ControlsStyles}>
      <div>controls</div>
      <div className={ControlsDiv}>
        <div className={HoverText}>
          <FaHandRock />
          <p>take</p>
        </div>
        <div className={HoverText}>
          <FaHandPaper />
          <p>drop</p>
        </div>
        <div className={HoverText}>
          <FaArrowCircleLeft />
          <p>move left</p>
        </div>
        <div className={HoverText}>
          <FaArrowCircleUp />
          <p>move up</p>
        </div>
        <div className={HoverText}>
          <FaArrowCircleRight />
          <p>move right</p>
        </div>
        <div className={HoverText}>
          <FaArrowCircleDown />
          <p>move down</p>
        </div>
        <div className={HoverText}>
          <FaStore />
          <p>store</p>
        </div>
      </div>
    </div>
  );
};

export default Controls;
