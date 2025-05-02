import CustomButton from "./Button";
import { CompoundModal } from "./CompoundModal";
import TableHeaderBG from "../assets/table-header-bg.png";
import { Flex, Image } from "antd";
import { FB, ShareLink } from "../utils/svg";
import { toast } from "react-toastify";
import useGetMe from "../hooks/useGetMe";
import Tiktok from "../assets/tiktok.png";
import Telegram from "../assets/telegram.png";

function ShareItem({ children, onClick, ...rest }) {
  return (
    <Flex
      justify="center"
      align="center"
      className="w-[78px] h-[78px]"
      style={{
        borderRadius: "17.044px",
        border: "0.955px solid #FFF9E7",
        background: "linear-gradient(0deg, #B9242D 0%, #D65E3D 100%)",
        boxShadow: "0px 3.819px 0px 0px #892700",
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Flex>
  );
}

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

        <Flex
          className="md:w-full w-[70%] !mx-auto h-[70%] items-center justify-center md:gap-6 gap-2"
          wrap
        >
          <ShareItem onClick={handleShare}>
            <Image src={Tiktok} preview={false} alt="tiktok" loading="lazy" />
          </ShareItem>
          <ShareItem onClick={handleShare}>
            <Image
              src={Telegram}
              preview={false}
              alt="telegram"
              loading="lazy"
            />
          </ShareItem>
          <ShareItem onClick={handleShare}>
            <FB />
          </ShareItem>
          <ShareItem
            onClick={() => {
              handleCopy("Link chia sẻ");
              toast.success("Đã copy link chia sẻ");
            }}
          >
            <ShareLink />
          </ShareItem>
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
            className="md:px-8 md:py-1 px-4 py-1 lg:text-[23px] text-[11px]"
          />
        )}
      />
      <CompoundModal.Content>
        <GetHelpInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
