import { useRef } from "react";
import { Input, Form, Flex, Image } from "antd";
import { CompoundModal, useModal } from "./CompoundModal";
import CustomButton from "./Button";
import { useAuth } from "../contexts/AuthContext";
import { useSearchParams } from "react-router";
import { IoLogoAndroid } from "react-icons/io";
import { BsApple } from "react-icons/bs";
import RewardImg from "../assets/reward-1.webp";

const LoginModalForm = () => {
  const { login } = useAuth();
  const { closeModal } = useModal();
  const [searchParams] = useSearchParams();
  const refCode = searchParams.get("refCode");

  const [form] = Form.useForm();
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);

  const handleDigitChange = (_, nextRef) => {
    if (nextRef && nextRef.current) {
      nextRef.current.focus();
    }
  };

  const handleSubmit = async (values) => {
    const data = {
      username: values.username,
      bank: [values.digit1, values.digit2, values.digit3, values.digit4].join(
        ""
      ),
      refCode: refCode,
    };

    const res = await login(data);
    if (res.status === 200) {
      form.resetFields();
      closeModal();
    }
  };

  return (
    <>
      <Flex justify="center" align="center">
        <Image
          src={RewardImg}
          preview={false}
          alt="login-img"
          width={400}
          height={355}
          className="translate-y-7"
        />
      </Flex>
      <div className="custom-gradient-bg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="bg-[var(--bg-color)] rounded-lg flex flex-col justify-center h-full !px-10 !py-5"
        >
          <Form.Item
            label={
              <span className="text-gray-800 font-medium">
                Nhập tên đăng nhập của bạn tại F168
              </span>
            }
            name="username"
          >
            <Input
              placeholder="Nhập tên đăng nhập của bạn"
              className="p-3 rounded-md border border-gray-300"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-gray-800 font-medium">
                4 số cuối tài khoản ngân hàng
              </span>
            }
            name="accountDigits"
          >
            <div className="flex justify-center items-center gap-5">
              <Form.Item
                name={"digit1"}
                noStyle
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  ref={digit1Ref}
                  maxLength={1}
                  className="md:!w-[63px] md:!h-[63px] !w-[53px] !h-[53px] text-center text-lg border border-gray-300 rounded-md"
                  onChange={(e) => handleDigitChange(e, digit2Ref)}
                />
              </Form.Item>

              <Form.Item
                name={"digit2"}
                noStyle
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  ref={digit2Ref}
                  maxLength={1}
                  className="md:!w-[63px] md:!h-[63px] !w-[53px] !h-[53px] text-center text-lg border border-gray-300 rounded-md"
                  onChange={(e) => handleDigitChange(e, digit3Ref)}
                />
              </Form.Item>

              <Form.Item
                name={"digit3"}
                noStyle
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  ref={digit3Ref}
                  maxLength={1}
                  className="md:!w-[63px] md:!h-[63px] !w-[53px] !h-[53px] text-center text-lg border border-gray-300 rounded-md"
                  onChange={(e) => handleDigitChange(e, digit4Ref)}
                />
              </Form.Item>
              <Form.Item
                name={"digit4"}
                noStyle
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  ref={digit4Ref}
                  maxLength={1}
                  className="md:!w-[63px] md:!h-[63px] !w-[53px] !h-[53px] text-center text-lg border border-gray-300 rounded-md"
                />
              </Form.Item>
            </div>
          </Form.Item>

          <Form.Item className="flex flex-col justify-center items-center">
            <CustomButton label="Đăng nhập" px={5} py={1} htmlType="submit" />
          </Form.Item>

          <Flex justify="center" align="center" gap={10}>
            <CustomButton
              label="TẢI APP ANDROID"
              prefix={<IoLogoAndroid className="md:text-3xl text-xl" />}
              className={`flex items-center whitespace-nowrap px-2 py-1`}
            />
            <CustomButton
              label="TẢI APP IOS"
              prefix={
                <BsApple className="md:text-2xl text-lg -translate-y-0.5" />
              }
              className={`flex items-center whitespace-nowrap md:px-7 px-5 py-1`}
            />
          </Flex>
        </Form>
      </div>
    </>
  );
};

// Usage example
const LoginModal = () => {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <button
            className="lg:w-[212px] lg:h-[52px] md:w-[150px] md:h-[35px] w-[101px] h-[25px] p-3"
            style={{
              borderRadius: "44.081px",
              border: "1.16px solid #FFF9E7",
              background: "linear-gradient(0deg, #B9242D 0%, #D65E3D 100%)",
              backgroundPosition: "center",
              boxShadow: "0px 4.64px 0px 0px #892700",
            }}
            onClick={openModal}
          >
            <span className="lg:text-xl md:text-sm text-[10px] text-[var(--text-color)] uppercase font-bold h-full flex justify-center items-center">
              đăng nhập
            </span>
          </button>
        )}
      />
      <CompoundModal.Content style={{ top: 0 }}>
        <LoginModalForm />
      </CompoundModal.Content>
    </CompoundModal>
  );
};

export default LoginModal;
