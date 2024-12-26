import React, { useState } from "react";

function Question({ id, title, info }) {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="my-7 shadow-xl py-2 border px-5 w-full">
      <div className=" flex flex-row items-center justify-between">
        <p className="">{title}</p>
        <button
          onClick={handleClick}
          className="rounded-full bg-green-400 px-3 py-1 text-lg font-bold shadow text-white"
        >
          {showMore && "-"}
          {!showMore && "+"}
        </button>
      </div>
      <p className="text-[rgba(0,0,0,0.7)] text-sm">
        {showMore && info.substring(0)}
        {!showMore && info.substring(0, 0)}
      </p>
    </div>
  );
}

export default Question;
