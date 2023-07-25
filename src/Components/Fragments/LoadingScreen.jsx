import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../features/pokemonSlice";

function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);

    if (loading) {
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 3000);
    }
  }, [loading]);

  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-[70%] md:w-[35%]"
      />
      {!loading && (
        <h1 className="font-bold text-2xl">Looking for a pokemon...</h1>
      )}
      {loading && (
        <h1 className="font-bold text-2xl">Catching the pokemon...</h1>
      )}
    </div>
  );
}

export default LoadingScreen;
