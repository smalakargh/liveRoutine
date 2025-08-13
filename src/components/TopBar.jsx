export default function TopBar({ now, current }) {
  const headerText = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(now);

  return (
    <div className="w-full bg-purple-400 h-full text-white px-4 py-3 flex flex-col justify-center">
      <div className="text-sm opacity-90">{headerText}</div>
      <div className="text-xl font-semibold">
        {current
          ? current.type === "break"
            ? "Break Time"
            : current.subject || current.type.toUpperCase()
          : "No ongoing class"}
      </div>
      {current && current.type !== "break" && (
        <div className="text-xs opacity-90">
          {current.code ? `${current.code}` : ""}{" "}
          {current.teacher ? `• ${current.teacher}` : ""}{" "}
          {current.room ? `• ${current.room}` : ""}
        </div>
      )}
    </div>
  );
}
