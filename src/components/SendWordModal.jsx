import { Flex, Form, Image, Input } from "antd";
import ButtonBg from "../assets/image 8.png";
import DeactiveButtonBg from "../assets/deactivate-btn.png";
import Button1Icon from "../assets/send-word.png";
import { CompoundModal, useModal } from "./CompoundModal";
import { useAuth } from "../assets/contexts/AuthContext";
import useGetMe from "../hooks/useGetMe";
import TableHeaderBG from "../assets/table-header-bg.png";
import SendWordBtn from "../assets/give-gift-btn.png";
import { useState } from "react";
import useSendWord from "../hooks/useSendWord";
import { useQueryClient } from "@tanstack/react-query";

function ChooseWord({ choosen, wordText, isAvailable, ...rest }) {
  return (
    <div
      className={`relative flex justify-center items-center 
                  md:w-[116px] md:h-[109px] w-[65px] h-[61px]
                  rounded-xl border-[1.8px] border-[#FFF8E3]
                  cursor-pointer ${
                    choosen ? "border-[3px] border-green-500" : ""
                  }`}
      style={{
        background: isAvailable
          ? "linear-gradient(180deg, #D7603E 0%, #B7212C 100%)"
          : "linear-gradient(180deg, #FFE0B1 0%, #ECBF86 100%)",
      }}
      {...rest}
    >
      <span className="text-white font-bold md:text-7xl text-5xl -translate-y-1.5">
        {wordText}
      </span>
    </div>
  );
}

function SendWordModalInner() {
  const { closeModal } = useModal();
  const [form] = Form.useForm();
  const { me } = useGetMe();
  const { words } = me?.data || { words: [] };
  const [currentWord, setCurrentWord] = useState("");
  const { mutate } = useSendWord();
  const queryClient = useQueryClient();

  async function handleFinish(values) {
    const data = {
      username: values.username,
      word: currentWord.toLowerCase(),
    };

    mutate(data, {
      onSuccess: () => {
        form.resetFields();
        queryClient.invalidateQueries({
          queryKey: ["getMe"],
        });
        queryClient.invalidateQueries({
          queryKey: ["helpHistory"],
        });
        queryClient.invalidateQueries({
          queryKey: ["sendAndRecvHistories"],
        });
        closeModal();
      },
    });
  }

  return (
    <div className="h-[422px] custom-gradient-bg">
      <div className="w-full h-full rounded-lg bg-[var(--bg-color)]">
        <div className="relative flex justify-center">
          <Image
            src={TableHeaderBG}
            preview={false}
            alt="table-header-bg"
            loading="lazy"
            className="-translate-y-[20%]"
          />
          <p className="text-2xl text-white font-bold absolute uppercase font-carbon">
            tặng chữ
          </p>
        </div>

        <Form
          layout="vertical"
          form={form}
          className="w-full !px-5"
          onFinish={handleFinish}
        >
          <Form.Item
            name="username"
            label={<span className="font-bold">Tài khoản nhận chữ</span>}
          >
            <Input
              className="h-[50px]"
              placeholder="Nhập tên tài khoản người nhận"
            />
          </Form.Item>
          <Form.Item
            label={<span className="font-bold">Chọn chữ muốn tặng</span>}
          >
            <Flex className="gap-2">
              {words.map((word, index) => (
                <ChooseWord
                  key={index}
                  wordText={word.wordText}
                  isAvailable
                  onClick={() => setCurrentWord(word.wordText)}
                  choosen={currentWord === word.wordText}
                />
              ))}
            </Flex>
          </Form.Item>
          <Form.Item>
            <Flex
              className="relative w-full h-full justify-center items-center gap-3 cursor-pointer"
              onClick={form.submit}
            >
              <Image
                src={SendWordBtn}
                preview={false}
                alt="button-1-icon"
                loading="lazy"
              />
              <Flex
                vertical
                className="absolute top-[25%] left-[40%] text-white font-bold font-carbon uppercase"
              >
                <p className="text-4xl text-[#BD2C2F]">tặng chữ</p>
              </Flex>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default function SendWordModal() {
  const { isAuthenticated } = useAuth();
  const { me } = useGetMe();
  const { uniqueWords } = me?.data || { uniqueWords: [] };
  const isAvailable = uniqueWords.length > 0;

  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <Flex
            className={`relative md:w-[196px] md:h-[74px] !w-[157px] !h-[60px] max-[400px]:!h-[40px] cursor-pointer`}
            onClick={isAuthenticated && isAvailable ? openModal : undefined}
          >
            <Image
              src={isAuthenticated && isAvailable ? ButtonBg : DeactiveButtonBg}
              preview={false}
              alt="button-bg"
              loading="lazy"
              className="md:w-auto md:h-auto w-[36px] h-[31px]"
            />
            <Flex className="absolute top-0 left-0 w-full h-full justify-center items-center sm:gap-2 gap-1 md:-translate-y-0 min-[400px]:-translate-y-1 min-[350px]:translate-y-1">
              <Image
                src={Button1Icon}
                preview={false}
                alt="button-1-icon"
                loading="lazy"
                className="sm:!w-[36px] sm:!h-[31px] !w-[24px] !h-[21px] max-[425px]:-translate-y-0.5"
              />
              <Flex
                vertical
                className="text-white font-bold font-carbon uppercase"
              >
                <p className="md:text-xl text-[16px] max-[350px]:text-[14px]">
                  tặng chữ
                </p>
              </Flex>
            </Flex>
          </Flex>
        )}
      />
      <CompoundModal.Content>
        <SendWordModalInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
