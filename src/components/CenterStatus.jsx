import { DAYS } from "../constants/days";
import { formatHM } from "../utils/time";

export default function CenterStatus({
  now,
  nowMin,
  todayName,
  current,
  upcoming,
  upcomingDayName,
}) {
  let statusLabel = "No class";
  let countdownMin = 0;

  if (current) {
    statusLabel = current.type === "break" ? "Break ends in" : "Ends in";
    countdownMin = Math.max(0, current.endMin - nowMin);
  } else if (upcoming) {
    statusLabel = upcoming.type === "break" ? "Break starts in" : "Starts in";
    const isToday = upcomingDayName === todayName;

    if (isToday) {
      countdownMin = Math.max(0, upcoming.startMin - nowMin);
    } else {
      const todayIdx = DAYS.indexOf(todayName);
      const targetIdx = DAYS.indexOf(upcomingDayName);
      let hops = targetIdx - todayIdx;
      if (hops <= 0) hops += DAYS.length;

      const next = new Date(now);
      const [h, m] = upcoming.start.split(":").map(Number);
      next.setDate(now.getDate() + hops);
      next.setHours(h, m, 0, 0);

      countdownMin = Math.max(0, Math.ceil((next - now) / 60000));
    }
  }

  return (
    <div className="w-full h-full flex flex-col rounded-b-lg bg-purple-400 items-center justify-center text-center px-4 gap-2">
      <div className="text-sm uppercase tracking-wide text-gray-500">{statusLabel}</div>
      <div className="text-4xl font-bold tabular-nums">{formatHM(countdownMin)}</div>
      <div className="text-xs text-gray-500">
        {current
          ? `${current.start} — ${current.end}`
          : upcoming
          ? `${upcoming.start} — ${upcoming.end}`
          : ""}
      </div>
      {!current && !upcoming && (
        <div className="text-sm text-gray-600">You’re free. Nothing scheduled.</div>
      )}
    </div>
  );
}
