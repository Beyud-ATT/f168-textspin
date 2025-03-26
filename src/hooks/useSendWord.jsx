import { useMutation } from "@tanstack/react-query";
import { sendWord } from "../services/accountAPI";
import { toast } from "react-toastify";

export default function useSendWord() {
  return useMutation({
    mutationFn: sendWord,
    onSuccess: () => {
      toast.success("Gửi chữ thành công !!!");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
}
