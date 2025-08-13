import { useMemo } from "react";
import { schedule } from "./data/schedule";
import TopBar from "./components/TopBar";
import CenterStatus from "./components/CenterStatus";
import BottomBar from "./components/BottomBar";
import { useTicker } from "./hooks/useTicker";
import { findTodayAndNext } from "./utils/findTodayAndNext";
import Footer from "./components/Rou-Footer";
import Navbar from "./components/Rou-Navbar";


export default function App() {
  const now = useTicker(1000);

  const { todayName, nowMin, current, upcoming, upcomingDayName } = useMemo(
    () => findTodayAndNext(schedule, now),
    [now]
  );

  return (
    <>
    <Navbar/>
    <div className="bg-[#b5b2b5] min-h-screen flex flex-col justify-center items-center p-4 poppins">
      <div className="bg-[#b5b2b5] h-[70vh] w-[40vh] rounded-lg overflow-hidden flex flex-col">
      <div className="border-2 border-white flex flex-col rounded-lg overflow-hidden h-full w-full mb-3">
        <TopBar
          now={now}
          current={current}
          upcomingDayName={upcomingDayName}
          todayName={todayName}
        />
  
        <CenterStatus
          now={now}
          nowMin={nowMin}
          todayName={todayName}
          current={current}
          upcoming={upcoming}
          upcomingDayName={upcomingDayName}
        />
      </div>
        <BottomBar upcoming={upcoming} upcomingDayName={upcomingDayName} todayName={todayName} />
      </div>
    </div>
      <Footer/>
    </>
    
  );
}

