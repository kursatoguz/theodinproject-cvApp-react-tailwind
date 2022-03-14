import React from "react";

const Progressbar = ({ step }) => {
  return (
    <div className="h-2 w-full bg-gray-300">
      <div
        style={{ width: `${step * 20}%` }}
        className="h-full bg-yellow-400 transition-all duration-300 ease-in-out"
      ></div>
    </div>
  );
};

export default Progressbar;
