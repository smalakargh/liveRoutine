const IST = "Asia/Kolkata";

export function nowIST() {
  // Create a Date representing the current time in IST by formatting and re-parsing.
  const s = new Date().toLocaleString("en-US", { timeZone: IST });
  return new Date(s);
}

export function dateKeyIST(d = nowIST()) {
  // Returns "YYYY-MM-DD" in IST
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}


export function formatTime12(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const date = new Date();
  date.setHours(h, m, 0, 0);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: IST,
  }).format(date);
}

export function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function minutesSinceMidnightIST(d = nowIST()) {
  return d.getHours() * 60 + d.getMinutes();
}

export function dayNameIST(d = nowIST()) {
  return d.toLocaleDateString("en-US", { weekday: "long", timeZone: IST });
}

export function formatHM(totalMinutes) {
  if (totalMinutes <= 0) return "0h 0m";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

export function formatHMS(ms) {
  if (ms <= 0) return "00:00";
  const s = Math.floor(ms / 1000);
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

// Find current and next session for a given day list
export function getSessionsForNow(daySessions, nowMin) {
  const withMinutes = daySessions
    .map((s) => ({
      ...s,
      startMin: toMinutes(s.start),
      endMin: toMinutes(s.end),
    }))
    .sort((a, b) => a.startMin - b.startMin);

  const current =
    withMinutes.find((s) => nowMin >= s.startMin && nowMin < s.endMin) || null;
  const upcoming = withMinutes.find((s) => s.startMin > nowMin) || null;
  return { current, upcoming };
}
