import { useQuery } from "@tanstack/react-query";
import { missionHistory } from "../services/historiesAPI";
import { toast } from "react-toastify";

export default function useMissionHistory() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["missionHistory"],
    queryFn: missionHistory,
  });

  if (isError) {
    toast.error(error.message);
  }

  return { missionHistory: data, isLoading };
}
