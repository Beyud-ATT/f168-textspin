import dayjs from "dayjs";
import { useAnimate } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = ({ time = dayjs("2025-06-15T23:59:59").toISOString() }) => {
  return (
    <div className=" text-[#7A190D] flex flex-col items-center">
      <div
        className={`font-bold font-iciel uppercase lg:!text-[15px] md:!text-[12px] !text-[8px]`}
      >
        THỜI GIAN KẾT THÚC CÒN
      </div>
      <div className="flex items-center md:text-xl text-[10px] font-bd-street-sign -translate-y-1">
        <CountdownItem unit="Day" timeToCount={time} />
        <span className="mx-1">-</span>
        <CountdownItem unit="Hour" text=":" timeToCount={time} />
        <CountdownItem unit="Minute" text=":" timeToCount={time} />
        <CountdownItem unit="Second" timeToCount={time} />
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text, timeToCount }) => {
  const { ref, time } = useTimer({ unit, timeToCount });

  return (
    <div className="w-full">
      <div className="flex items-center w-full overflow-hidden">
        <span className="" ref={ref}>
          {time}
        </span>
        {text && <span className="">{text}</span>}
      </div>
    </div>
  );
};

export default Countdown;

// NOTE: Framer motion exit animations can be a bit buggy when repeating
// keys and tabbing between windows. Instead of using them, we've opted here
// to build our own custom hook for handling the entrance and exit animations
export const useTimer = ({ unit, timeToCount = 0 }) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef(null);
  const timeRef = useRef(timeToCount);
  const [time, setTime] = useState(0);

  const handleCountdown = useCallback(async () => {
    const end = new Date(timeToCount || Date.now());
    const now = new Date();
    const distance = +end - +now;
    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    newTime = (newTime >= 0 ? newTime : 0)
      .toString()
      .padStart(unit === "Day" ? 3 : 2, "0");

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  }, [animate, ref, timeToCount, unit]);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, [timeToCount, handleCountdown]);

  return { ref, time };
};
