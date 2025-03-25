import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/accountAPI";
import { useAuth } from "../assets/contexts/AuthContext";

export default function useGetMe() {
  const { isAuthenticated } = useAuth();

  const {
    data: me,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getMe"],
    queryFn: getMe,
    enabled: isAuthenticated,
  });

  if (isError) {
    console.error("Lỗi khi tải thông tin người dùng, hãy đăng nhập lại !!!");
  }

  return { me, isLoading };
}
