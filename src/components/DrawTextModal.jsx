import { Flex, Image } from "antd";
import Button1Icon from "../assets/image_9.png";
import { CompoundModal, useModal } from "./CompoundModal";
import CharacterAnimation from "./CharacterAnimation";
import DrawBg from "../assets/draw-bg.png";
import CustomButton from "./Button";
import useRandomWord from "../hooks/useRandomWord";
import { useAuth } from "../assets/contexts/AuthContext";
import useGetMe from "../hooks/useGetMe";
import { useQueryClient } from "@tanstack/react-query";

function DrawTextModalInner() {
  const { isOpen, closeModal } = useModal();
  const { randomWord } = useRandomWord(isOpen);
  const queryClient = useQueryClient();

  return (
    <div className="relative">
      <Image src={DrawBg} preview={false} alt="table-header-bg" className="" />
      <div className="absolute top-[20%] left-[49%] -translate-x-1/2">
        <Flex vertical className="items-center gap-2">
          <CharacterAnimation
            restartFlag={isOpen}
            randomWord={randomWord?.data || "1"}
          />
          <p className="text-[#892700] md:text-3xl text-2xl text-center font-bold leading-[41px] font-carbon uppercase">
            BẠN ĐÃ RÚT CHỮ THÀNH CÔNG
          </p>
          <CustomButton
            label="Đóng"
            onClick={() => {
              closeModal();
              setTimeout(() => {
                queryClient.invalidateQueries(["getMe"]);
              }, 300);
            }}
            className={`md:px-7 py-1 !text-2xl`}
          />
        </Flex>
      </div>
    </div>
  );
}

export default function DrawTextModal() {
  const { isAuthenticated } = useAuth();
  const { me } = useGetMe();
  const { availableTurn } = me?.data || { availableTurn: 0 };

  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <Flex
            className={`relative !w-[157px] !h-[74px] max-[400px]:!h-[40px] cursor-pointer
              ${
                isAuthenticated && availableTurn > 0
                  ? "bg-[url('/src/assets/image_8.png')]"
                  : "bg-[url('/src/assets/deactivate-btn.png')]"
              } bg-contain bg-no-repeat bg-center`}
            onClick={
              isAuthenticated && availableTurn > 0 ? openModal : undefined
            }
          >
            <Flex
              className={`w-full h-full 
                justify-center items-center sm:gap-2 gap-1 
                `}
            >
              <Image
                src={Button1Icon}
                preview={false}
                alt="button-1-icon"
                className="sm:!w-[36px] sm:!h-[31px] !w-[20px] !h-[21px]"
              />
              <Flex
                vertical
                justify="center"
                align="center"
                className="text-white font-bold font-carbon uppercase translate-y-0.5"
              >
                <p className="md:text-xl text-[16px] max-[350px]:text-[10px]">
                  Rút chữ
                </p>
                <p className="md:text-[10px] text-[8px] max-[350px]:text-[6px] -translate-y-1">
                  Lượt còn: {availableTurn}
                </p>
              </Flex>
            </Flex>
          </Flex>
        )}
      />
      <CompoundModal.Content
        classNames={{
          content: "!bg-transparent !shadow-none !h-fit !p-0",
          body: "flex justify-center items-center",
        }}
        hideCloseButton={true}
      >
        <DrawTextModalInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
