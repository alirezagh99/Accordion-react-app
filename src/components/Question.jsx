import React from "react";

function Question({ id, title, info }) {
  return (
    <div className="my-7 shadow-xl py-2 border px-5  w-full">
      <div className=" flex flex-row items-center justify-between">
        <p className="">{title}</p>
        <button className=" rounded-full bg-green-400 px-3 py-1 text-lg font-bold shadow text-white">
          +
        </button>
      </div>
      <p className="text-[rgba(0,0,0,0.7)] text-sm">{info}</p>
    </div>
  );
}

export default Question;
