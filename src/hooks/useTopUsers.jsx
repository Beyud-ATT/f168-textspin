import { useQuery } from "@tanstack/react-query";
import { getTopUsers } from "../services/commonsAPI";

export default function useTopUsers() {
  const {
    data: topUsers,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["topUsers"],
    queryFn: getTopUsers,
  });

  if (isError) {
    console.error(error.message);
  }

  return { topUsers, isLoading };
}
