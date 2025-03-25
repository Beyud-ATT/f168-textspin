import { Flex, Image } from "antd";
import ButtonBg from "../assets/image 8.png";
import DeactiveButtonBg from "../assets/deactivate-btn.png";
import Button2Icon from "../assets/image 21.png";
import { CompoundModal, useModal } from "./CompoundModal";
import DrawBg from "../assets/draw-bg.png";
import CustomButton from "./Button";
import CombineTextEffectBig from "../assets/combine-text-effect-big.gif";
import { useAuth } from "../assets/contexts/AuthContext";
import useGetMe from "../hooks/useGetMe";
import NumberTransition from "./NumberTransition";

function CombineTextModalInner() {
  const { closeModal } = useModal();
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={DrawBg}
          preview={false}
          alt="table-header-bg"
          loading="lazy"
          className=""
        />
        <div className="absolute top-[28%] left-[49%] -translate-x-1/2 z-30">
          <NumberTransition />
        </div>
        <div className="absolute top-[48%] left-[49%] -translate-x-1/2">
          <Flex vertical className="items-center">
            <p className="text-[#892700] text-2xl text-center font-bold leading-[41px] font-carbon uppercase">
              BẠN ĐÃ ghép chữ THÀNH CÔNG
            </p>
          </Flex>
        </div>
      </div>
      <CustomButton
        label="Đóng"
        onClick={closeModal}
        className={`px-7 py-1 !text-2xl z-30 absolute bottom-[19%] left-[48%] -translate-x-1/2 w-[155px] cursor-pointer`}
      />
      <Image
        src={CombineTextEffectBig}
        preview={false}
        alt="combine-text-effect-big"
        loading="lazy"
        className="w-full h-full -translate-y-[13%] -translate-x-[12%]"
        height={370}
      />
    </div>
  );
}

export default function CombineTextModal() {
  const { isAuthenticated } = useAuth();
  const { me } = useGetMe();
  const { completedCode } = me?.data || { completedCode: null };
  // const { completedCode } = { completedCode: "F168-5184ea" };

  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <Flex
            className={`relative md:w-[196px] md:h-[74px] !w-[157px] !h-[60px]`}
            onClick={isAuthenticated && completedCode ? openModal : undefined}
          >
            <Image
              src={
                isAuthenticated && completedCode ? ButtonBg : DeactiveButtonBg
              }
              preview={false}
              alt="button-bg"
              loading="lazy"
              className="md:w-auto md:h-auto w-[36px] h-[31px]"
            />
            <Flex className="absolute top-0 left-0 w-full h-full justify-center items-center gap-3">
              <Image
                src={Button2Icon}
                preview={false}
                alt="button-1-icon"
                loading="lazy"
                width={36}
                height={31}
              />
              <Flex
                vertical
                className="text-white font-bold font-carbon uppercase"
              >
                <p className="text-lg">ghép chữ</p>
              </Flex>
            </Flex>
          </Flex>
        )}
      />
      <CompoundModal.Content
        hideCloseButton
        className="flex justify-center items-center "
        classNames={{
          content: "!bg-transparent !shadow-none !h-fit !p-0",
        }}
      >
        <CombineTextModalInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
