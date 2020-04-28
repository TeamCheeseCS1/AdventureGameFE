import React from "react";
import {
  RoomInfoStyles,
  RoomInfoDiv,
  IpDiv,
  RoomTitles,
} from "../../Styles/formStyle.module.scss";

const RoomInfo = () => {
  return (
    <div className={RoomInfoStyles}>
      <div>room info</div>
      <div className={RoomInfoDiv}>
        <div>room name</div>
        <div>description</div>
        <div className={IpDiv}>
          <div>
            <div className={RoomTitles}>items</div>
            <p>explosive hazard vest</p>
            <p>jet-powered trash bin</p>
          </div>
          <div>
            <div className={RoomTitles}>players</div>
            <p>timmy garbage</p>
            <p>xXtrash guy 69Xx</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
