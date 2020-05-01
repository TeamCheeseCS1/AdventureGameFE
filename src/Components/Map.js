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
  NN,
  SS,
  EE,
  WW,
  ErrorMsg,
} from "../Styles/formStyle.module.scss";

const n = false;
const s = false;
const e = true;
const w = true;

const Map = () => {
  const { moveChar } = useContext(MoveCharContext);
  const { room } = useContext(MoveRoomContext);
  return (
    <div className={MapStyles}>
      {n ? <div className={NN}></div> : ""}
      {s ? <div className={SS}></div> : ""}
      {e ? <div className={EE}></div> : ""}
      {w ? <div className={WW}></div> : ""}
      {/* {room.nsew[0] ? <div className={NN}></div> : ""}
      {room.nsew[1] ? <div className={SS}></div> : ""}
      {room.nsew[2] ? <div className={EE}></div> : ""}
      {room.nsew[3] ? <div className={WW}></div> : ""} */}
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
      {room.error_msg ? <div className={ErrorMsg}>{room.error_msg}</div> : ""}
    </div>
  );
};

export default Map;
