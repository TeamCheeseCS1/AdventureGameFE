import React from "react";
import {
  ControlsStyles,
  ControlsDiv,
} from "../../Styles/formStyle.module.scss";

const Controls = () => {
  return (
    <div className={ControlsStyles}>
      <div>controls</div>
      <div className={ControlsDiv}>
        <div>take</div>
        <div>drop</div>
        <div>up</div>
        <div>down</div>
        <div>left</div>
        <div>right</div>
        <div>store</div>
      </div>
    </div>
  );
};

export default Controls;
