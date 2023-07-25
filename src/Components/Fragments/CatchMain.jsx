import React from "react";
import { useSelector } from "react-redux";
import ChooseBall from "./ChooseBall";

function CatchMain() {
  const { username } = useSelector((store) => store.user.details);

  return (
    <div className="flex gap-10 pt-10">
      <ChooseBall />
      <img
        src="/image/catchWall.png"
        alt="pokemon"
        className="hidden w-96 h-96 lg:block"
      />
    </div>
  );
}

export default CatchMain;
