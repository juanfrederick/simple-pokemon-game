import React, { useEffect } from "react";
import BallButton from "../Element/BallButton";
import Button from "../Element/Button";
import { useSelector } from "react-redux";
import usePokeball from "../../hooks/usePokeball";
import useCatchPokemon from "../../hooks/useCatchPokemon";

function ChooseBall() {
  const { basicBall, greatBall, masterBall } = useSelector(
    (store) => store.user.details
  );

  const { ballChosed } = useSelector((store) => store.userInput);
  const { normalBallClicked, greatBallClicked, masterBallClicked } =
    usePokeball();

  const { catchPokemon } = useCatchPokemon();

  return (
    <div className="flex flex-col gap-5 flex-1">
      <h3 className="font-bold">Chose your Poke Ball</h3>
      <div className="flex flex-col gap-3">
        <BallButton
          img="/image/ball.png"
          text="Poke Ball"
          value={basicBall}
          classname={`${
            basicBall !== 0 ? "cursor-pointer" : "opacity-40 cursor-default"
          }
          ${ballChosed === "normal" ? "border-blue-600" : undefined}
          `}
          onclick={basicBall !== 0 ? normalBallClicked : undefined}
        />
        <BallButton
          img="/image/great.png"
          text="Great Ball"
          value={greatBall}
          classname={`${
            greatBall !== 0 ? "cursor-pointer" : "opacity-40 cursor-default"
          }
          ${ballChosed === "great" ? "border-blue-600" : undefined}
          `}
          onclick={greatBall !== 0 ? greatBallClicked : undefined}
        />
        <BallButton
          img="/image/master.png"
          text="Master Ball"
          value={masterBall}
          classname={`${
            masterBall !== 0 ? "cursor-pointer" : "opacity-40 cursor-default"
          }
          ${ballChosed === "master" ? "border-blue-600" : undefined}
          `}
          onclick={masterBall !== 0 ? masterBallClicked : undefined}
        />
      </div>
      <Button
        text="Catch a Pokemon"
        classname={!ballChosed ? "opacity-40" : undefined}
        disabled={!ballChosed ? true : false}
        onclick={async () => {
          await catchPokemon();
        }}
      />
    </div>
  );
}

export default ChooseBall;
