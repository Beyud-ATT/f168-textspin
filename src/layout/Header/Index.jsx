import { Flex, Image } from "antd";
import Logo from "../../assets/logo.png";
import LoginModal from "../../components/LoginModal";
import UserImg from "../../assets/user-img.png";
import SignUpBtn from "../../components/SignUpBtn";
import CustomButton from "../../components/Button";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function MainHeader({ Layout, ...rest }) {
  const { Header } = Layout;
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <Header
      {...rest}
      className="flex items-center md:justify-around justify-between !h-[86px]"
    >
      <div className="pt-3">
        <Image
          src={Logo}
          alt="logo"
          preview={false}
          className="md:!w-[138px] md:!h-[66px] !w-[73px] !h-[34px]"
          onClick={() => navigate("/")}
        />
      </div>
      <Flex vertical justify="center" align="center">
        {isAuthenticated ? (
          <Flex justify="center" align="center" gap={30}>
            <CustomButton
              label="Tài khoản"
              className={`md:px-7 py-1 md:!text-2xl !text-[12px] lg:h-[52px] md:h-[35px] h-[25px] p-3 flex justify-center items-center whitespace-nowrap`}
              onClick={() => navigate("/account/my-code")}
            />
            <Flex justify="center" align="center" gap={10}>
              <Flex vertical gap={5}>
                <p className="text-[var(--orange-shade)] md:text-lg text-sm font-semibold">
                  Xin chào,
                </p>
                <p className="text-white md:text-2xl text-lg font-semibold">
                  {localStorage.getItem("username")}
                </p>
              </Flex>
              <Image src={UserImg} alt="logo" preview={false} />
            </Flex>
          </Flex>
        ) : (
          <Flex className="md:flex-row flex-col lg:gap-5 gap-2">
            <SignUpBtn />
            <LoginModal />
          </Flex>
        )}
      </Flex>
    </Header>
  );
}
