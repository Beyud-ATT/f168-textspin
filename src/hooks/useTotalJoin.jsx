import { useQuery } from "@tanstack/react-query";
import { totalJoin } from "../services/commonsAPI";

export default function useTotalJoin() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["totalJoin"],
    queryFn: totalJoin,
  });

  if (isError) {
    console.error(error.message);
  }

  return { totalJoin: data, isLoading };
}
