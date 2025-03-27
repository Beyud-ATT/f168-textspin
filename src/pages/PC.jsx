import { Flex, Image } from "antd";
import MainImg1 from "../assets/main-img-1.png";
import Reward1 from "../assets/reward-1.webp";
import MainTableBg from "../assets/main-table-bg.webp";
import Countdown from "../components/CountDown";
import BottomBg from "../assets/bottom-bg.png";
import { FaUsers } from "react-icons/fa";
import GetHelpModal from "../components/GetHelpModal";
import SendWordHistory from "../components/SendWordHistory";
import DrawTextModal from "../components/DrawTextModal";
import CombineTextModal from "../components/CombineTextModal";
import CharacterDrawed from "../components/CharacterDrawed";
import MissionTable from "../components/MissionTable";
import CombineTextHistory from "../components/CombineTextHistory";
import HelpHistory from "../components/HelpHistory";
import Comments from "../components/Comments";
import SendWordModal from "../components/SendWordModal";

export default function PC() {
  return (
    <Flex vertical gap={76} className="w-full">
      <Flex justify="center" align="center">
        <Image src={MainImg1} preview={false} alt="main-img-1" loading="lazy" />
      </Flex>

      <Flex vertical gap={10}>
        <Flex justify="space-between" align="center">
          <Image src={Reward1} preview={false} alt="reward-1" loading="lazy" />

          <div className="w-[50%] relative">
            <Image
              src={MainTableBg}
              preview={false}
              alt="main-table-bg"
              loading="lazy"
            />

            <div className="absolute top-[9%] left-0 w-full flex justify-center items-center -translate-x-2">
              <Countdown />
            </div>

            <div className="absolute top-[40%] w-full -translate-x-2">
              <CharacterDrawed />
            </div>

            <Flex className="absolute bottom-[6.5%] -translate-x-2 w-full flex justify-center items-center gap-7 ">
              <GetHelpModal />

              <div className="relative">
                <Image
                  src={BottomBg}
                  preview={false}
                  alt="bottom-bg"
                  loading="lazy"
                />
                <Flex
                  justify="center"
                  align="center"
                  vertical
                  className="absolute bottom-0 left-0 w-full h-full"
                >
                  <p className="text-white text-4xl font-bd-street-sign">
                    1,678,890
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <FaUsers className="text-white text-2xl" />
                    <span className="text-white font-extralight text-lg uppercase">
                      người tham gia
                    </span>
                  </div>
                </Flex>
              </div>

              <SendWordHistory />
            </Flex>
          </div>

          <MissionTable />
        </Flex>

        <Flex justify="center" align="center" className="w-full gap-5">
          <DrawTextModal />
          <CombineTextModal />
          <SendWordModal />
        </Flex>
      </Flex>

      <Flex justify="space-around" align="center">
        <div className="w-1/4 h-[505px] custom-gradient-bg">
          <div className="w-full h-full rounded-lg bg-[var(--bg-color)]">
            <CombineTextHistory />
          </div>
        </div>

        <div className="w-[40%] h-[505px] custom-gradient-bg">
          <div className="w-full h-full rounded-lg bg-[var(--bg-color)]">
            <Comments />
          </div>
        </div>

        <div className="w-1/4 h-[505px] custom-gradient-bg">
          <div className="w-full h-full rounded-lg bg-[var(--bg-color)]">
            <HelpHistory />
          </div>
        </div>
      </Flex>
    </Flex>
  );
}
