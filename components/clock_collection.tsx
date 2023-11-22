import ClockCard from "@/components/clock_card";
export default function ClockCollection() {
  
  return (
    <div className="grid md:grid-cols-3 gap-y-10 justify-items-center justify-evenly  my-12">
      <ClockCard place={"NewYork"} timeZone={"America/New_York"} />
      <ClockCard place={"Shangai"} timeZone={"Asia/Shanghai"} />
      <ClockCard place={"Berlin"} timeZone={"Europe/Berlin"} />
      <ClockCard place={"Qatar"} timeZone={"Asia/Qatar"} />
      <ClockCard place={"India"} timeZone={"Asia/Kolkata"} />
      <ClockCard place={"Singapore"} timeZone={"Asia/Singapore"} />
    </div>
  );
}
