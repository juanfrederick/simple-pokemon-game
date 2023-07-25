import React, { useState } from "react";
import Button from "./Button";
import useDeletePokemon from "../../hooks/useDeletePokemon";
import useBuyBall from "../../hooks/useBuyBall";
import { useSelector } from "react-redux";

function ReleasePopUp({ id, closePopup, nickname }) {
  const { releasePoke } = useDeletePokemon();
  return (
    <>
      <div className="font-semibold text-gray-500 my-4">
        <p>Are you sure you want to release {nickname}?</p>
        <p>This action is irreversible.</p>
      </div>
      <div className="flex gap-4 ">
        <Button
          text="Yes"
          black={true}
          classname=" bg-white border-2 font-bold"
          onclick={() => {
            releasePoke(id, nickname);
            closePopup();
          }}
        />
        <Button text="No" classname="font-bold" onclick={closePopup} />
      </div>
    </>
  );
}

function FirstBuyPopUp(props) {
  const { ball, changeValue, value, price, wallet, setFirst, setSecond } =
    props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-gray-500">
          You're going to purchase:{" "}
          <span className="font-bold">{ball.substring(4)}</span>.
        </p>
        <p className="font-semibold text-gray-500">How much do you want?</p>
      </div>
      <input
        type="number"
        className="bg-gray-200 rounded-lg p-1"
        value={value}
        onChange={changeValue}
      />
      <Button
        text="Confirm"
        disabled={value <= 0 || value * price > wallet ? true : false}
        classname={
          value <= 0 || value * price > wallet ? "opacity-40" : undefined
        }
        onclick={() => {
          setFirst(false);
          setSecond(true);
        }}
      />
    </div>
  );
}

function SecondBuyPopUp(props) {
  const { value, ball, price, confirmPayment, setThird, setSecond } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-gray-500">
          You're going to purchase: {value}{" "}
          <span className="font-bold">{ball.substring(4)}</span>.
        </p>
        <p className="font-semibold text-gray-500">That will cost you...</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src="/image/wallet.png" alt="wallet" className="object-contain" />
        <h1 className="text-3xl font-semibold">{price * value}</h1>
      </div>
      <Button
        text="Checkout"
        onclick={() => {
          confirmPayment(ball, price);
          setSecond(false);
          setThird(true);
        }}
      />
    </div>
  );
}

function ThirdBuyPopUp(props) {
  const { value, ball, closePopup } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-gray-500">
          Thank you for your purchase!
        </p>
        <p className="font-semibold text-gray-500">
          These items has been added to your inventory:
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <img
          src={`/image/${
            ball === "The Poke Ball"
              ? "ball.png"
              : ball === "The Great Ball"
              ? "great.png"
              : "master.png"
          }`}
          alt="ball"
          className="object-contain"
        />
        <h1 className="text-3xl font-semibold">{value}</h1>
      </div>
      <Button
        text="Close"
        onclick={() => {
          closePopup();
        }}
      />
    </div>
  );
}

function BuyPopUp({ ball, price, closePopup, third, setThird }) {
  const { value, changeValue, confirmPayment } = useBuyBall();
  const { wallet } = useSelector((store) => store.user.details);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  return (
    <>
      {first && (
        <FirstBuyPopUp
          ball={ball}
          value={value}
          wallet={wallet}
          changeValue={changeValue}
          setFirst={setFirst}
          setSecond={setSecond}
          price={price}
        />
      )}
      {second && (
        <SecondBuyPopUp
          ball={ball}
          value={value}
          price={price}
          confirmPayment={confirmPayment}
          setSecond={setSecond}
          setThird={setThird}
        />
      )}
      {third && (
        <ThirdBuyPopUp value={value} ball={ball} closePopup={closePopup} />
      )}
    </>
  );
}

function PopUp(props) {
  const { nickname, id, setshowpopup, pokepage, text, ball, price } = props;

  const [third, setThird] = useState(false);

  const closePopup = () => {
    setshowpopup(false);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-800 bg-opacity-25 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl flex flex-col gap-4 w-[80%] max-w-md">
        <div className="flex gap-2 pb-7 border-b-2 items-center">
          <span className="bg-orange-200 w-3 h-6 rounded-md"></span>
          <h2 className="font-bold text-xl">{third ? "Thank you!" : text}</h2>
          <div
            className="flex items-center bg-slate-200 p-2 rounded-full ml-auto cursor-pointer"
            onClick={closePopup}
          >
            <img src="/image/close.png" alt="close" />
          </div>
        </div>
        {pokepage && (
          <ReleasePopUp id={id} closePopup={closePopup} nickname={nickname} />
        )}
        {!pokepage && (
          <BuyPopUp
            ball={ball}
            price={price}
            closePopup={closePopup}
            third={third}
            setThird={setThird}
          />
        )}
      </div>
    </div>
  );
}

export default PopUp;
