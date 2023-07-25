import React from "react";

function Overview({ img, text, value, classname }) {
  return (
    <div className={`flex flex-col gap-1 w-full rounded-lg p-5 ${classname}`}>
      <img src={img} alt={text + " Logo"} className="w-10" />
      <p className="font-bold text-sm">{text}</p>
      <h1 className="font-bold text-3xl">{value}</h1>
    </div>
  );
}

export default Overview;
