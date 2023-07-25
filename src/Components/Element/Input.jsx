import React from "react";

function Input({ type, text, id, onchange, value, disabled }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="font-bold text-sm">
        {text}
      </label>
      <input
        type={type}
        id={id}
        required
        className="bg-slate-100 rounded-md text-sm p-1"
        onChange={onchange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
