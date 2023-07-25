import React from "react";

function Button({ text, classname, disabled, onclick, black }) {
  return (
    <button
      className={`bg-blue-500 w-full py-2 text-sm rounded-lg ${
        black ? "text-black" : "text-white"
      }  ${classname}`}
      disabled={disabled}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Button;
