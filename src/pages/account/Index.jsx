import { Flex } from "antd";
import LeftNav from "./LeftNav";
import { Outlet } from "react-router";

export default function Account() {
  return (
    <Flex className="lg:flex-row flex-col lg:gap-4">
      <LeftNav />
      <Outlet />
    </Flex>
  );
}
