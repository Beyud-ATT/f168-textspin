import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flex } from "antd";
import { toast } from "react-toastify";
import { matchWord } from "../services/accountAPI";
import { useAuth } from "../assets/contexts/AuthContext";

function CustomText({ text, className }) {
  return (
    <div
      className={`p-1.5 flex items-center justify-center font-carbon text-5xl uppercase text-[#FFF9EA] ${className}`}
      style={{
        borderRadius: 6.86,
        border: "1px solid #FFF8E3",
        background: "linear-gradient(180deg, #D7603E 0%, #B7212C 100%)",
        width: "65px",
        height: "65px",
      }}
    >
      {text}
    </div>
  );
}

export default function NumberTransition() {
  const { isAuthenticated } = useAuth();
  const [currentImage, setCurrentImage] = useState(1);
  const [code, setCode] = useState("");

  function handleCopy() {
    navigator.clipboard.writeText(code);
    toast.success("Đã copy mã thành công");
  }

  useEffect(() => {
    async function handleCombineText() {
      const res = await matchWord();
      if (res.status === 200) {
        setCode(res?.data);
      }
    }
    if (isAuthenticated) {
      handleCombineText();
    }
  }, [isAuthenticated]);

  const revealVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const handleTransition = useCallback(() => {
    setCurrentImage(currentImage === 1 ? 2 : 1);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTransition();
    }, 2000);

    if (currentImage === 2) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [handleTransition, currentImage]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-64 h-16">
        {currentImage === 1 ? (
          <Flex className="relative gap-1">
            <CustomText text="F" />
            <CustomText text="1" />
            <CustomText text="6" />
            <CustomText text="8" />
          </Flex>
        ) : (
          <motion.div
            key={currentImage}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={revealVariants}
            className="absolute top-0 left-0 w-full h-full"
          >
            <div
              className={`p-1.5 flex items-center justify-center font-carbon text-5xl uppercase text-[#FFF9EA] cursor-pointer  max-[350px]:text-[42px] max-[350px]:w-[90%] max-[350px]:mx-auto`}
              style={{
                borderRadius: 6.86,
                border: "1px solid #FFF8E3",
                background: "linear-gradient(180deg, #D7603E 0%, #B7212C 100%)",
              }}
              onClick={handleCopy}
            >
              {code}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
