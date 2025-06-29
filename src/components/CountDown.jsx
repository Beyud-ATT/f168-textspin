import { Flex } from "antd";
import dayjs from "dayjs";
import { useAnimate } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = ({ time = dayjs("2025-06-15T23:59:59").toISOString() }) => {
  return (
    <div className=" text-[#7A190D] flex items-center justify-center gap-2">
      <div
        className={`font-bold font-iciel uppercase lg:!text-[15px] !text-[8px]`}
      >
        THỜI GIAN KẾT THÚC CÒN
      </div>
      <div className="flex items-center font-bd-street-sign md:gap-2 gap-1">
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
    <>
      <div className="lg:w-[63px] w-[32px] max-[376px]:w-[20px] h-fit lg:p-3 p-1 max-[376px]:p-0.5 bg-gradient-to-b from-[#D7603E] to-[#B7212C] rounded-[10px]">
        <Flex
          vertical
          justify="center"
          align="center"
          className="w-full h-full"
        >
          <span
            ref={ref}
            className="text-[#FFF3CD] font-bold font-iciel lg:!text-3xl !text-[10px] max-[376px]:!text-[8px] translate-y-0.5"
          >
            {time}
          </span>
        </Flex>
      </div>
      {text && (
        <span className="lg:!text-3xl !text-[12px] max-[376px]:!text-[10px]">
          {text}
        </span>
      )}
    </>
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
