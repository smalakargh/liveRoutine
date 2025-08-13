import { formatTime12 } from "../utils/time";

export default function BottomBar({ upcoming, upcomingDayName, todayName }) {
  const isToday = upcomingDayName === todayName;
  const dayIsOver = !upcoming || !isToday;

  return (
    <div
      className={`relative w-full h-[20%] px-4 py-3 flex flex-col rounded-lg justify-center items-center ${
        dayIsOver ? "bg-green-500" : "bg-blue-400"
      } text-white`}
    >
      <div className="absolute inset-0 bg-white/0 pointer-events-none select-none" />
      {dayIsOver ? (
        <>
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGpyMGpmaHNnZmF3OWRycDI0dXU4ajl5cjYzcXl0cHZseXdnbHRpYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QAftV2ttJ0GFwCVXLu/giphy.gif"
            alt="Tired Boss Baby"
            className="mt-2 h-12 w-auto rounded"
          />
          <div className="text-center text-[12px] pt-3 font-semibold text-white">
            Enough for today. You’re done!
          </div>
        </>
      ) : (
        <>
          <div className="text-xs uppercase opacity-90">Next</div>
          <div className="text-[13px] font-semibold truncate">
            {upcoming.subject || upcoming.type.toUpperCase()}
          </div>
          <div className="text-xs opacity-90">
            {formatTime12(upcoming.start)} — {formatTime12(upcoming.end)}
            {upcoming.code ? ` • ${upcoming.code}` : ""}
          </div>
        </>
      )}
    </div>
  );
}
