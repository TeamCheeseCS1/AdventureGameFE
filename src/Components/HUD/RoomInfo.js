import React from "react";
import {
  RoomInfoStyles,
  RoomInfoDiv,
} from "../../Styles/formStyle.module.scss";

const RoomInfo = () => {
  return (
    <div className={RoomInfoStyles}>
      <div>room info</div>
      <div className={RoomInfoDiv}>
        <div>room name</div>
        <div>description</div>
        <div>items</div>
        <div>players</div>
      </div>
    </div>
  );
};

export default RoomInfo;
