import React from "react";
import Overview from "../Element/Overview";
import { useSelector } from "react-redux";

function OverviewFragment() {
  const { pokemonCatched, catchAttempts, wallet } = useSelector(
    (store) => store.user.details
  );

  return (
    <div className="bg-white rounded-lg p-3 md:py-10">
      <div className="flex gap-2 py-3">
        <div className="w-2 bg-purple-300 rounded-sm"></div>
        <p className="font-bold">Overview</p>
      </div>
      <div className="flex flex-col gap-2 py-3 md:flex-row ">
        <Overview
          img="/image/catched.png"
          text="Pokemon Catched"
          value={pokemonCatched}
          classname="bg-green-100"
        />
        <Overview
          img="/image/attempts.png"
          text="Catch Attempts"
          value={catchAttempts}
          classname="bg-blue-50"
        />
        <Overview
          img="/image/credit.png"
          text="Pokemon Coins"
          value={wallet}
          classname="bg-purple-100"
        />
      </div>
    </div>
  );
}

export default OverviewFragment;
