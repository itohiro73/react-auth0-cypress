import React from "react";
import spinner from '../img/spinner.svg'

const Loading = () => {
  return (
    <div className="flex flex-col m-8 items-center">
      <img className="w-24" src={spinner} />
      <p className="ml-2 mt-2">Loading...</p>
    </div>
  );
};

export default Loading;
