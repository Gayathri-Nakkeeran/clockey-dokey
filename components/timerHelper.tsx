import { RefObject } from "react";
type propsey = {
  clockSpanRef: RefObject<HTMLDivElement>;
  timeZone: string;
};
export const updateClockTime = (props: propsey) => {
  console.log("props", props.timeZone);
  let timezone;
  if (props.clockSpanRef?.current instanceof HTMLElement) {
    // timezone = props.clockSpanRef.current.dataset.timezone;
    let time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: props.timeZone,
    });
    props.clockSpanRef.current.textContent = time;
  }
};
