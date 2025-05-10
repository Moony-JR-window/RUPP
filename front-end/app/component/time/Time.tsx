'use client'
import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second:"2-digit",
      });
      setTime(formattedTime);
    };

    updateTime(); // Initialize immediately
    const timer = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <span className="text-white ">{time}</span>
    </div>
  );
}
