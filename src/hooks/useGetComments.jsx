import { useQuery } from "@tanstack/react-query";
import { getComments } from "../services/commonsAPI";

export default function useGetComments() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });

  if (isError) {
    console.error(error.message);
  }

  return { comments: data, isLoading };
}
