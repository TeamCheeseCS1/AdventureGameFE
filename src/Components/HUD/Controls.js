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
  ControlIcon,
} from "../../Styles/formStyle.module.scss";

const Controls = () => {
  return (
    <div className={ControlsStyles}>
      <div>controls</div>
      <div className={ControlsDiv}>
        <a>
          <div className={HoverText}>
            <p>take item</p>
            <FaHandRock className={ControlIcon} />
          </div>
        </a>
        <a>
          <div className={HoverText}>
            <p>drop item</p>
            <FaHandPaper className={ControlIcon} />
          </div>
        </a>
        <a>
          <div className={HoverText}>
            <p>move left</p>
            <FaArrowCircleLeft className={ControlIcon} />
          </div>
        </a>
        <a>
          <div className={HoverText}>
            <p>move up</p>
            <FaArrowCircleUp className={ControlIcon} />
          </div>
        </a>
        <a>
          <div className={HoverText}>
            <p>move right</p>
            <FaArrowCircleRight className={ControlIcon} />
          </div>
        </a>
        <a>
          <div className={HoverText}>
            <p>move down</p>
            <FaArrowCircleDown className={ControlIcon} />
          </div>
        </a>
        <a>
          <div className={HoverText}>
            <p>shop</p>
            <FaStore className={ControlIcon} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Controls;
