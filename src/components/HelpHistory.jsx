import TableHeaderBG from "../assets/table-header-bg.png";
import { Image, Spin } from "antd";
import useHelpHistory from "../hooks/useHelpHistory";
import dayjs from "dayjs";
import { maskString } from "../utils/helper";

const word = ["1", "6", "8"];

export default function HelpHistory({ hideHeader = false }) {
  const { helpHistory, isLoading } = useHelpHistory();

  return (
    <>
      {!hideHeader && (
        <div className="relative flex justify-center">
          <Image
            src={TableHeaderBG}
            preview={false}
            alt="table-header-bg"
            className="-translate-y-[20%]"
          />
          <p className="text-2xl text-white font-bold absolute uppercase font-carbon">
            lịch sử trợ giúp
          </p>
        </div>
      )}

      {isLoading ? (
        <div className="flex w-full h-full justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        <div className="h-[80%] mr-1 overflow-y-auto">
          {helpHistory?.data?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-5 h-[44px]"
            >
              <div className="flex text-[12px] font-semibold items-center justify-between w-full border-b-[0.5px] border-[#D9D9D9] pb-2">
                <p className="uppercase">
                  {dayjs(item.completedAt).format("YYYY-MM-DD")}
                </p>
                <p className="uppercase">{maskString(item.username)}</p>
                <p className="uppercase">
                  Gửi tặng {word.includes(item.word) ? "số" : "chữ"} {item.word}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
