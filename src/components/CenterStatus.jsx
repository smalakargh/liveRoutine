import { formatHM, formatTime12 } from "../utils/time";

function formatHMS(ms, showDays) {
  const totalSeconds = Math.floor(ms / 1000);
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return showDays && d > 0
    ? `${d}d ${h}h ${m}m ${s}s`
    : `${h + d * 24}h ${m}m ${s}s`;
}

export default function CenterStatus({
  now,
  todayName,
  current,
  upcoming,
  upcomingDayName,
  upcomingDate,
  holidayName
}) {
  // 🎉 Holiday handling first
  if (holidayName) {
    return (
      <div className="w-full h-full flex flex-col rounded-b-lg bg-purple-400 items-center justify-center text-center px-4 gap-3">
        <div className="text-3xl font-bold text-white drop-shadow">
          {holidayName}
        </div>
        <div className="text-white opacity-90 text-lg">
          🎉 No classes today!
        </div>
        <div className="text-white opacity-80 italic text-sm">
          “A day to rest, reflect, and celebrate!”
        </div>
      </div>
    );
  }

  // Normal day countdown logic
  let statusLabel = "No class";
  let countdownMs = 0;
  let isNextDay = false;

  if (current && upcomingDate) {
    statusLabel = current.type === "break" ? "Break ends in" : "Ends in";
    countdownMs = Math.max(0, upcomingDate - now);
  } else if (upcoming && upcomingDate) {
    const isToday = upcomingDayName === todayName;
    isNextDay = !isToday;
    statusLabel =
      upcoming.type === "break"
        ? isNextDay
          ? "Next day break in"
          : "Break starts in"
        : isNextDay
        ? "Next day class in"
        : "Starts in";
    countdownMs = Math.max(0, upcomingDate - now);
  }

  const weekend = todayName === "Saturday" || todayName === "Sunday";

  return (
    <div className="w-full h-full flex flex-col rounded-b-lg bg-purple-400 items-center justify-center text-center px-4 gap-2">
      <div className="text-sm uppercase tracking-wide text-white">{statusLabel}</div>

      {countdownMs > 0 && (
        <>
          <div className="text-4xl font-bold tabular-nums text-white">
            {formatHM(Math.floor(countdownMs / 60000))}
          </div>
          <div className="text-sm font-mono text-white opacity-80">
            {formatHMS(countdownMs, weekend)}
          </div>
        </>
      )}

      <div className="text-xs text-white opacity-80">
        {current
          ? `${formatTime12(current.start)} — ${formatTime12(current.end)}`
          : ""}
      </div>

      {isNextDay && upcoming && (
        <>
          <div className="text-[12px] text-white opacity-80">
            Next class on <span className="font-semibold">{upcomingDayName}</span>
          </div>
          <main className="text-[12px] text-white opacity-80">
            <div>
              {`${formatTime12(upcoming.start)} — ${formatTime12(upcoming.end)}`}
            </div>
            <div>{upcoming.subject}</div>
          </main>
        </>
      )}

      {!current && !upcoming && (
        <div className="text-sm text-white opacity-80">
          🎉 You’re free. Nothing scheduled.
        </div>
      )}
    </div>
  );
}
