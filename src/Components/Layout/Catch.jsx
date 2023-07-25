import React, { useEffect } from "react";
import CatchMain from "../Fragments/CatchMain";
import { useSelector } from "react-redux";
import DashboardHeader from "../Fragments/DashboardHeader";
import LoadingScreen from "../Fragments/LoadingScreen";
import PokemonAction from "../Fragments/PokemonAction";

function Catch() {
  const { username } = useSelector((store) => store.user.details);
  const { isLoading, pokemonAppear } = useSelector((store) => store.pokemon);

  return (
    <div className="flex-1 bg-gray-100 p-3 pt-28 min-h-screen">
      <div className="bg-white rounded-lg p-3 md:py-10">
        <DashboardHeader
          heading="Catch a Pokemon"
          text="It's a wild west out there, Good luck, Pokemon Trainer"
          username={username}
        />
        {!isLoading && !pokemonAppear && <CatchMain />}
        {isLoading && <LoadingScreen />}
        {!isLoading && pokemonAppear && <PokemonAction />}
      </div>
    </div>
  );
}

export default Catch;
