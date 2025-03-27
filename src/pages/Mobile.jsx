import { Flex, Image } from "antd";
import MainImg1 from "../assets/main-img-1.png";
import MainTableBg from "../assets/main-table-bg.webp";
import Countdown from "../components/CountDown";
import BottomBg from "../assets/bottom-bg.png";
import { FaUsers } from "react-icons/fa";
import GetHelpModal from "../components/GetHelpModal";
import SendWordHistory from "../components/SendWordHistory";
import DrawTextModal from "../components/DrawTextModal";
import CombineTextModal from "../components/CombineTextModal";
import MissionMobileModal from "../components/MissionMobileModal";
import RewardMobileModal from "../components/RewardMobileModal";
import CharacterDrawed from "../components/CharacterDrawed";
import MobileHistoryTabs from "../components/MobileHistoryTabs";
import CommentsMobileModal from "../components/CommentsMobileModal";
import SendWordModal from "../components/SendWordModal";

export default function Mobile() {
  return (
    <Flex vertical gap={20}>
      <Flex justify="center" align="center">
        <Image
          src={MainImg1}
          preview={false}
          alt="main-img-1"
          width={333}
          height={141}
        />
      </Flex>

      <Flex vertical justify="center" align="center" gap={10}>
        <Flex justify="space-between" align="center">
          <div className="relative">
            <Image src={MainTableBg} preview={false} alt="main-table-bg" />

            <div className="absolute top-[9%] left-0 w-full flex justify-center items-center -translate-x-2">
              <Countdown />
            </div>

            <div className="absolute top-[40%] -translate-x-2 w-full flex justify-center items-center">
              <CharacterDrawed />
            </div>

            <Flex className="absolute bottom-[6.5%] -translate-x-2 w-full flex justify-center items-center md:gap-3">
              <GetHelpModal />

              <div className="relative">
                <Image
                  src={BottomBg}
                  preview={false}
                  alt="bottom-bg"
                  width={132}
                  height={38}
                />
                <Flex
                  justify="center"
                  align="center"
                  vertical
                  className="absolute bottom-0 left-0 w-full h-full -translate-y-0.5"
                >
                  <p className="text-white text-lg font-bd-street-sign">
                    1,678,890
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <FaUsers className="text-white text-[10px]" />
                    <span className="text-white font-extralight text-[10px] uppercase">
                      người tham gia
                    </span>
                  </div>
                </Flex>
              </div>

              <SendWordHistory />
            </Flex>
          </div>
        </Flex>

        <Flex justify="center" align="center" className="w-full gap-5">
          <DrawTextModal />
          <CombineTextModal />
          <SendWordModal />
        </Flex>
      </Flex>

      <Flex justify="center" align="center" className="w-full gap-16">
        <RewardMobileModal />
        <MissionMobileModal />
      </Flex>

      <MobileHistoryTabs />

      <CommentsMobileModal />
    </Flex>
  );
}
