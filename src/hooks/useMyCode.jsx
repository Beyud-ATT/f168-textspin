import { useQuery } from "@tanstack/react-query";
import { myCode } from "../services/historiesAPI";
import { toast } from "react-toastify";

export default function useMyCode() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["myCode"],
    queryFn: myCode,
  });

  if (isError) {
    toast.error(error.message);
  }

  return { myCode: data, isLoading };
}
