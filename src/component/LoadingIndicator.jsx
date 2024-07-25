import React from 'react';
import { Commet } from 'react-loading-indicators'; // Ensure this import is correct based on your package

const Loading = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-xs m-auto  bg-white rounded-lg ">
      <Commet color="rgb(49,46,129)" size="large" text="" textColor="" />
      </div>
    </div>
  );
};

export default Loading;
