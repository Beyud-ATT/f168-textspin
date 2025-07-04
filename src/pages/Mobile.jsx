import { useState, useEffect } from "react";
import { Flex, Image } from "antd";
import Countdown from "../components/CountDown";
import GetHelpModal from "../components/GetHelpModal";
import SendWordHistory from "../components/SendWordHistory";
import DrawTextModal from "../components/DrawTextModal";
import CombineTextModal from "../components/CombineTextModal";
import CharacterDrawed from "../components/CharacterDrawed";
// import MissionDropdown from "../components/MissionDropdown";
import MobileHistoryTabs from "../components/MobileHistoryTabs";
import SendWordModal from "../components/SendWordModal";
import useTotalJoin from "../hooks/useTotalJoin";
import CommentsMobile from "../components/CommentsMobileModal";
import LightImg from "../assets/light.png";
import NoneLightImg from "../assets/none-light.png";
import MainBgMb from "../assets/main-bg-mb.png";
// import DeviceProvider from "../contexts/ResponsiveContext";
import MissionTable from "../components/MissionTable";
import TotalDrawImg from "../assets/total-draw.png";

export default function Mobile() {
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
    <Flex vertical gap={10}>
      <Flex
        vertical
        gap={5}
        className="!py-3 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${MainBgMb})`,
        }}
      >
        <Flex justify="center" align="center">
          <div className="relative">
            <Image
              src={showLight ? NoneLightImg : LightImg}
              preview={false}
              alt="background-none-light"
              className={`w-full transition-opacity duration-300 ease-in-out`}
            />

            {/* <DeviceProvider>
              <MissionDropdown />
            </DeviceProvider> */}

            <div className="absolute lg:top-[40%] md:top-[45%] top-[42%] w-full flex justify-center items-center">
              <Countdown />
            </div>

            <div className="absolute lg:top-[47%] md:top-[54%] top-[52%] max-[321px]:top-[50%] w-full md:-translate-x-0 -translate-x-2">
              <CharacterDrawed />
            </div>

            <Flex className="absolute bottom-[15%] w-full flex justify-center items-center md:gap-5 gap-2">
              <GetHelpModal />
              <SendWordHistory />
            </Flex>
          </div>
        </Flex>

        <Flex justify="center" align="center" className="w-full md:gap-3 gap-2">
          <p className="text-[#F6EEBA] lg:text-3xl md:text-2xl text-[15px] font-bd-street-sign">
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
            <span className="text-[#F6EEBA] font-semibold lg:text-lg md:text-sm text-[11px] uppercase">
              tổng số phiếu
            </span>
          </Flex>
        </Flex>

        <Flex justify="center" align="center" className="w-full gap-2">
          <DrawTextModal />
          <CombineTextModal />
          <SendWordModal />
        </Flex>
      </Flex>

      <Flex justify="center" align="center">
        <div className="custom-gradient-bg h-full w-[95%] mx-auto">
          <MissionTable />
        </div>
      </Flex>

      <Flex justify="center" align="center">
        <CommentsMobile />
      </Flex>

      <MobileHistoryTabs />
    </Flex>
  );
}
