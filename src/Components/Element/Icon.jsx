import React from "react";

function Icon({ img, alt, value, side, logout, className }) {
  return (
    <div
      className={`flex gap-1 items-center ${className} transition-all ease-in-out ${
        side ? "p-2 hover:bg-slate-200 rounded-lg cursor-pointer" : undefined
      } ${
        logout
          ? "mt-auto border-t-2 py-5 px-2 rounded-b-lg hover:bg-slate-200 cursor-pointer"
          : undefined
      }`}
      onClick={logout}
    >
      <img src={img} alt={alt} />
      <p>{value}</p>
    </div>
  );
}

export default Icon;
