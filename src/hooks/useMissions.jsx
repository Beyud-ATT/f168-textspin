import { useQuery } from "@tanstack/react-query";
import { getMissions } from "../services/commonsAPI";

export default function useMissions() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["missions"],
    queryFn: getMissions,
  });

  if (isError) {
    console.error(error.message);
  }

  return { missions: data, isLoading };
}
