import { Flex, Image } from "antd";
import Button2Icon from "../assets/image_21.png";
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
          className=""
        />
        <div className="absolute top-[28%] max-[350px]:top-[23%] left-[49%] -translate-x-1/2 z-30">
          <NumberTransition />
        </div>
        <div className="absolute top-[48%] max-[350px]:top-[40%] left-[49%] -translate-x-1/2">
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
        className={`px-7 py-1 !text-2xl z-30 absolute bottom-[19%] max-[350px]:bottom-[27%] left-[48%] -translate-x-1/2 w-[155px] cursor-pointer`}
      />
      <Image
        src={CombineTextEffectBig}
        preview={false}
        alt="combine-text-effect-big"
        className="w-full h-full -translate-y-[13%] max-[350px]:-translate-y-[19%] -translate-x-[12%]"
        height={370}
      />
    </div>
  );
}

export default function CombineTextModal() {
  const { isAuthenticated } = useAuth();
  const { me } = useGetMe();
  const { uniqueWords } = me?.data || { uniqueWords: [] };
  const isAvailable = uniqueWords.length >= 4;

  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <Flex
            className={`relative md:w-[196px] md:h-[74px] !w-[157px] !h-[60px] max-[400px]:!h-[40px] cursor-pointer ${
              isAuthenticated && isAvailable
                ? "bg-[url('/src/assets/image_8.png')]"
                : "bg-[url('/src/assets/deactivate-btn.png')]"
            } bg-contain bg-no-repeat bg-center`}
            onClick={isAuthenticated && isAvailable ? openModal : undefined}
          >
            <Flex className="absolute top-0 left-0 w-full h-full justify-center items-center sm:gap-2 gap-1">
              <Image
                src={Button2Icon}
                preview={false}
                alt="button-1-icon"
                className="sm:!w-[36px] sm:!h-[31px] !w-[20px] !h-[21px]"
              />
              <Flex
                vertical
                className="text-white font-bold font-carbon uppercase"
              >
                <p className="md:text-xl text-[16px] max-[350px]:text-[12px]">
                  ghép chữ
                </p>
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
