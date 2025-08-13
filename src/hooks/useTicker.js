import { useEffect, useState } from "react";
import { nowIST } from "../utils/time";

export function useTicker(intervalMs = 1000) {
  const [now, setNow] = useState(nowIST());
  useEffect(() => {
    const id = setInterval(() => setNow(nowIST()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}
