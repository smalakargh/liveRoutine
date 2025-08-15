import { useState } from "react";
import { DAYS } from "../constants/days";
import { formatTime12 } from "../utils/time";

export default function FullRoutineViewer({ schedule }) {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const sessions = schedule[selectedDay] || [];
  const [open, setOpen] = useState(false);
  const Dialog = () => {
  setOpen(prev => !prev);
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50); 
};


  return (
  <div className="no-scroll no-scrollbar">
    <div className="flex items-center justify-center relative">
      <button className="bubbleeffectbtn" type="button" onClick={Dialog}>
        <style jsx>{`
          .bubbleeffectbtn {
            min-width: 130px;
            height: 40px;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            border-radius: 25px;
            border: none;
            background: linear-gradient(45deg, #212529, #343a40);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1;
            overflow: hidden;
          }
          .bubbleeffectbtn:before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
            transform: rotate(45deg);
            transition: all 0.5s ease;
            z-index: -1;
          }
          .bubbleeffectbtn:hover:before {
            top: -100%;
            left: -100%;
          }
          .bubbleeffectbtn:after {
            border-radius: 25px;
            position: absolute;
            content: '';
            width: 0;
            height: 100%;
            top: 0;
            z-index: -1;
            box-shadow:
              inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
              7px 7px 20px 0px rgba(0, 0, 0, 0.1),
              4px 4px 5px 0px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            background: linear-gradient(45deg, #343a40, #495057);
            right: 0;
          }
          .bubbleeffectbtn:hover:after {
            width: 100%;
            left: 0;
          }
          .bubbleeffectbtn:active {
            top: 2px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            background: linear-gradient(45deg, #212529, #343a40);
          }
          .bubbleeffectbtn span {
            position: relative;
            z-index: 2;
          }
        `}</style>
        <span className="text-sm font-medium mb-8">Full Routine</span>
      </button>
   </div>
    { open && (
        <main className="fixed top-0 left-0 w-full h-full flex justify-center items-start pt-12 z-50 backdrop-blur-md bg-opacity-30">
    <div className="w-[40vh] bg-white rounded-lg shadow-md px-7 py-10 text-sm relative animate-fadeIn">
      <div className="absolute right-3 top-3 bg-red-400 text-white px-2 py-1 rounded-full font-extrabold cursor-pointer" onClick={Dialog}>X</div>
      <div className="text-lg font-semibold mb-2 text-purple-600 text-center">
        📅 Full Routine Viewer
      </div>

      {/* Day buttons */}
      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        {DAYS.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              selectedDay === day
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Routine list */}
      {sessions.length === 0 ? (
        <div className="text-gray-500 text-center">No classes scheduled for {selectedDay}.</div>
      ) : (
        <ul className="space-y-2">
          {sessions.map((s, i) => (
            <li key={i} className="flex flex-col">
              <span className="font-medium text-gray-800">
                {s.type === "break" ? "🧘 Break" : s.subject}
              </span>
              <span className="text-gray-500">
                {formatTime12(s.start)} — {formatTime12(s.end)}
                {s.code ? ` • ${s.code}` : ""}
                {s.teacher ? ` • ${s.teacher}` : ""}
                {s.room ? ` • ${s.room}` : ""}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
    </main> 
    )}
    </div>
  );
}
