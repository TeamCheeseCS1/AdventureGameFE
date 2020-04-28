import React from "react";
import {
  RoomInfoStyles,
  RoomInfoDiv,
  IpDiv,
  RoomTitles,
} from "../../Styles/formStyle.module.scss";

const RoomInfo = ({ init }) => {
  return (
    <div className={RoomInfoStyles}>
      <div>room info</div>
      <div className={RoomInfoDiv}>
        <div>{init.location}</div>
        <div>{init.description}</div>
        <div className={IpDiv}>
          <div>
            <div className={RoomTitles}>items</div>
            {init.items.map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <div>
            <div className={RoomTitles}>players</div>
            {init.players.map((player) => (
              <p>{player}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
