import { useEffect, useState } from "react";

const getCountdown = (targetDate) => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % 86400000) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % 3600000) / (1000 * 60)),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

export const useCountdown = (targetDate) => {
  const [countdown, setCountdown] = useState(() => getCountdown(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
};
