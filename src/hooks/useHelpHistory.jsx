import { useQuery } from "@tanstack/react-query";
import { listWordSend } from "../services/commonsAPI";

export default function useHelpHistory() {
  const {
    data: helpHistory,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["helpHistory"],
    queryFn: listWordSend,
  });

  if (isError) {
    console.error(error.message);
  }

  return { helpHistory, isLoading };
}
