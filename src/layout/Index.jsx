import React from "react";
import { Layout } from "antd";
import MainHeader from "./Header/Index";
import MainBody from "./Body/Index";

const MainLayout = () => (
  <Layout className="min-h-dvh !max-w-full">
    <MainHeader Layout={Layout} />
    <MainBody Layout={Layout} />
  </Layout>
);
export default MainLayout;
