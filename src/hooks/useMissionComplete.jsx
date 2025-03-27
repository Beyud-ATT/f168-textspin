import { useMutation, useQueryClient } from "@tanstack/react-query";
import { missionComplete } from "../services/accountAPI";
import { toast } from "react-toastify";

export default function useMissionComplete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: missionComplete,
    onSuccess: () => {
      toast.success("Nhận lượt quay thành công !!!");
      queryClient.invalidateQueries({
        queryKey: ["getMe"],
      });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
}
