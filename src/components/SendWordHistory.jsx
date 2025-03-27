import CustomButton from "./Button";
import { CompoundModal } from "./CompoundModal";
import TableHeaderBG from "../assets/table-header-bg.png";
import { Flex, Image, Spin } from "antd";
import { Elipse } from "../utils/svg";
import useSendAndRecvHistory from "../hooks/useSendAndRecvHistory";
import dayjs from "dayjs";

function SendWordHistoryInner() {
  const { sendAndRecvHistories, isLoading } = useSendAndRecvHistory();

  return (
    <div className="h-[346px] custom-gradient-bg">
      <div className="w-full h-full rounded-lg bg-[var(--bg-color)]">
        <div className="relative flex w-full justify-center">
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

        <div className="px-8 mr-1 h-[80%] overflow-y-auto">
          {isLoading ? (
            <Flex vertical justify="center" align="center">
              <Spin size="large" />
            </Flex>
          ) : sendAndRecvHistories?.data?.length > 0 ? (
            sendAndRecvHistories?.data?.map((item, index) => (
              <Flex
                key={index}
                className="w-full justify-between items-center px-5 h-[44px]"
              >
                <div className="flex md:text-[12px] text-[10px] font-semibold items-center justify-between w-full border-b-2 border-[#D9D9D9] pb-2">
                  <p className="uppercase">
                    {dayjs(item.completedAt).format("YYYY-MM-DD")}
                  </p>
                  <p className="uppercase">{item.anotherUsername}</p>
                  <p className="uppercase">Bạn đã tặng chữ {item.word}</p>
                </div>
              </Flex>
            ))
          ) : (
            <Flex vertical justify="center" align="center">
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
    </div>
  );
}

export default function SendWordHistory() {
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
        <SendWordHistoryInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
