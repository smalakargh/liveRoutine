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
    <div className="w-full bg-purple-400 h-full text-white px-4 py-3 flex flex-col justify-center">
      <div className="text-sm opacity-90">{headerText}</div>
      <div className="text-xl font-semibold pt-6 pb-2">
        {current
          ? current.type === "break"
            ? "Break Time"
            : current.subject || current.type.toUpperCase()
          : noMoreToday
          ? (<div className="text-[28px] text-center">No More Classes Today !</div>)
          : "No ongoing class"}
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
