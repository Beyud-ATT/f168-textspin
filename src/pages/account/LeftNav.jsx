import { Flex, Image, Menu } from "antd";
import UserImg from "../../assets/user-img.png";
import {
  MissionHistoryIcon,
  MyCodeIcon,
  ReceiveWordIcon,
  SendWordIcon,
} from "../../utils/svg";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const items = [
  {
    label: "Lịch sử nhận chữ",
    key: "receive-word",
    icon: ReceiveWordIcon,
  },
  {
    label: "Lịch sử tặng chữ",
    key: "send-word",
    icon: SendWordIcon,
  },
  {
    label: "Chi tiết điểm tích luỹ",
    key: "mission-history",
    icon: MissionHistoryIcon,
  },
  {
    label: "Mã may mắn của tôi",
    key: "my-code",
    icon: MyCodeIcon,
  },
];

function NavigationMenu() {
  const navigate = useNavigate();
  const pathName = useLocation().pathname.split("/").at(-1);
  const [current, setCurrent] = useState(pathName);

  const menuItems = useMemo(() => {
    return items.map((item) => {
      const isActive = current === item.key;

      return {
        key: item.key,
        label: (
          <Flex
            gap={10}
            align="center"
            className={`${
              isActive ? "bg-[var(--orange-shade)]" : ""
            } hover:bg-[var(--orange-shade)] rounded-lg !py-2 !px-5`}
          >
            <item.icon fill={isActive ? "#fff" : "#1F0404"} />
            <p
              className={`${
                isActive ? "text-white font-bold" : "text-[#1F0404]"
              } md:text-lg text-[10px]`}
            >
              {item.label}
            </p>
          </Flex>
        ),
      };
    });
  }, [current]);

  function handleSelect({ key }) {
    setCurrent(key);
    navigate(`/account/${key}`);
  }

  return (
    <div className="lg:flex flex-col gap-4 grid grid-cols-2 w-[90%] mx-auto mt-6">
      {menuItems.map((item) => (
        <button key={item.key} onClick={() => handleSelect(item)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default function LeftNav() {
  const { logout } = useAuth();
  return (
    <div
      className="min-w-[311px] lg:min-h-[728px] lg:rounded-lg lg:py-0 py-6"
      style={{ background: "rgba(252, 139, 0, 0.50)" }}
    >
      <Flex
        justify="center"
        align="center"
        gap={30}
        className="border-b-1 border-[#C16C00] !py-6 lg:flex-col flex-row"
      >
        <Flex gap={10} align="center" className="lg:flex-col flex-row">
          <Image
            src={UserImg}
            alt="logo"
            preview={false}
            className="!w-[100px] !h-[100px]"
            style={{
              borderRadius: "63.412px",
              border: "2.882px solid var(--orange-shade)",
            }}
          />
          <p className="md:text-2xl text-lg font-semibold">
            {localStorage.getItem("username")}
          </p>
        </Flex>
        <button
          className="rounded-2xl bg-white text-[#9F9F9F] text-lg font-thin"
          style={{ width: "144px", height: "38px" }}
          onClick={logout}
        >
          Đăng xuất
        </button>
      </Flex>
      <NavigationMenu />
    </div>
  );
}
