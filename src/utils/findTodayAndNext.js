import { dayNameIST, minutesSinceMidnightIST, getSessionsForNow, dateKeyIST } from "./../utils/time";
import { HOLIDAYS } from "../data/holiday";

export function findTodayAndNext(scheduleObj, now) {
  const todayName = dayNameIST(now);
  const todayKey = dateKeyIST(now);
  const todayIsHoliday = HOLIDAYS[todayKey] !== undefined;

  const todaySessions = todayIsHoliday ? [] : (scheduleObj[todayName] || []);
  const nowMin = minutesSinceMidnightIST(now);
  const { current, upcoming: todayUpcoming } = getSessionsForNow(todaySessions, nowMin);

  let upcoming = todayUpcoming || null;
  let upcomingDayName = todayName;
  let upcomingDate = null;
  let holidayName = todayIsHoliday ? HOLIDAYS[todayKey].name : null;

  if (current) {
    const [h, m] = current.end.split(":").map(Number);
    upcomingDate = new Date(now);
    upcomingDate.setHours(h, m, 0, 0);
  } else if (todayUpcoming) {
    const [h, m] = todayUpcoming.start.split(":").map(Number);
    upcomingDate = new Date(now);
    upcomingDate.setHours(h, m, 0, 0);
  } else {
    // Search future days until we find a non-holiday with a session
    for (let i = 1; i <= 7; i++) {
      const dateCursor = new Date(now);
      dateCursor.setDate(now.getDate() + i);
      dateCursor.setHours(0, 0, 0, 0);

      const dateKey = dateKeyIST(dateCursor);
      const name = dayNameIST(dateCursor);
      const sessions = HOLIDAYS[dateKey] ? [] : (scheduleObj[name] || []);
      if (sessions.length) {
        upcoming = sessions[0];
        upcomingDayName = name;
        const [h, m] = upcoming.start.split(":").map(Number);
        dateCursor.setHours(h, m, 0, 0);
        upcomingDate = new Date(dateCursor);
        break;
      }
    }
  }

  return {
    todayName,
    nowMin,
    current,
    upcoming,
    upcomingDayName,
    upcomingDate,
    holidayName
  };
}
