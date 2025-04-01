import { useQuery } from "@tanstack/react-query";
import { receiveWord } from "../services/historiesAPI";
import { toast } from "react-toastify";

export default function useReceiveWord() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["receiveWord"],
    queryFn: receiveWord,
  });

  if (isError) {
    toast.error(error.message);
  }

  return { receiveWord: data, isLoading };
}
