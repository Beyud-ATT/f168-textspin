import { useQuery } from "@tanstack/react-query";
import { randomWord as randomWordService } from "../services/accountAPI";

export default function useRandomWord(enabled = true) {
  const {
    data: randomWord,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["random-word"],
    queryFn: randomWordService,
    enabled,
  });

  if (isError) {
    console.error(error.message);
  }

  return { randomWord, isLoading };
}
