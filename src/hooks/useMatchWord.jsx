import { useMutation } from "@tanstack/react-query";
import { matchWord } from "../services/accountAPI";
import { toast } from "react-toastify";

export default function useMatchWord() {
  return useMutation({
    mutationFn: matchWord,
    onSuccess: () => {
      toast.success("Ghép chữ thành công !!!");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
}
