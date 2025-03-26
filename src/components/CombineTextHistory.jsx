import TableHeaderBG from "../assets/table-header-bg.png";
import { Image, Spin } from "antd";
import useCombineTextHistory from "../hooks/useCombineTextHistory";
import dayjs from "dayjs";

export default function CombineTextHistory({ hideHeader = false }) {
  const { combineTextHistory, isLoading } = useCombineTextHistory();

  return (
    <>
      {!hideHeader && (
        <div className="relative flex justify-center">
          <Image
            src={TableHeaderBG}
            preview={false}
            alt="table-header-bg"
            loading="lazy"
            className="-translate-y-[20%]"
          />
          <p className="text-2xl text-white font-bold absolute uppercase font-carbon">
            lịch sử ghép chữ
          </p>
        </div>
      )}

      <div className="h-[80%] overflow-y-auto">
        {isLoading ? (
          <div className="flex w-full h-full justify-center items-center">
            <Spin size="large" />
          </div>
        ) : (
          combineTextHistory?.data?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-5 h-[44px]"
            >
              <div className="flex text-[12px] font-semibold items-center justify-between w-full border-b-[0.5px] border-[#D9D9D9] pb-2">
                <p className="uppercase">
                  {dayjs(item.completedAt).format("YYYY-MM-DD")}
                </p>
                <p className="uppercase">{item.username}</p>
                <p className="uppercase">Ghép thành công</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
