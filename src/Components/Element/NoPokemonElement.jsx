import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function NoPokemonElement() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <img
        src="/image/singleball.png"
        alt="Pokeball"
        className="w-96 h-52 object-contain"
      />
      <div className="text-center">
        <h1 className="font-bold text-2xl">You don't own any pokemons.</h1>
        <p className="font-semibold text-gray-500">
          At some point, you got to catch em' all.
        </p>
      </div>
      <Link to="/catch">
        <Button text="Catch a Pokemon" classname="w-36 px-4" />
      </Link>
    </div>
  );
}

export default NoPokemonElement;
