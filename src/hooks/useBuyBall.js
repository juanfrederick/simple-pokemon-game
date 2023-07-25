import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchUserDetails } from "../features/userSlice";

const useBuyBall = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const { id, basicBall, greatBall, masterBall, wallet } = useSelector(
    (store) => store.user.details
  );

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const confirmPayment = (ball, price) => {
    if (ball === "The Poke Ball") {
      dispatch(
        patchUserDetails({
          id,
          value: {
            basicBall: basicBall + Number(value),
            wallet: wallet - price * Number(value),
          },
        })
      );
    } else if (ball === "The Great Ball") {
      dispatch(
        patchUserDetails({
          id,
          value: {
            greatBall: greatBall + Number(value),
            wallet: wallet - price * Number(value),
          },
        })
      );
    } else {
      dispatch(
        patchUserDetails({
          id,
          value: {
            masterBall: masterBall + Number(value),
            wallet: wallet - price * Number(value),
          },
        })
      );
    }
  };

  return { value, changeValue, confirmPayment };
};

export default useBuyBall;
