import { RefObject } from "react";
type propsey = {
  clockSpanRef: RefObject<HTMLDivElement>;
  timeZone: string;
};
export const updateClockTime = (props: propsey) => {
  if (props.clockSpanRef?.current instanceof HTMLElement) {
    let time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: props.timeZone,
    });
    props.clockSpanRef.current.textContent = time;
  }
};

export const getUserData = async (id: string) => {
  console.log("id from server", id);
  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return userData.json();
};
