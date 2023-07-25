import React from "react";
import DashboardHeader from "./DashboardHeader";
import UserBackpack from "../Element/UserBackpack";
import PokeCard from "../Element/PokeCard";

function MyPokemonsFragment() {
  return (
    <div className="flex justify-between gap-2 flex-col lg:flex-row">
      <DashboardHeader
        heading="My Pokemons"
        username="Here is the place where your pokemons are dwelling"
        classname="flex flex-col gap-2"
      />
      <UserBackpack />
    </div>
  );
}

export default MyPokemonsFragment;
