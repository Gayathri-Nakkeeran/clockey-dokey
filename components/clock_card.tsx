"use client";
type propsType = {
  place: string;
  timeZone: string;
};
import { useState, useEffect, useRef } from "react";
import { updateClockTime } from "./timerHelper";
const ClockCard = (props: propsType) => {
  const [isLoading, setIsLoading] = useState(true);
  const clockSpanRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (clockSpanRef.current) {
      setIsLoading(false);
      setInterval(updateClockTime, 1000, {
        clockSpanRef,
        timeZone: props.timeZone,
      });
    } else return;
  }, []);

  return (
    !isLoading && (
      <div className="m-2 lg:m-4 py-16 border border-zinc-500 border-1 rounded-md  shadow-blue-500 w-96 md:w-64 lg:w-96 ">
        <p className="text-center font-semibold ">
          <span className="inline-block pr-4 text-2xl text-white">
            {props.place}:
          </span>
          <span
            ref={clockSpanRef}
            className="clock px-3 py-2 border  border-zinc-500 rounded-md shadow-zinc-500 shadow text-white"
            data-timezone={props.timeZone}
          ></span>
        </p>
      </div>
    )
  );
};

export default ClockCard;
