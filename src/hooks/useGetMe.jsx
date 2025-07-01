import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/accountAPI";
import { useAuth } from "../contexts/AuthContext";

export default function useGetMe() {
  const { isAuthenticated, logout } = useAuth();

  const {
    data: me,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getMe"],
    queryFn: getMe,
    enabled: isAuthenticated && localStorage.getItem("token") !== null,
  });

  if (isError) {
    if (error.response.status === 401) {
      logout();
    }
    console.error("Lỗi khi tải thông tin người dùng, hãy đăng nhập lại !!!");
  }

  return { me, isLoading };
}
