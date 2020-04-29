import React, { useContext } from "react";
import { MoveCharContext } from "../contexts/MoveCharContext";
import { MoveRoomContext } from "../contexts/MoveRoomContext";
import {
  MapStyles,
  CharStyles,
  RoomDef,
  N,
  S,
  E,
  W,
  // NN,
  // SS,
  // EE,
  // WW,
} from "../Styles/formStyle.module.scss";

const Map = () => {
  const { moveChar } = useContext(MoveCharContext);
  const { room } = useContext(MoveRoomContext);
  return (
    <div className={MapStyles}>
      <div className={RoomDef}>
        <img
          alt="nic cage"
          src="../download.png"
          className={
            moveChar === "n"
              ? N
              : moveChar === "s"
              ? S
              : moveChar === "e"
              ? E
              : moveChar === "w"
              ? W
              : CharStyles
          }
        />
      </div>
      {room.error_msg ? <div>{room.error_msg}</div> : ""}
    </div>
  );
};

export default Map;
