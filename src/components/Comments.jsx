import { Form, Input, Spin } from "antd";
import useSubmitComments from "../hooks/useSubmitComments";
import { toast } from "react-toastify";
import useGetComments from "../hooks/useGetComments";
import { useAuth } from "../contexts/AuthContext";
import { maskString } from "../utils/helper";

export default function Comments() {
  const [form] = Form.useForm();
  const { isAuthenticated } = useAuth();
  const { mutate: submitComment } = useSubmitComments();
  const { comments, isLoading } = useGetComments();

  const handleFinish = (values) => {
    submitComment(values, {
      onSuccess: () => {
        form.resetFields();
        toast.success("Bình luận của bạn sẽ được xét duyệt, xin cảm ơn !!!");
      },
      onError: () => {
        toast.error("Lỗi khi gửi bình luận");
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center lg:py-5 py-3 lg:gap-3 gap-5">
      <div className="flex flex-col gap-3 bg-white rounded-lg w-[95%] h-[388px] overflow-y-auto p-5">
        {isLoading ? (
          <div className="flex w-full h-full justify-center items-center">
            <Spin size="large" />
          </div>
        ) : (
          comments?.data?.map((comment, index) => {
            if (index > 14) {
              return null;
            }
            if (index <= 14) {
              return (
                <div
                  key={index}
                  className="flex gap-2 md:text-[16px] text-[14px]"
                >
                  <p className="text-[var(--orange-shade)] uppercase">
                    {maskString(comment.username)}:
                  </p>
                  <p>{comment.message}</p>
                </div>
              );
            }
          })
        )}
      </div>

      <Form
        form={form}
        onFinish={handleFinish}
        className="bg-white rounded-lg !m-0 w-[95%]"
      >
        <Form.Item name="message" className="w-full h-full rounded-lg !m-0">
          <Input
            placeholder="Nhập bình luận"
            className="h-[51px]"
            disabled={!isAuthenticated}
            suffix={
              <button
                type="submit"
                className={`text-white translate-x-1 text-lg font-bold font-carbon px-8 py-1 rounded-full ${
                  isAuthenticated ? "bg-[var(--orange-shade)]" : "bg-[#8F8F8F]"
                }`}
                disabled={!isAuthenticated}
              >
                Gửi
              </button>
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
}
