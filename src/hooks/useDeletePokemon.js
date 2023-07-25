import { useDispatch } from "react-redux";
import { deletePokemon, setLastRelease } from "../features/userSlice";

const useDeletePokemon = () => {
  const dispatch = useDispatch();

  const releasePoke = (id, nickname) => {
    dispatch(setLastRelease(nickname));
    dispatch(deletePokemon(id));
  };

  return { releasePoke };
};

export default useDeletePokemon;
