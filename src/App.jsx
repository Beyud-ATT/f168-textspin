import { Routes, Route, Link } from "react-router";
import MainLayout from "./layout/Index";
import Main from "./pages/Main";
import { ToastContainer } from "react-toastify";
import Account from "./pages/account/Index";
import MissionHistory from "./pages/account/mission-history/Index";
import MyCode from "./pages/account/my-code/Index";
import ReceiveWord from "./pages/account/receive-word/Index";
import SendWord from "./pages/account/send-word/Index";
// import { Flex, Image, Typography } from "antd";
// import MainImg from "./assets/main-img-1.png";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/account" element={<Account />}>
            <Route path="mission-history" element={<MissionHistory />} />
            <Route path="my-code" element={<MyCode />} />
            <Route path="receive-word" element={<ReceiveWord />} />
            <Route path="send-word" element={<SendWord />} />
          </Route>
        </Route>
        {/* <Route
          path="*"
          element={
            <Flex
              vertical
              justify="center"
              align="center"
              className="bg-[var(--header-bg)] h-screen"
              gap={50}
            >
              <Image src={MainImg} alt="main image" preview={false} />
              <Link to="https://www.facebook.com/groups/f168group">
                <Typography.Title
                  level={1}
                  className="!text-[var(--color-brand-primary)]"
                >
                  Thông Báo Sự Kiện Đã Kết Thúc - Theo Dõi F168 Chờ Đón Chương
                  Trình Quay Trở Lại
                </Typography.Title>
              </Link>
            </Flex>
          }
        /> */}
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
