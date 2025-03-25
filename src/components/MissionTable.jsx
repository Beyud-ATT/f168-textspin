import { Flex, Image } from "antd";
import RightTableBg from "../assets/right-table-bg.png";
import CustomButton from "./Button";

const missions = [
  { title: "Nạp tiền trong ngày", point: 300, active: true },
  { title: "Nạp tiền trong ngày", point: 3000, active: false },
  { title: "Đặt cược trong ngày", point: 8000, active: false },
  { title: "Nạp tiền trong ngày", point: 300, active: false },
  { title: "Giới thiệu người bạn trong ngày", point: 1, active: false },
];

export default function MissionTable() {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        src={RightTableBg}
        preview={false}
        alt="right-table-bg"
        loading="lazy"
      />
      <p
        className="md:text-4xl text-3xl font-carbon absolute md:top-[20%] top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "linear-gradient(180deg, #FB8C00 0%, #D63200 125.86%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Nhiệm vụ
      </p>

      <Flex
        vertical
        className="absolute top-[28%] -translate-x-2 flex justify-center items-center md:gap-3 gap-2"
      >
        {missions.map((mission, index) => (
          <Flex key={index} className="w-full justify-between gap-3">
            <div
              className="min-h-[40px] md:px-3 px-2 flex justify-center items-center "
              style={{
                borderRadius: "8.487px",
                background: "#FFECDC",
                boxShadow:
                  "0px 1.543px 1.543px 0px rgba(102, 57, 30, 0.25) inset",
              }}
            >
              <div className="md:w-[220px] w-[200px]">
                <span>{mission.title} </span>
                <span className="text-[#FE0707] font-bold">
                  {mission.point} điểm
                </span>
              </div>
            </div>
            <CustomButton label="nhận" px="3" py="1" active={mission.active} />
          </Flex>
        ))}
      </Flex>
    </div>
  );
}
