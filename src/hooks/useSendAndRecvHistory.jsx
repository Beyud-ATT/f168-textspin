import { useQuery } from "@tanstack/react-query";
import { sendAndRecvHistories as sendAndRecvHistoriesService } from "../services/accountAPI";

export default function useSendAndRecvHistory() {
  const {
    data: sendAndRecvHistories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["sendAndRecvHistories"],
    queryFn: sendAndRecvHistoriesService,
  });

  if (isError) {
    console.error(error.message);
  }

  return { sendAndRecvHistories, isLoading };
}
