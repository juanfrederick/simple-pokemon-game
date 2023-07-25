import React from "react";
import DashboardHeader from "../Fragments/DashboardHeader";
import ShopList from "../Fragments/ShopList";

function ShopLayout() {
  return (
    <div className="flex-1 bg-gray-100 pt-20 min-h-screen pb-3 overflow-hidden">
      <div className="w-full h-72 bg-center bg-cover bg-[url('/image/storeBg.png')]"></div>
      <div className="bg-white w-[90%] mx-auto mt-[-8rem] p-10 rounded-lg flex flex-col gap-5">
        <DashboardHeader
          username="Welcome to the Pokemon Shop! Please look around and buy what you need"
          heading="The Pokemon Shop"
          classname="flex flex-col gap-2"
        />
        <ShopList />
      </div>
    </div>
  );
}

export default ShopLayout;
