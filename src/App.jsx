import { useMemo } from "react";
import { schedule } from "./data/schedule";
import TopBar from "./components/TopBar";
import CenterStatus from "./components/CenterStatus";
import BottomBar from "./components/BottomBar";
import { useTicker } from "./hooks/useTicker";
import { findTodayAndNext } from "./utils/findTodayAndNext";
import Footer from "./components/Rou-Footer";
import Navbar from "./components/Rou-Navbar";
import Report from "./components/Report";
import FullRoutineViewer from "./components/FullRoutineViewer";

export default function App() {
  const now = useTicker(1000);

  const {
    todayName,
    nowMin,
    current,
    upcoming,
    upcomingDayName,
    upcomingDate,
    holidayName,
  } = useMemo(() => findTodayAndNext(schedule, now), [now]);

  return (
    <main className="relative bg-[#b5b2b5] p-2">
      <Navbar />
      <div className="bg-[#b5b2b5] flex flex-col items-center p-4 poppins gap-[80px] mb-6 relative">
        <div className="bg-[#b5b2b5] h-[70vh] w-[40vh] mt-6 rounded-lg overflow-hidden flex flex-col">
          <div className="border-2 border-white flex flex-col rounded-lg overflow-hidden h-full w-full mb-3">
            <TopBar
              now={now}
              current={current}
              upcomingDayName={upcomingDayName}
              todayName={todayName}
              holidayName={holidayName} 
            />

            <CenterStatus
              now={now}
              nowMin={nowMin}
              todayName={todayName}
              current={current}
              upcoming={upcoming}
              upcomingDayName={upcomingDayName}
              upcomingDate={upcomingDate}
              holidayName={holidayName}
            />
          </div>
          <BottomBar
            upcoming={upcoming}
            upcomingDayName={upcomingDayName}
            todayName={todayName}
          />
        </div>
        <FullRoutineViewer schedule={schedule} />
      </div>
      <Footer />
      <Report />
    </main>
  );
}
