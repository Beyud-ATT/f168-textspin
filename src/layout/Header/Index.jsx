import { Flex, Image } from "antd";
import Logo from "../../assets/logo.png";
import HomeIcon from "../../assets/home-icon.png";
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
    <Header {...rest} className="!h-[86px]">
      <div className="max-w-screen-2xl w-full mx-auto my-2">
        <Flex className="w-full flex items-center justify-between">
          <Flex className="pt-3 md:gap-2.5 gap-1" justify="center" align="end">
            <Image src={HomeIcon} preview={false} className="md:hidden block" />
            <Image
              src={Logo}
              alt="logo"
              preview={false}
              className="md:!w-[138px] md:!h-[66px] !w-[73px] !h-[34px]"
              onClick={() => navigate("/")}
            />
            <p className="text-white font-semibold text-xl border-b-[1.5px] border-[#FB8C00] pb-2 md:block hidden">
              Trang chủ
            </p>
          </Flex>
          <Flex vertical justify="center" align="center">
            {isAuthenticated ? (
              <Flex justify="center" align="center" className="md:gap-7 gap-3">
                <CustomButton
                  label="Tài khoản"
                  className={`md:px-7 py-1 md:!text-2xl !text-[12px] lg:h-[52px] md:h-[35px] h-[25px] p-3 flex justify-center items-center whitespace-nowrap`}
                  onClick={() => navigate("/account/my-code")}
                />
                <Flex justify="center" align="center" gap={10}>
                  <Flex vertical gap={5}>
                    <p className="text-[var(--orange-shade)] md:text-lg text-xs font-semibold">
                      Xin chào,
                    </p>
                    <p className="text-white md:text-2xl text-sm font-semibold">
                      {localStorage.getItem("username")}
                    </p>
                  </Flex>
                  <Image
                    src={UserImg}
                    alt="logo"
                    preview={false}
                    className="md:!w-[65px] md:!h-[65px] !w-[40px] !h-[40px]"
                  />
                </Flex>
              </Flex>
            ) : (
              <Flex className="md:flex-row flex-col lg:gap-5 gap-2">
                <SignUpBtn />
                <LoginModal />
              </Flex>
            )}
          </Flex>
        </Flex>
      </div>
    </Header>
  );
}
