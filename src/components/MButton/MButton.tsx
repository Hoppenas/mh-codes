import React from "react";
import "./mbutton.scss";

interface Props {
  name: string;
  handleClick: () => void;
}

const MButton = ({ name, handleClick }: Props) => {
  return (
    <button onClick={handleClick} className="mbutton">
      <span>{name}</span>
    </button>
  );
};

export default MButton;
