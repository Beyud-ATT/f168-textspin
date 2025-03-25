import {
  createContext,
  useCallback,
  useContext,
  // useEffect,
  useState,
} from "react";
import { login as loginAPI } from "../../services/authAPI";
import { toast } from "react-toastify";
// import FingerprintJS from "@fingerprintjs/fingerprintjs";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // const [fpHash, setFpHash] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null
  );

  // useEffect(() => {
  //   const setFp = async () => {
  //     const fp = await FingerprintJS.load();

  //     const { visitorId } = await fp.get();

  //     setFpHash(visitorId);
  //   };

  //   setFp();
  // }, []);

  const login = useCallback(async (data) => {
    try {
      const res = await loginAPI(data);
      if (res.status === 200) {
        const { token, username } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        setIsAuthenticated(true);
        toast.success("Đăng nhập thành công !!!");
      }
      return res;
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error in login:", error);
      throw error;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
