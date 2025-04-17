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
  hide,
}) {
  const { mutate, isPending } = useMissionComplete();
  return (
    !hide && (
      <CustomButton
        label={`${isCompleted ? "Đã Nhận" : "Nhận"}`}
        active={isAvailableToAccept && !isCompleted && !isPending}
        className={`${
          isCompleted ? "px-4" : "px-6"
        } !text-[13px] cursor-pointer h-[30px] max-[426px]:h-[25px] my-auto`}
        onClick={() =>
          !isCompleted &&
          isAvailableToAccept &&
          !isPending &&
          mutate({ missionType, missionGoal })
        }
        disabled={isPending}
      />
    )
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
    <>
      <div className="relative flex justify-center items-center">
        <Image
          src={RightTableBg}
          preview={false}
          alt="right-table-bg"
          className=""
        />
        <p
          className="md:text-4xl min-[425px]:text-3xl text-xl font-carbon absolute md:top-[20%] top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "linear-gradient(180deg, var(--orange-shade) 0%, #D63200 125.86%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nhiệm vụ
        </p>

        <Flex
          vertical
          className="absolute min-[425px]:top-[28%] top-[27%] -translate-x-2 flex justify-center items-center gap-1.5"
        >
          {missions?.map((mission, index) => {
            const {
              missionContentTemplete,
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

            const missionTitle = missionContentTemplete
              .split(" ")
              .map((element) => {
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
                  className="md:h-[40px] h-auto md:px-3 px-2 flex justify-center items-center"
                  style={{
                    borderRadius: "8.487px",
                    background: "#FFECDC",
                    boxShadow:
                      "0px 1.543px 1.543px 0px rgba(102, 57, 30, 0.25) inset",
                  }}
                >
                  <div
                    key={`${Math.random()}_index`}
                    className="min-[425px]:w-[200px] min-[425px]:text-auto w-full text-[14px] max-[426px]:w-[120px] max-[426px]:text-[10px] max-[321px]:text-[8px] max-[321px]:w-[100px]"
                  >
                    {missionTitle}
                  </div>
                </div>
                <AcceptButton
                  isCompleted={isCompleted}
                  isAvailableToAccept={isAvailableToAccept}
                  missionType={missionType}
                  missionGoal={missionGoal}
                  hide={!isAuthenticated}
                />
              </Flex>
            );
          })}
        </Flex>

        <p className="absolute bottom-0 translate-y-[5%] w-[60%] mx-auto text-center text-[14px] font-carbon max-[426px]:text-[12px] text-[#FE0707] ">
          Nhanh tay hoàn thành nhiệm vụ để nhận lấy phần thưởng!
        </p>
      </div>
    </>
  );
}
