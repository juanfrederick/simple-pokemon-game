import React from "react";
import ShopCard from "../Element/ShopCard";

function ShopList() {
  return (
    <div className="flex flex-col justify-between items-center gap-4 lg:flex-row lg:items-start">
      <ShopCard
        img="/image/colorBall.png"
        ball="The Poke Ball"
        price={50}
        first="Mass-produced and reliable."
        classname="bg-slate-200"
      />
      <ShopCard
        img="/image/colorGreat.png"
        ball="The Great Ball"
        price={175}
        first="It lives by it's name, 'Great'"
        second="performace in the field."
        classname="bg-blue-300"
      />
      <ShopCard
        img="/image/colorMaster.png"
        ball="The Master Ball"
        price={500}
        first="No Pokemon can handle the"
        second="power this Poke Ball has."
        classname="bg-purple-300"
      />
    </div>
  );
}

export default ShopList;
