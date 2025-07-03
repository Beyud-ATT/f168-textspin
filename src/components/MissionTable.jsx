import { Flex, Image } from "antd";
import RightTableBg from "../assets/right-table-bg.png";
import CustomButton from "./Button";
import useGetMe from "../hooks/useGetMe";
import { MISSION_TYPE } from "../utils/constant";
import useMissionComplete from "../hooks/useMissionComplete";
import { useAuth } from "../contexts/AuthContext";
import useMissions from "../hooks/useMissions";

function AcceptButton({
  isAvailableToAccept,
  isCompleted,
  missionType,
  missionGoal,
  disabled,
}) {
  const { mutate, isPending } = useMissionComplete();
  return (
    <CustomButton
      label={`${isCompleted ? "Đã Nhận" : "Nhận"}`}
      active={isAvailableToAccept && !isCompleted && !isPending}
      className={`${
        isCompleted ? "px-4" : "px-6"
      } md:!text-[17px] !text-[13px] cursor-pointer h-[30px] max-[426px]:h-[25px] my-auto`}
      onClick={
        !disabled
          ? () =>
              !isCompleted &&
              isAvailableToAccept &&
              !isPending &&
              mutate({ missionType, missionGoal })
          : () => {}
      }
      disabled={disabled}
    />
  );
}

export default function MissionTable() {
  const { isAuthenticated } = useAuth();
  const { me } = useGetMe();
  const { missions: missionsData } = useMissions();
  const {
    missions: missionsMe,
    totalDeposit,
    totalBet,
    totalInvite,
  } = me?.data || {
    missions: [],
  };
  const missions = missionsMe?.length > 0 ? missionsMe : missionsData?.data;

  return (
    <div className="flex flex-col md:gap-8 gap-5 justify-start items-center bg-gradient-to-b from-[#FFE0B1] to-[#ECBF86] pb-5 rounded-xl w-full h-full">
      <p
        className="md:text-[53px] min-[425px]:text-3xl text-xl font-carbon md:mt-5 mt-2"
        style={{
          background: "linear-gradient(180deg, #D7603E 0%, #B7212C 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Nhiệm vụ
      </p>

      <Flex
        vertical
        className="flex justify-center items-center md:gap-5 gap-3"
      >
        {missions?.map((mission, index) => {
          const {
            missionContentTemplate,
            missionGoal,
            isCompleted,
            missionType,
          } = mission;
          let isAvailableToAccept = false;

          if (missionType === MISSION_TYPE.DEPOSIT) {
            isAvailableToAccept = totalDeposit >= missionGoal;
          } else if (missionType === MISSION_TYPE.BET) {
            isAvailableToAccept = totalBet >= missionGoal;
          } else if (missionType === MISSION_TYPE.INVITE) {
            isAvailableToAccept = totalInvite >= missionGoal;
          }

          const unit =
            missionType === MISSION_TYPE.DEPOSIT ||
            missionType === MISSION_TYPE.BET
              ? "điểm"
              : "";

          const missionTitle = missionContentTemplate
            ?.split(" ")
            ?.map((element) => {
              if (element === "%S") {
                return (
                  <span className="text-[#FE0707] font-bold">
                    {missionGoal} {unit}
                  </span>
                );
              }
              return `${element} `;
            });

          return (
            <Flex
              key={index}
              className="w-full justify-between items-center gap-3"
            >
              <div
                key={Math.random()}
                className="md:h-[47px] h-[39px] w-full md:px-3 px-2 flex justify-center items-center"
                style={{
                  borderRadius: "8.487px",
                  background: "#FFECDC",
                  boxShadow:
                    "0px 1.543px 1.543px 0px rgba(102, 57, 30, 0.25) inset",
                }}
              >
                <div
                  key={`${Math.random()}_index`}
                  className="min-[425px]:text-auto w-full text-[14px] max-[426px]:text-[10px] max-[321px]:text-[8px]"
                >
                  {missionTitle}
                </div>
              </div>
              <AcceptButton
                isCompleted={isCompleted}
                isAvailableToAccept={isAvailableToAccept}
                missionType={missionType}
                missionGoal={missionGoal}
                disabled={!isAuthenticated}
              />
            </Flex>
          );
        })}
      </Flex>

      {/* <p className="text-center text-[14px] font-carbon max-[426px]:text-[12px] text-[#FE0707] ">
        Nhanh tay hoàn thành nhiệm vụ để nhận lấy phần thưởng!
      </p> */}
    </div>
  );
}
