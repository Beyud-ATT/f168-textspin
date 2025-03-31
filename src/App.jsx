import { Routes, Route } from "react-router";
import MainLayout from "./layout/Index";
import Main from "./pages/Main";
import { ToastContainer } from "react-toastify";
import Account from "./pages/account/Index";
import MissionHistory from "./pages/account/mission-history/Index";
import MyCode from "./pages/account/my-code/Index";
import ReceiveWord from "./pages/account/receive-word/Index";
import SendWord from "./pages/account/send-word/Index";

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
