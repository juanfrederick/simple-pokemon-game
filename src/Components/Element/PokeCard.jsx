import React, { useState } from "react";
import PopUp from "./PopUp";

function PokeCard(props) {
  const { img, username, pokename, date, time, id } = props;

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="w-64 flex flex-col items-center gap-2 flex-shrink-0">
      <img
        src={img}
        alt={pokename}
        className="bg-gray-100 w-full h-40 object-contain px-5 rounded-xl"
      />
      <div className="flex justify-between w-full items-center">
        <div className="flex-1">
          <h2 className="text-xl font-bold">{username}</h2>
          <p className="font-bold">
            {pokename.charAt(0).toUpperCase() + pokename.slice(1)}
          </p>
        </div>
        <button
          className="bg-red-500 text-white rounded-lg px-3 h-10"
          onClick={() => {
            setShowPopUp(true);
          }}
        >
          Release
        </button>
      </div>
      <p className="text-sm self-start font-semibold text-gray-500">
        Catched on {date}, {time}
      </p>
      {showPopUp && (
        <PopUp
          nickname={username}
          id={id}
          setshowpopup={setShowPopUp}
          pokepage={true}
          text={`Release ${username}`}
        />
      )}
    </div>
  );
}

export default PokeCard;
