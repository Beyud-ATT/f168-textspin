import { useMutation } from "@tanstack/react-query";
import { missionHistory } from "../services/historiesAPI";
import { toast } from "react-toastify";

export default function useMissionHistory() {
  return useMutation({
    mutationFn: missionHistory,
    onSuccess: () => {
      toast.success("Tìm kiếm chi tiết điểm tích luỹ thành công !!!");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
}
