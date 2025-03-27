import { Flex, Image } from "antd";
import ButtonBg from "../assets/image 8.png";
import DeactiveButtonBg from "../assets/deactivate-btn.png";
import Button1Icon from "../assets/image 9.png";
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
      <Image
        src={DrawBg}
        preview={false}
        alt="table-header-bg"
        loading="lazy"
        className=""
      />
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
              }, 500);
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
            className={`relative md:w-[196px] md:h-[74px] !w-[157px] !h-[60px] cursor-pointer`}
            onClick={
              isAuthenticated && availableTurn > 0 ? openModal : undefined
            }
          >
            <Image
              src={
                isAuthenticated && availableTurn > 0
                  ? ButtonBg
                  : DeactiveButtonBg
              }
              preview={false}
              alt="button-bg"
              loading="lazy"
              className="md:w-auto md:h-auto w-[36px] h-[31px]"
            />
            <Flex className="absolute top-0 left-0 w-full h-full justify-center items-center gap-3">
              <Image
                src={Button1Icon}
                preview={false}
                alt="button-1-icon"
                loading="lazy"
                width={36}
                height={31}
              />
              <Flex
                vertical
                justify="center"
                align="center"
                className="text-white font-bold font-carbon uppercase -translate-y-0.5"
              >
                <p className="text-xl">Rút chữ</p>
                <p className="text-[10px]">Lượt còn: {availableTurn}</p>
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
