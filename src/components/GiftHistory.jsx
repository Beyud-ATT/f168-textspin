import CustomButton from "./Button";
import { CompoundModal } from "./CompoundModal";
import TableHeaderBG from "../assets/table-header-bg.png";
import { Flex, Image, Spin } from "antd";
import { Elipse } from "../utils/svg";
import useSendAndRecvHistory from "../hooks/useSendAndRecvHistory";

function GiftHistoryInner() {
  const { sendAndRecvHistories, isLoading } = useSendAndRecvHistory();
  return (
    <div className="h-[346px] custom-gradient-bg">
      <div className="w-full h-full rounded-lg bg-[var(--bg-color)]">
        <div className="relative flex justify-center">
          <Image
            src={TableHeaderBG}
            preview={false}
            alt="table-header-bg"
            loading="lazy"
            className="-translate-y-[20%]"
          />
          <p className="text-2xl text-white font-bold absolute uppercase font-carbon">
            lịch sử tặng chữ
          </p>
        </div>

        {isLoading ? (
          <Flex
            vertical
            justify="center"
            align="center"
            className="h-[70%] gap-10"
          >
            <Spin size="large" />
          </Flex>
        ) : sendAndRecvHistories?.data?.length > 0 ? (
          <Flex
            vertical
            justify="center"
            align="center"
            className="h-[70%] gap-10"
          >
            {sendAndRecvHistories?.data?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-5 h-[44px]"
              >
                <div className="flex text-[12px] items-center justify-between w-full border-b-2 border-[#D9D9D9] pb-2">
                  <p className="uppercase">{item.date}</p>
                  <p className="uppercase">{item.name}</p>
                  <p className="uppercase">{item.description}</p>
                </div>
              </div>
            ))}
          </Flex>
        ) : (
          <Flex
            vertical
            justify="center"
            align="center"
            className="h-[70%] gap-10"
          >
            <Flex justify="center" align="center" className="gap-5">
              <Elipse />
              <Elipse />
              <Elipse />
            </Flex>
            <p className="text-2xl">Không có dữ liệu</p>
          </Flex>
        )}
      </div>
    </div>
  );
}

export default function GiftHistory() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <CustomButton
            label="Lịch sử tặng chữ"
            onClick={openModal}
            className="md:px-3 px-2 py-1 md:text-[14px] text-[10px]"
          />
        )}
      />
      <CompoundModal.Content>
        <GiftHistoryInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
