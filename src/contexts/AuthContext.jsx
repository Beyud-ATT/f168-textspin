import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  // useEffect,
  useState,
} from "react";
import { login as loginAPI } from "../services/authAPI";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
// import FingerprintJS from "@fingerprintjs/fingerprintjs";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // const [fpHash, setFpHash] = useState("");
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const queryClient = useQueryClient();

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
        const { token, displayName } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", displayName);
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

  const logout = useCallback(() => {
    // localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    navigate("/");
    queryClient.clear();
  }, [navigate]);

  useEffect(() => {
    if (
      pathname.includes("/account") &&
      localStorage.getItem("token") === null
    ) {
      setIsAuthenticated(false);
      navigate("/");
    }
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
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
