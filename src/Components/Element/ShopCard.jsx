import React, { useState } from "react";
import PopUp from "./PopUp";

function ShopCard(props) {
  const { img, ball, price, first, second, classname } = props;
  const [showPopUp, setShowPopUp] = useState(false);

  const walletHandle = () => {
    setShowPopUp(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className={`rounded-lg mx-auto px-16 py-4 ${classname}`}>
        <img src={img} alt={ball} className="w-40" />
      </div>
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold">{ball}</h3>
        <div
          className="flex items-center gap-1 bg-green-300 rounded-md px-2 py-1 cursor-pointer"
          onClick={walletHandle}
        >
          <img src="/image/wallet.png" alt="wallet" />
          <p className="font-bold">{price}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-500 font-semibold">{first}</p>
        <p className="text-gray-500 font-semibold">{second}</p>
      </div>
      {showPopUp && (
        <PopUp
          setshowpopup={setShowPopUp}
          text={`Purchase: ${ball.substring(4)}`}
          ball={ball}
          price={price}
        />
      )}
    </div>
  );
}

export default ShopCard;
