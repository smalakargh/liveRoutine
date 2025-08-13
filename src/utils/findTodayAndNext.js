import { DAYS } from "../constants/days";
import { dayNameIST, minutesSinceMidnightIST, getSessionsForNow } from "./../utils/time";

export function findTodayAndNext(scheduleObj, now) {
  const todayName = dayNameIST(now);
  const today = scheduleObj[todayName] || [];
  const nowMin = minutesSinceMidnightIST(now);

  let { current, upcoming } = getSessionsForNow(today, nowMin);
  let upcomingDayName = todayName;

  if (!upcoming) {
    // roll to next day with sessions
    const idx = DAYS.indexOf(todayName);
    for (let i = 1; i <= DAYS.length; i++) {
      const name = DAYS[(idx + i) % DAYS.length];
      const nextDay = scheduleObj[name] || [];
      if (nextDay.length) {
        const pick = getSessionsForNow(nextDay, -1).upcoming || nextDay[0];
        upcoming = pick;
        upcomingDayName = name;
        break;
      }
    }
  }

  return { todayName, nowMin, current, upcoming, upcomingDayName };
}
