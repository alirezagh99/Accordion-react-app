import React from "react";
import Question from "./Question";
function Accordion() {
  return (
    <section className="w-1/2 m-auto flex flex-col items-center bg-slate-300 mt-20">
      <h1 className="text-2xl font-semibold mt-3 mb-5">Questions</h1>
      <div className="w-full">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </section>
  );
}

export default Accordion;
