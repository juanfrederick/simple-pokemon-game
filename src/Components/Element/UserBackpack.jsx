import React from "react";
import { useSelector } from "react-redux";
import Icon from "./Icon";

function UserBackpack() {
  const { basicBall, greatBall, masterBall, wallet } = useSelector(
    (store) => store.user.details
  );

  return (
    <div className="flex items-center bg-white gap-3">
      <Icon value={basicBall} img="/image/ball.png" alt="pokeball" />
      <Icon value={greatBall} img="/image/great.png" alt="greatball" />
      <Icon value={masterBall} img="/image/master.png" alt="masterball" />
      <Icon value={wallet} img="/image/wallet.png" alt="wallet" />
    </div>
  );
}

export default UserBackpack;
