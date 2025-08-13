import { DAYS } from "../constants/days";
import { formatHM, formatTime12 } from "../utils/time";

function formatHMS(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${h}h ${m}m ${s}s`;
}

export default function CenterStatus({
  now,
  todayName,
  current,
  upcoming,
  upcomingDayName,
}) {
  let statusLabel = "No class";
  let countdownMs = 0;
  let isNextDay = false;

  if (current) {
    statusLabel = current.type === "break" ? "Break ends in" : "Ends in";
    const end = new Date(now);
    const [h, m] = current.end.split(":").map(Number);
    end.setHours(h, m, 0, 0);
    countdownMs = Math.max(0, end - now);
  } else if (upcoming) {
    const isToday = upcomingDayName === todayName;
    isNextDay = !isToday;

    statusLabel = upcoming.type === "break"
      ? isNextDay ? `Next day break in` : `Break starts in`
      : isNextDay ? `Next day class in` : `Starts in`;

    const next = new Date(now);
    const [h, m] = upcoming.start.split(":").map(Number);

    if (isToday) {
      next.setHours(h, m, 0, 0);
    } else {
      const todayIdx = DAYS.indexOf(todayName);
      const targetIdx = DAYS.indexOf(upcomingDayName);
      let hops = targetIdx - todayIdx;
      if (hops <= 0) hops += DAYS.length;
      next.setDate(now.getDate() + hops);
      next.setHours(h, m, 0, 0);
    }

    countdownMs = Math.max(0, next - now);
  }

  return (
    <div className="w-full h-full flex flex-col rounded-b-lg bg-purple-400 items-center justify-center text-center px-4 gap-2">
      <div className="text-sm uppercase tracking-wide text-white">{statusLabel}</div>

      <div className="text-4xl font-bold tabular-nums text-white">
        {formatHM(Math.floor(countdownMs / 60000))}
      </div>

      <div className="text-sm font-mono text-white opacity-80">
        {formatHMS(countdownMs)}
      </div>

      <div className="text-xs text-white opacity-80">
        {current
          ? `${formatTime12(current.start)} — ${formatTime12(current.end)}`
          : upcoming
          ? `${formatTime12(upcoming.start)} — ${formatTime12(upcoming.end)}`
          : ""}
      </div>

      {isNextDay && (
        <div className="text-xs text-white opacity-80">
          Next class on <span className="font-semibold">{upcomingDayName}</span>
        </div>
      )}

      {!current && !upcoming && (
        <div className="text-sm text-white opacity-80">You’re free. Nothing scheduled.</div>
      )}
    </div>
  );
}
