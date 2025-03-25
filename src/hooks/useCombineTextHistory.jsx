import { useQuery } from "@tanstack/react-query";
import { listWordCompleted } from "../services/historiesAPI";

export default function useCombineTextHistory() {
  const {
    data: combineTextHistory,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["combineTextHistory"],
    queryFn: listWordCompleted,
  });

  if (isError) {
    console.error(error.message);
  }

  return { combineTextHistory, isLoading };
}
