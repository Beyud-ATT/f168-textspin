import { Flex } from "antd";
import CustomButton from "./Button";
import { useState } from "react";
import HelpHistory from "./HelpHistory";
import CombineTextHistory from "./CombineTextHistory";

export default function MobileHistoryTabs() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="w-[95%] mx-auto h-[505px] custom-gradient-bg">
      <div className="w-full h-full rounded-lg bg-[var(--bg-color)] flex flex-col gap-6 py-5">
        <Flex justify="center" gap={30} align="center" className="">
          <CustomButton
            label="Lịch sử tặng chữ"
            px="5"
            py="1"
            text="37px"
            active={currentTab === 0}
            onClick={() => setCurrentTab(0)}
          />
          <CustomButton
            label="Lịch sử tặng chữ"
            px="5"
            py="1"
            text="37px"
            active={currentTab === 1}
            onClick={() => setCurrentTab(1)}
          />
        </Flex>

        <div className="h-[90%] overflow-y-auto">
          {currentTab === 0 ? (
            <CombineTextHistory hideHeader />
          ) : (
            <HelpHistory hideHeader />
          )}
        </div>
      </div>
    </div>
  );
}
