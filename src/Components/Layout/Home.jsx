import React from "react";
import OverviewFragment from "../Fragments/OverviewFragment";
import Button from "../Element/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const { username } = useSelector((store) => store.user.details);

  return (
    <div className=" flex flex-col flex-1 gap-3 bg-gray-100 p-3 pt-28 min-h-screen">
      <h1 className="font-bold text-2xl">Welcome, {username}</h1>
      <div className="flex items-center justify-between bg-white p-3 rounded-md">
        <h2 className="font-bold">Start your Adventure Now!</h2>
        <Link to="/catch">
          <Button text="Catch a Pokemon" classname="px-2" />
        </Link>
      </div>
      <OverviewFragment />
    </div>
  );
}

export default Home;
