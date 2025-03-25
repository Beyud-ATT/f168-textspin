import { Flex, Image } from "antd";
import Logo from "../../assets/logo.png";
import LoginModal from "../../components/LoginModal";
import { useAuth } from "../../assets/contexts/AuthContext";
import UserImg from "../../assets/user-img.png";

export default function MainHeader({ Layout, ...rest }) {
  const { Header } = Layout;
  const { isAuthenticated } = useAuth();

  return (
    <Header {...rest} className="flex items-center justify-around !h-[86px]">
      <div className="pt-3">
        <Image
          src={Logo}
          alt="logo"
          preview={false}
          className="md:!w-[138px] md:!h-[66px] !w-[73px] !h-[34px]"
        />
      </div>
      <Flex vertical justify="center" align="center">
        {isAuthenticated ? (
          <Flex justify="center" align="center" gap={10}>
            <Flex vertical gap={5}>
              <p className="text-[#FB8C00] md:text-lg text-sm font-semibold">
                Xin chào,
              </p>
              <p className="text-white md:text-2xl text-lg font-semibold">
                {localStorage.getItem("username")}
              </p>
            </Flex>
            <Image src={UserImg} alt="logo" preview={false} />
          </Flex>
        ) : (
          <LoginModal />
        )}
      </Flex>
    </Header>
  );
}
