import TableHeaderBG from "../assets/table-header-bg.png";
import { Image, Spin } from "antd";
import useHelpHistory from "../hooks/useHelpHistory";

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
            loading="lazy"
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
        <div className="h-[80%] overflow-y-auto">
          {helpHistory?.data?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-5 h-[44px]"
            >
              <div className="flex text-[12px] font-semibold items-center justify-between w-full border-b-[0.5px] border-[#D9D9D9] pb-2">
                <p className="uppercase">{item.date}</p>
                <p className="uppercase">{item.name}</p>
                <p className="uppercase">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
