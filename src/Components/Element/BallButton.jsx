import React from "react";

function BallButton({ img, text, value, classname, onclick }) {
  return (
    <div
      className={`flex items-center border-2 rounded-lg p-2 gap-3 ${classname}`}
      onClick={onclick}
    >
      <img src={img} alt={`${text} Logo`} />
      <div className="flex flex-col">
        <p className="text-xs">{value} left</p>
        <p className="text-sm font-bold">{text}</p>
      </div>
    </div>
  );
}

export default BallButton;
