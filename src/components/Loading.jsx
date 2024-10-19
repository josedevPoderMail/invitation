import React from "react";

export const Loading = () => {
  return (
    <div
      className=" absolute top-0 bottom-0 left-0 right-0 w-screen h-full bg-[#AE3F54]/90 
          z-20 flex flex-col items-center justify-center"
    >
      <span class="loader"></span>
      <p className="text-center text-white font-cormorant text-2xl font-bold">
        Espera
      </p>
    </div>
  );
};
