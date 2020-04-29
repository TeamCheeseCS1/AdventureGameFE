import React, { useState, useContext } from "react";
import axiosWithAuth from "../../Middleware/axiosWithAuth";
import { MoveCharContext } from "../../contexts/MoveCharContext";
import { MoveRoomContext } from "../../contexts/MoveRoomContext";
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
  const { setMoveChar } = useContext(MoveCharContext);
  const { setRoom } = useContext(MoveRoomContext);
  const [move, setMove] = useState({
    token: "",
    direction: "",
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
          items: ["1", "2"],
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
        console.log(res.data);
        setRoom({
          username: res.data.name,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["1", "2"],
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
        console.log(res.data);
        setRoom({
          username: res.data.name,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["1", "2"],
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
        console.log(res.data);
        setRoom({
          username: res.data.name,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["1", "2"],
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

  const handleDrop = (e) => {
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

  const handleShop = (e) => {
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
        <button onClick={handleTake}>
          <div className={HoverText}>
            <p>take item</p>
            <FaHandRock className={ControlIcon} />
          </div>
        </button>
        <button onClick={handleDrop}>
          <div className={HoverText}>
            <p>drop item</p>
            <FaHandPaper className={ControlIcon} />
          </div>
        </button>
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
        <button onClick={handleShop}>
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
