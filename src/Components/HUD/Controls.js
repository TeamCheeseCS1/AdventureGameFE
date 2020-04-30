import React, { useState, useContext } from "react";
import axiosWithAuth from "../../Middleware/axiosWithAuth";
import { MoveCharContext } from "../../contexts/MoveCharContext";
import { MoveRoomContext } from "../../contexts/MoveRoomContext";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
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
  PopUpBody,
  PopUpHeader,
} from "../../Styles/formStyle.module.scss";

const Controls = () => {
  const { setMoveChar } = useContext(MoveCharContext);
  const { room, setRoom } = useContext(MoveRoomContext);
  const [move, setMove] = useState({
    token: "",
    direction: "",
    // username: room.username,
  });

  //handle direction actions

  const handleMoveN = (e) => {
    e.preventDefault();
    setMoveChar("n");
    setMove({
      token: localStorage.getItem(localStorage.key(0))
        ? localStorage.getItem(localStorage.key(0))
        : "",
      direction: "n",
    });
    axiosWithAuth()
      .post("/adv/move/", move)
      .then((res) => {
        console.log(res.data);
        setRoom({
          username: res.data.name,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["dusty can", "bloody shotgun"],
          error_msg: res.data.error_msg,
          // nsew: [true, true, false, true],
        });
      })
      .catch((err) => err.message)
      .finally(() => {
        setMoveChar("");
        setMove({ token: "", direction: "" });
      });
  };

  const handleMoveS = (e) => {
    e.preventDefault();
    setMoveChar("s");
    setMove({
      token: localStorage.getItem(localStorage.key(0))
        ? localStorage.getItem(localStorage.key(0))
        : "",
      direction: "s",
    });
    axiosWithAuth()
      .post("/adv/move/", move)
      .then((res) => {
        // console.log(res.data);
        setRoom({
          username: res.data.name,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["dusty can", "bloody shotgun"],
          error_msg: res.data.error_msg,
          // nsew: [true, true, false, true],
        });
      })
      .catch((err) => err.message)
      .finally(() => {
        setMoveChar("");
        setMove({ token: "", direction: "" });
      });
  };

  const handleMoveE = (e) => {
    e.preventDefault();
    setMoveChar("e");
    setMove({
      token: localStorage.getItem(localStorage.key(0))
        ? localStorage.getItem(localStorage.key(0))
        : "",
      direction: "e",
    });
    axiosWithAuth()
      .post("/adv/move/", move)
      .then((res) => {
        // console.log(res.data);
        setRoom({
          username: res.data.name,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["dusty can", "bloody shotgun"],
          error_msg: res.data.error_msg,
          // nsew: [true, true, false, true],
        });
      })
      .catch((err) => err.message)
      .finally(() => {
        setMoveChar("");
        setMove({ token: "", direction: "" });
      });
  };

  const handleMoveW = (e) => {
    e.preventDefault();
    setMoveChar("w");
    setMove({
      token: localStorage.getItem(localStorage.key(0))
        ? localStorage.getItem(localStorage.key(0))
        : "",
      direction: "w",
    });
    axiosWithAuth()
      .post("/adv/move/", move)
      .then((res) => {
        // console.log(res.data);
        setRoom({
          username: res.data.name,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["dusty can", "bloody shotgun"],
          error_msg: res.data.error_msg,
          // nsew: [true, true, false, true],
        });
      })
      .catch((err) => err.message)
      .finally(() => {
        setMoveChar("");
        setMove({ token: "", direction: "" });
      });
  };

  //handle give, take and Store actions

  const handleTake = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/adv/take/", e.target.innerText)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => err.message);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/adv/drop/", e.target.innerText)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => err.message);
  };

  const handleBuy = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/adv/buy/", e.target.innerText)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => err.message);
  };

  const handleSell = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/adv/sell/", e.target.innerText)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => err.message);
  };

  return (
    <div className={ControlsStyles}>
      <div>controls</div>
      <div className={ControlsDiv}>
        <button id="pickUp">
          <div className={HoverText}>
            <p>pick up item</p>
            <FaHandRock className={ControlIcon} />
          </div>
        </button>
        <UncontrolledPopover trigger="legacy" placement="top" target="pickUp">
          <PopoverHeader className={PopUpHeader}>pick up item</PopoverHeader>
          <PopoverBody className={PopUpBody}>
            {room.items.map((item) => (
              <button onClick={handleTake}>{item}</button>
            ))}
          </PopoverBody>
        </UncontrolledPopover>
        <button id="dropItem">
          <div className={HoverText}>
            <p>drop item</p>
            <FaHandPaper className={ControlIcon} />
          </div>
        </button>
        <UncontrolledPopover trigger="legacy" placement="top" target="dropItem">
          <PopoverHeader className={PopUpHeader}>drop item</PopoverHeader>
          <PopoverBody className={PopUpBody}>
            {room.items.map((item) => (
              <button onClick={handleDrop}>{item}</button>
            ))}
          </PopoverBody>
        </UncontrolledPopover>
        <button onClick={handleMoveW}>
          <div className={HoverText}>
            <p>move left</p>
            <FaArrowCircleLeft className={ControlIcon} />
          </div>
        </button>
        <button onClick={handleMoveN}>
          <div className={HoverText}>
            <p>move up</p>
            <FaArrowCircleUp className={ControlIcon} />
          </div>
        </button>
        <button onClick={handleMoveE}>
          <div className={HoverText}>
            <p>move right</p>
            <FaArrowCircleRight className={ControlIcon} />
          </div>
        </button>
        <button onClick={handleMoveS}>
          <div className={HoverText}>
            <p>move down</p>
            <FaArrowCircleDown className={ControlIcon} />
          </div>
        </button>
        <button id="shop">
          <div className={HoverText}>
            <p>shop</p>
            <FaStore className={ControlIcon} />
          </div>
        </button>
        <UncontrolledPopover trigger="legacy" placement="top" target="shop">
          <PopoverHeader className={PopUpHeader}>item shop</PopoverHeader>
          <PopoverBody className={PopUpBody}>
            <div>buy</div>
            {room.items.map((item) => (
              <button onClick={handleBuy}>{item}</button>
            ))}
            <div>sell</div>
            {room.items.map((item) => (
              <button onClick={handleSell}>{item}</button>
            ))}
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    </div>
  );
};

export default Controls;
