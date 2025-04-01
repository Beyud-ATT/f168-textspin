import { useQuery } from "@tanstack/react-query";
import { sendWord } from "../services/historiesAPI";
import { toast } from "react-toastify";

export default function useGetSendWord() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["sendWord"],
    queryFn: sendWord,
  });

  if (isError) {
    toast.error(error.message);
  }

  return { sendWord: data, isLoading };
}
