import React from "react";

function DashboardHeader({ heading, text, username, classname }) {
  return (
    <div className={`${classname}`}>
      <h1 className="font-bold text-2xl">{heading}</h1>
      <p className="font-semibold text-sm text-gray-500">
        {text} {username}.
      </p>
    </div>
  );
}

export default DashboardHeader;
