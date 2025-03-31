import { Outlet } from "react-router";

export default function MainBody({ Layout, ...rest }) {
  const { Content } = Layout;
  return (
    <Content
      {...rest}
      className="md:bg-[url(/src/assets/main-bg.jpg)] bg-[url(/src/assets/mobile-bg.webp)] bg-cover bg-top bg-no-repeat lg:py-10"
    >
      <div className="max-w-screen-2xl mx-auto min-h-screen">
        <Outlet />
      </div>
    </Content>
  );
}
