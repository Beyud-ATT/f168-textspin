import { Outlet } from "react-router";

export default function MainBody({ Layout, ...rest }) {
  const { Content } = Layout;
  return (
    <Content
      {...rest}
      style={{
        background: "linear-gradient(180deg, #FEE59E 24.81%, #FFFBEE 121.64%)",
      }}
    >
      <div className="max-w-[1920px] mx-auto min-h-screen">
        <Outlet />
      </div>
    </Content>
  );
}
