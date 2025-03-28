import CustomButton from "./Button";
import { CompoundModal } from "./CompoundModal";
import TableHeaderBG from "../assets/table-header-bg.png";
import { Flex, Image } from "antd";
import { FB, ShareLink } from "../utils/svg";
import { toast } from "react-toastify";
import useGetMe from "../hooks/useGetMe";

function GetHelpInner() {
  const { me } = useGetMe();
  const { userCode } = me?.data || { userCode: null };

  function handleCopy() {
    navigator.clipboard.writeText(
      `${window.location.origin}/?refCode=${userCode}`
    );
  }

  function handleShare() {
    navigator.share({
      title: "F168 Quay Chữ",
      text: "Nhờ bạn bè quay chữ với F168",
      url: `${window.location.origin}/?refCode=${userCode}`,
    });
  }

  return (
    <div className="h-[346px] custom-gradient-bg">
      <div className="w-full h-full rounded-lg bg-[var(--bg-color)]">
        <div className="relative flex justify-center">
          <Image
            src={TableHeaderBG}
            preview={false}
            alt="table-header-bg"
            className="-translate-y-[20%]"
          />
          <p className="text-2xl text-white font-bold absolute uppercase font-carbon">
            nhờ bạn bè
          </p>
        </div>

        <Flex className="h-[70%] items-center justify-center md:gap-15 gap-5">
          <Flex
            justify="center"
            align="center"
            className="w-[120px] h-[120px]"
            style={{
              borderRadius: "25.975px",
              border: "1.455px solid #FFF9E7",
              background: "linear-gradient(0deg, #B9242D 0%, #D65E3D 100%)",
              boxShadow: "0px 5.82px 0px 0px #892700",
            }}
            onClick={() => {
              handleShare();
            }}
          >
            <FB />
          </Flex>

          <Flex
            justify="center"
            align="center"
            className="w-[120px] h-[120px]"
            style={{
              borderRadius: "25.975px",
              border: "1.455px solid #FFF9E7",
              background: "linear-gradient(0deg, #B9242D 0%, #D65E3D 100%)",
              boxShadow: "0px 5.82px 0px 0px #892700",
            }}
            onClick={() => {
              handleCopy("Link chia sẻ");
              toast.success("Đã copy link chia sẻ");
            }}
          >
            <ShareLink />
          </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default function GetHelpModal() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <CustomButton
            label="nhờ bạn bè"
            onClick={openModal}
            className="md:px-8 md:py-1 px-4 py-1 md:text-[14px] text-[10px]"
          />
        )}
      />
      <CompoundModal.Content>
        <GetHelpInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
