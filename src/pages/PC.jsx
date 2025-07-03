import { Flex, Image } from "antd";
import { useState, useEffect } from "react";
import LightImg from "../assets/light.png";
import NoneLightImg from "../assets/none-light.png";
import Countdown from "../components/CountDown";
import { FaUsers } from "react-icons/fa";
import GetHelpModal from "../components/GetHelpModal";
import SendWordHistory from "../components/SendWordHistory";
import DrawTextModal from "../components/DrawTextModal";
import CombineTextModal from "../components/CombineTextModal";
import CharacterDrawed from "../components/CharacterDrawed";
import SendWordModal from "../components/SendWordModal";
import useTotalJoin from "../hooks/useTotalJoin";
import MainBg from "../assets/main-bg.jpg";
import MobileHistoryTabs from "../components/MobileHistoryTabs";
import CommentsMobile from "../components/CommentsMobileModal";
// import MissionDropdown from "../components/MissionDropdown";
// import DeviceProvider from "../contexts/ResponsiveContext";
import MissionTable from "../components/MissionTable";
import TotalDrawImg from "../assets/total-draw.png";

export default function PC() {
  const { totalJoin } = useTotalJoin();
  const [showLight, setShowLight] = useState(true);

  // Setup blinking effect interval
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowLight((prev) => !prev);
    }, 200); // Toggle every 1 second

    return () => clearInterval(blinkInterval); // Cleanup on unmount
  }, []);

  return (
    <Flex vertical gap={76} className="w-full relative">
      <Flex
        vertical
        gap={10}
        className="!py-7 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${MainBg})`,
        }}
      >
        <Flex justify="center" align="center">
          <div className="relative">
            <Image
              src={showLight ? LightImg : NoneLightImg}
              preview={false}
              alt="background-none-light"
              className={`w-full transition-opacity duration-300 ease-in-out`}
            />

            <div className="absolute top-[40%] w-full flex justify-center items-center">
              <Countdown />
            </div>

            <div className="absolute top-[47%] w-full -translate-x-2">
              <CharacterDrawed />
            </div>

            <Flex className="absolute bottom-[14%] w-full flex justify-center items-center gap-7">
              <GetHelpModal />
              <SendWordHistory />
            </Flex>
          </div>
        </Flex>

        <Flex justify="center" align="center" className="w-full gap-5">
          <DrawTextModal />
          <CombineTextModal />
          <SendWordModal />
        </Flex>

        <Flex justify="center" align="center" className="w-full gap-5">
          <p className="text-[#F6EEBA] text-4xl font-bd-street-sign">
            {Intl.NumberFormat().format(totalJoin?.data)}
          </p>
          <Flex
            justify="center"
            align="center"
            className="gap-1 -translate-y-0.5"
          >
            <Image
              src={TotalDrawImg}
              preview={false}
              alt="background-none-light"
            />
            <span className="text-[#F6EEBA] font-semibold text-lg uppercase">
              tổng số phiếu
            </span>
          </Flex>
        </Flex>
      </Flex>

      {/* <DeviceProvider>
        <MissionDropdown />
      </DeviceProvider> */}

      <div className="max-w-screen-2xl w-full mx-auto">
        <Flex justify="space-around" align="center">
          <div className="w-[33%] h-[505px]">
            <div className="w-full h-full">
              <MobileHistoryTabs />
            </div>
          </div>

          <div className="w-[33%] h-[505px]">
            <div className="w-full h-full custom-gradient-bg rounded-xl">
              <MissionTable />
            </div>
          </div>

          <div className="w-[33%] h-[505px]">
            <div className="w-full h-full">
              <CommentsMobile />
            </div>
          </div>
        </Flex>
      </div>
    </Flex>
  );
}
