import { useMutation } from "@tanstack/react-query";
import { submitComments } from "../services/commentAPI";

export default function useSubmitComments() {
  return useMutation({
    mutationFn: submitComments,
  });
}
