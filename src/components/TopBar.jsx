import { BsCalendar2Date } from "react-icons/bs";
import { formatTime12 } from "../utils/time";

export default function TopBar({ now, current, upcomingDayName, todayName }) {
  const headerText = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(now);

  const noMoreToday =
    !current && upcomingDayName && upcomingDayName !== todayName;

  return (
    <div className="w-full bg-purple-400 h-full text-white px-4 py-3 flex flex-col justify-center relative">
      <div className="w-2 h-2 bg-red-500 rounded-full absolute top-4 right-4 z-4"></div>
      <div className="w-3 h-3 bg-red-400 rounded-full z-0 animate-ping absolute top-[15px] right-[14px]"></div>
      <div className="text-sm opacity-90 flex items-center gap-2"><BsCalendar2Date />{headerText}</div>
      <div className="text-xl text-center text-[25px] font-semibold pt-6 pb-2">
        {current
          ? current.type === "break"
            ? "Break Time"
            : current.subject || current.type.toUpperCase()
          : noMoreToday
          ? (<div className="text-[28px] text-center">No More Classes Today !</div>)
          : (<div className="text-center text-[28px]">No ongoing class</div>)}
      </div>
      {current && current.type !== "break" && (
        <div className="text-xs opacity-90">
          {formatTime12(current.start)} — {formatTime12(current.end)}
          {current.code ? ` • ${current.code}` : ""}
          {current.teacher ? ` • ${current.teacher}` : ""}
          {current.room ? ` • ${current.room}` : ""}
        </div>
      )}
    </div>
  );
}
