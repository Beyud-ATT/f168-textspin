import { useMutation } from "@tanstack/react-query";
import { receiveWord } from "../services/historiesAPI";
import { toast } from "react-toastify";

export default function useReceiveWord() {
  return useMutation({
    mutationFn: receiveWord,
    onSuccess: () => {
      toast.success("Tìm kiếm nhận chữ thành công !!!");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
}
