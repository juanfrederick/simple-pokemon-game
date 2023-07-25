import React, { useEffect, useState } from "react";
import Input from "../Element/Input";
import Button from "../Element/Button";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../features/pokemonSlice";
import {
  savePokemon,
  patchUserDetails,
  setLastSaved,
} from "../../features/userSlice";
import { clearUserInput } from "../../features/userInputSlice";
import SuccesPop from "../Element/SuccesPop";

function SuccesInterface({ name, object }) {
  const { pokeId, front_default } = object;

  const [inputValue, setInputValue] = useState("");

  const { user, lastSaved } = useSelector((store) => store.user);
  const { id, pokemonCatched } = useSelector((store) => store.user.details);

  const dispatch = useDispatch();

  const getCurrentDate = () => {
    const monthFormat = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date();
    const day = date.getDate();
    const month = monthFormat[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();

    if (hours > 12) {
      return `${hours - 12}.${minute}PM`;
    } else {
      return `${hours}.${minute}AM`;
    }
  };

  const handleButton = () => {
    const date = getCurrentDate();
    const time = getCurrentTime();

    dispatch(setLastSaved(inputValue === "" ? name : inputValue));

    const pushData = {
      pokemonId: pokeId,
      name,
      front_default,
      nickname: inputValue === "" ? name : inputValue,
      date,
      time,
      user,
    };

    dispatch(savePokemon(pushData));
    dispatch(
      patchUserDetails({ id, value: { pokemonCatched: pokemonCatched + 1 } })
    );
  };

  return (
    <div className="">
      <h1 className="font-bold text-2xl text-center my-2">Congratulations!</h1>
      <p className="text-center my-2">
        You've found{" "}
        <span className="font-bold">
          {name.charAt(0).toUpperCase() + name.slice(1)}!
        </span>
      </p>
      <Input
        id="nickname"
        text="Nickname"
        type="text"
        value={inputValue}
        disabled={lastSaved}
        onchange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button
        text="Save"
        classname={`mt-4  ${lastSaved && "opacity-40"}`}
        onclick={handleButton}
        disabled={lastSaved}
      />
      {lastSaved && (
        <SuccesPop
          text={`${lastSaved} has been succesfully catched!`}
          onclick={() => {
            dispatch(resetState());
            dispatch(clearUserInput());
            dispatch(setLastSaved(null));
          }}
        />
      )}
    </div>
  );
}

function FailInterface({ name }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-2">Aw, snap!</h1>
      <p className="text-center my-2">
        A <span className="font-bold">{name}</span> has slipped away from your
        Poke Ball.
      </p>
      <Button
        text="Catch Another Pokemon"
        classname="mt-4"
        onclick={() => {
          dispatch(resetState());
          dispatch(clearUserInput());
        }}
      />
    </div>
  );
}

function PokemonAction() {
  const { pokemonAppear, isCaught } = useSelector((store) => store.pokemon);
  const { name, id, sprites } = pokemonAppear;
  const { front_default } = sprites;

  return (
    <div className="flex flex-col items-center py-5 ">
      <img src={front_default} alt={name} className="w-40 " />
      {isCaught ? (
        <SuccesInterface name={name} object={{ pokeId: id, front_default }} />
      ) : (
        <FailInterface name={name} />
      )}
    </div>
  );
}

export default PokemonAction;
