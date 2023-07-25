import { useDispatch } from "react-redux";
import { choseBall } from "../features/userInputSlice";

const usePokeball = () => {
  const dispatch = useDispatch();

  const normalBallClicked = () => {
    dispatch(choseBall("normal"));
  };

  const greatBallClicked = () => {
    dispatch(choseBall("great"));
  };

  const masterBallClicked = () => {
    dispatch(choseBall("master"));
  };

  return { normalBallClicked, greatBallClicked, masterBallClicked };
};

export default usePokeball;
