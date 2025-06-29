import TitleBg from "../assets/title-bg.png";
import First from "../assets/first.png";
import Second from "../assets/second.png";
import Third from "../assets/third.png";
import { Flex, Image, Spin } from "antd";

export default function TopTable() {
  return (
    <div className="relative bg-gradient-to-r from-[#fd3136] to-[#fee59e] rounded-xl p-1 mb-5 mt-8 h-[685px]">
      <div className="bg-[#FFF9EC] rounded-xl h-[101%]">
        <div className="relative xl:w-[277px] xl:h-[77px] w-[170px] h-[35px]">
          <Image
            src={TitleBg}
            preview={false}
            alt="title-bg"
            className="absolute -top-[50%] left-5"
            rootClassName="xl:w-[277px] xl:h-[77px] w-[150px] h-[35px]"
          />
          <span className="text-white font-carbon xl:text-4xl md:text-xl text-lg font-extrabold uppercase absolute top-0.5 left-[55%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            Xếp hạng điểm
          </span>
        </div>

        <Flex justify="center" align="center">
          <p
            className="xl:text-[30px] lg:text-[25px] md:text-[20px] min-[425px]:text-3xl text-2xl font-carbon"
            style={{
              background:
                "linear-gradient(180deg, #FB8C00 0%, #D63200 125.86%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingTop: "0.1em",
              paddingBottom: "0.1em",
              lineHeight: 1.2,
              display: "inline-block",
            }}
          >
            top điểm thưởng
          </p>
        </Flex>

        <div className="w-[70%] h-[75%] mx-auto overflow-y-auto mt-5">
          {false ? (
            <div className="flex w-full h-full justify-center items-center">
              <Spin size="large" />
            </div>
          ) : (
            Array.from({ length: 100 }).map((_, index) => (
              <div
                key={index}
                className={`flex justify-center items-center h-[45px] font-bold ${
                  index % 2 === 0 ? "bg-white" : ""
                }`}
              >
                <div className="flex text-[12px] items-center justify-around w-full pt-1">
                  <Flex className="gap-3" align="center">
                    {index < 3 ? (
                      <Image
                        src={
                          index + 1 === 1
                            ? First
                            : index + 1 === 2
                            ? Second
                            : Third
                        }
                        preview={false}
                        alt="event-detail"
                        loading="lazy"
                        width={23}
                        height={33}
                      />
                    ) : (
                      <p className="uppercase pl-1">{index + 1}</p>
                    )}

                    <p className="uppercase">user123</p>
                  </Flex>
                  <p className="uppercase">999 phiếu</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
