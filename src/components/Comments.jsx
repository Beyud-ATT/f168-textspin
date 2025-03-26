import { Form, Input, Spin } from "antd";
import useSubmitComments from "../hooks/useSubmitComments";
import { toast } from "react-toastify";
import useGetComments from "../hooks/useGetComments";

export default function Comments() {
  const [form] = Form.useForm();
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
      <div className="flex flex-col gap-3 bg-white rounded-lg w-[95%] h-[388px] overflow-y-auto">
        {isLoading ? (
          <div className="flex w-full h-full justify-center items-center">
            <Spin size="large" />
          </div>
        ) : (
          comments?.data?.map((comment, index) => {
            return (
              <div
                key={index}
                className="flex lg:flex-row flex-col gap-2 text-[16px]"
              >
                <p className="text-[#FB8C00] uppercase">{comment.username}: </p>
                <p>{comment.message}</p>
              </div>
            );
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
            placeholder="Nhập số lượng"
            className="h-[71px]"
            suffix={
              <button
                type="submit"
                className="text-white text-lg font-bold font-carbon px-8 py-1 rounded-full bg-[#FB8C00]"
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
