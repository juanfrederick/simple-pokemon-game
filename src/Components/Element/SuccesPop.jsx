import React from "react";

function SuccesPop({ text, onclick }) {
  return (
    <div className="fixed bottom-20 left-0 right-0 flex justify-center">
      <div className="bg-white flex gap-2 items-center py-2 px-5 rounded-lg border-2">
        <img src="/image/success.png" alt="succes logo" className="w-6 h-6" />
        <p className="font-semibold">{text}</p>
        <img
          src="/image/close.png"
          alt="close logo"
          className="w-4 h-4 cursor-pointer"
          onClick={onclick}
        />
      </div>
    </div>
  );
}

export default SuccesPop;
