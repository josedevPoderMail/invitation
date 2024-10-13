import React, { useEffect, useState } from "react";

export const CustomCounter = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const objetiveDate = new Date("2024-11-09T18:00:00");
    const calculateTime = () => {
      const now = Date.now();
      const diference = objetiveDate - now;
      if (diference > 0) {
        const days = Math.floor(diference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (diference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((diference % (1000 * 60)) / 1000);
        setTime({ days, hours, minutes, seconds });
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(calculateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className="text-center">
        <div className="text-2xl xl:text-6xl flex items-center justify-center gap-2">
          <span className="flex flex-col items-center gap-1">
            <p className="font-bold font-cormorant text-4xl xl:text-6xl">{time.days}</p>
            <span className="text-sm xl:text-xl font-cormorant">DÍAS</span>
          </span>
          <span className="">:</span>
          <span className="flex flex-col items-center gap-1">
            <p className="font-bold font-cormorant text-4xl xl:text-6xl">{time.hours}</p>
            <span className="text-sm xl:text-xl font-cormorant">HORAS</span>
          </span>
          <span className="">:</span>
          <span className="flex flex-col items-center gap-1">
            <p className="font-bold font-cormorant text-4xl xl:text-6xl">{time.minutes}</p>
            <span className="text-sm xl:text-xl font-cormorant">MINUTOS</span>
          </span>
          <span className="">:</span>
          <span className="flex flex-col items-center gap-1">
            <p className="font-bold font-cormorant text-4xl xl:text-6xl">{time.seconds}</p>
            <span className="text-sm xl:text-xl font-cormorant">SEGUNDOS</span>
          </span>
        </div>
      </div>
    </div>
  );
};
