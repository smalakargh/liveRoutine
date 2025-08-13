export default function BottomBar({ upcoming }) {
  return (
    <div className="relative w-full bg-blue-400 h-[20%] text-white px-4 py-3 rounded-t-lg shadow-xl">
      <div className="absolute inset-0 bg-white/0 pointer-events-none select-none" />
      <div className="flex flex-col justify-center h-full">
        <div className="text-xs uppercase opacity-90">Next</div>
        <div className="text-[14px] font-semibold truncate">
          {upcoming ? (upcoming.subject || upcoming.type.toUpperCase()) : "No upcoming class"}
        </div>
        <div className="text-xs opacity-90">
          {upcoming
            ? `${upcoming.start} — ${upcoming.end} ${upcoming.code ? `• ${upcoming.code}` : ""}`
            : ""}
        </div>
      </div>
    </div>
  );
}
