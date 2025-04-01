import { useMutation } from "@tanstack/react-query";
import { sendWord } from "../services/historiesAPI";
import { toast } from "react-toastify";

export default function useGetSendWord() {
  return useMutation({
    mutationFn: sendWord,
    onSuccess: () => {
      toast.success("Tìm kiếm tặng chữ thành công !!!");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
}
