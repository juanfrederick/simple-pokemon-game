import { useDispatch, useSelector } from "react-redux";
import {
  setPokemonAppear,
  setIsCaught,
  setIsLoading,
  setLevel,
} from "../features/pokemonSlice";

import { patchUserDetails } from "../features/userSlice";

const useCatchPokemon = () => {
  const dispatch = useDispatch();
  const { ballChosed } = useSelector((store) => store.userInput);
  const { id, catchAttempts, basicBall, greatBall, masterBall, wallet } =
    useSelector((store) => store.user.details);
  const { user } = useSelector((store) => store.user);
  const { level } = useSelector((store) => store.pokemon);

  const getPercentage = () => {
    return Math.random() * 100 + 1;
  };

  const getRandomPokemon = async () => {
    const percentage = getPercentage();
    let test = 0;

    while (true) {
      test = test + 1;

      const response = await fetch(
        `http://localhost:3000/pokemonSaved?user=${user}`
      );
      const data = await response.json();

      let rand;

      if (percentage <= 50) {
        rand = Math.round(Math.random() * 399) + 1;
      } else if (percentage <= 80) {
        rand = Math.round(Math.random() * 399) + 400;
      } else {
        rand = Math.round(Math.random() * 98) + 800;
      }

      const samePokemon = data.filter((val) => {
        return val.pokemonId === rand;
      });

      if (samePokemon.length === 0) {
        return rand;
      }

      if (test === 898) {
        throw new Error("All Pokemon Catched");
      }
    }
  };

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    dispatch(setPokemonAppear(data));
  };

  const decreaseBall = () => {
    if (ballChosed === "normal") {
      dispatch(
        patchUserDetails({
          id,
          value: {
            basicBall: basicBall - 1,
          },
        })
      );
    } else if (ballChosed === "great") {
      dispatch(
        patchUserDetails({
          id,
          value: {
            greatBall: greatBall - 1,
          },
        })
      );
    } else {
      dispatch(
        patchUserDetails({
          id,
          value: {
            masterBall: masterBall - 1,
          },
        })
      );
    }
  };

  const setRare = (poke) => {
    if (poke <= 399) {
      dispatch(setLevel("A"));
    } else if (poke <= 799) {
      dispatch(setLevel("B"));
    } else {
      dispatch(setLevel("C"));
    }
  };

  const getCoins = async () => {
    if (level === "A") {
      dispatch(patchUserDetails({ id, value: { wallet: wallet + 75 } }));
    } else if (level === "B") {
      dispatch(patchUserDetails({ id, value: { wallet: wallet + 150 } }));
    } else {
      dispatch(patchUserDetails({ id, value: { wallet: wallet + 600 } }));
    }
  };

  const catchPokemon = async () => {
    dispatch(setPokemonAppear(null));
    dispatch(setIsCaught(false));
    dispatch(setIsLoading(true));

    const pokemon = await getRandomPokemon();
    const percentage = getPercentage();

    decreaseBall();

    await fetchPokemon(pokemon);

    dispatch(
      patchUserDetails({
        id,
        value: {
          catchAttempts: catchAttempts + 1,
        },
      })
    );

    setRare(pokemon);

    // console.log(pokemon, "Pokemon that appear");
    // console.log(percentage, "Percentage of get the pokemon");
    // console.log(ballChosed);

    if (ballChosed === "normal") {
      if (pokemon <= 399) {
        if (percentage <= 50) {
          dispatch(setIsCaught(true));
          dispatch(patchUserDetails({ id, value: { wallet: wallet + 75 } }));
        } else {
          dispatch(setIsCaught(false));
        }
      } else if (pokemon <= 799) {
        if (percentage <= 15) {
          dispatch(setIsCaught(true));
          dispatch(patchUserDetails({ id, value: { wallet: wallet + 150 } }));
        } else {
          dispatch(setIsCaught(false));
        }
      } else {
        if (percentage <= 2.5) {
          dispatch(setIsCaught(true));
          dispatch(patchUserDetails({ id, value: { wallet: wallet + 600 } }));
        } else {
          dispatch(setIsCaught(false));
        }
      }
    } else if (ballChosed === "great") {
      if (pokemon <= 399) {
        if (percentage <= 75) {
          dispatch(setIsCaught(true));
          dispatch(patchUserDetails({ id, value: { wallet: wallet + 75 } }));
        } else {
          dispatch(setIsCaught(false));
        }
      } else if (pokemon <= 799) {
        if (percentage <= 30) {
          dispatch(setIsCaught(true));
          dispatch(patchUserDetails({ id, value: { wallet: wallet + 150 } }));
        } else {
          dispatch(setIsCaught(false));
        }
      } else {
        if (percentage <= 15) {
          dispatch(setIsCaught(true));
          dispatch(patchUserDetails({ id, value: { wallet: wallet + 600 } }));
        } else {
          dispatch(setIsCaught(false));
        }
      }
    } else {
      dispatch(setIsCaught(true));
      if (pokemon <= 399) {
        dispatch(patchUserDetails({ id, value: { wallet: wallet + 75 } }));
      } else if (pokemon <= 799) {
        dispatch(patchUserDetails({ id, value: { wallet: wallet + 150 } }));
      } else {
        dispatch(patchUserDetails({ id, value: { wallet: wallet + 600 } }));
      }
    }
  };

  return { catchPokemon };
};

export default useCatchPokemon;
