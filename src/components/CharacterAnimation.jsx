import React, { useState, useEffect, useCallback } from "react";

const characters = [
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
  "f",
  "1",
  "6",
  "8",
];

const CharacterAnimation = ({ restartFlag, randomWord = "1" }) => {
  const [currentChar, setCurrentChar] = useState("?");
  const [isAnimating, setIsAnimating] = useState(true);
  const [counter, setCounter] = useState(0);
  const [blurAmount, setBlurAmount] = useState(8);

  const getRandomChar = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const speed =
        counter < 20
          ? 18
          : counter < 30
          ? 22
          : counter < 40
          ? 30
          : counter < 50
          ? 40
          : counter < 60
          ? 60
          : counter < 70
          ? 90
          : 120;

      // Adjust blur amount based on speed - more gradual
      setBlurAmount(
        counter < 20
          ? 10
          : counter < 30
          ? 8
          : counter < 40
          ? 6
          : counter < 50
          ? 4
          : counter < 60
          ? 2
          : counter < 70
          ? 1
          : 0
      );

      const timeoutId = setTimeout(() => {
        setCurrentChar(getRandomChar());
        setCounter((prevCounter) => prevCounter + 1);

        // Longer animation for smoother slowdown
        if (counter >= 75) {
          setIsAnimating(false);
          setBlurAmount(0);
          setCurrentChar(randomWord);
        }
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [counter, isAnimating, getRandomChar, randomWord]);

  const handleRestart = useCallback(() => {
    setIsAnimating(true);
    setCounter(0);
    setBlurAmount(10);
    setCurrentChar(getRandomChar());
  }, [getRandomChar]);

  useEffect(() => {
    if (restartFlag) {
      handleRestart();
    }
  }, [restartFlag, handleRestart]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex items-center justify-center relative">
        <div
          className={`text-8xl font-bold z-10 uppercase text-center text-[#FFF9EA]`}
          style={{
            filter: `blur(${blurAmount}px)`,
            textShadow: `0 0 ${blurAmount * 2}px rgba(59, 130, 246, 0.8)`,
            transform: `${isAnimating ? "scale(1.05)" : "scale(1)"}`,
            transition: "transform 0.1s ease-out, color 0.3s ease ",
            borderRadius: "12.154px",
            border: "1.772px solid #FFF8E3",
            background: "linear-gradient(180deg, #D7603E 0%, #B7212C 100%)",
            width: "120px",
            height: "115px",
          }}
        >
          {currentChar}
        </div>
      </div>
    </div>
  );
};

export default CharacterAnimation;
