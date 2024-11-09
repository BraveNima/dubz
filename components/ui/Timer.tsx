"use client";

import { formatTimeToMMSS } from "@/utils/handlers";
import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds]);

  return <span>{formatTimeToMMSS(seconds)}</span>;
}
