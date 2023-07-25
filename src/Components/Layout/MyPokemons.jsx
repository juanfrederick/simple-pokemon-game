import React, { useEffect } from "react";
import MyPokemonsFragment from "../Fragments/MyPokemonsFragment";
import PokeCard from "../Element/PokeCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPokemon, setLastRelease } from "../../features/userSlice";
import NoPokemonElement from "../Element/NoPokemonElement";
import SuccesPop from "../Element/SuccesPop";

function MyPokemons() {
  const { backpack } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { lastRelease } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(fetchUserPokemon(user));
  }, []);

  return (
    <div className="flex-1 bg-gray-100 pt-20 min-h-screen pb-3 overflow-hidden">
      <div className="w-full h-72 bg-center bg-cover bg-[url('/image/shopBg.png')]"></div>
      <div className="bg-white w-[90%] mx-auto mt-[-8rem] p-10 rounded-lg flex flex-col gap-5">
        <MyPokemonsFragment />
        <div
          className="flex overflow-x-scroll gap-5 py-4"
          onWheel={(e) => {
            e.stopPropagation();
            if (e.deltaY < 0) {
              e.currentTarget.scrollLeft -= 50;
            } else {
              e.currentTarget.scrollLeft += 50;
            }
          }}
        >
          {backpack.length === 0 ? (
            <NoPokemonElement />
          ) : (
            backpack.map((val) => {
              const { front_default, nickname, name, date, time, id } = val;

              return (
                <PokeCard
                  key={id}
                  id={id}
                  img={front_default}
                  username={nickname}
                  pokename={name}
                  date={date}
                  time={time}
                />
              );
            })
          )}
        </div>
        {lastRelease && (
          <SuccesPop
            text={`${lastRelease} has been succesfully released.`}
            onclick={() => {
              dispatch(setLastRelease(null));
            }}
          />
        )}
      </div>
    </div>
  );
}

export default MyPokemons;
