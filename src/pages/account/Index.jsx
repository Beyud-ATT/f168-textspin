import { Flex } from "antd";
import LeftNav from "./LeftNav";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export default function Account() {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  const arr = pathName.split("/").filter(Boolean);

  useEffect(() => {
    if (arr.length < 2 && pathName.includes("/account")) {
      navigate("/account/my-code");
    }
  }, [pathName, arr, navigate]);

  return (
    <div className="max-w-screen-xl w-full mx-auto pt-4">
      <Flex className="w-full lg:flex-row flex-col lg:gap-4">
        <LeftNav />
        <div className="w-full max-h-[80dvh] overflow-y-auto">
          <Outlet />
        </div>
      </Flex>
    </div>
  );
}
