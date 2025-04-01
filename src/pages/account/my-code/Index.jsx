import { Flex, Table, Typography } from "antd";
import useMyCode from "../../../hooks/useMyCode";
import moment from "moment";
import { FaRegCopy } from "react-icons/fa6";
import { toast } from "react-toastify";

const columns = [
  {
    title: "Thời gian nhận",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => moment(text).format("DD/MM/YYYY"),
  },
  {
    title: "Mã bốc thăm đã nhận",
    dataIndex: "code",
    key: "code",
    render: (text) => {
      return (
        <Flex
          gap={10}
          justify="center"
          align="center"
          className="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(text);
            toast.success("Mã bốc thăm đã được sao chép");
          }}
        >
          <p>{text}</p>
          <FaRegCopy />
        </Flex>
      );
    },
  },
];

export default function MyCode() {
  const { myCode, isLoading } = useMyCode();

  return (
    <div
      className="w-full h-fit rounded-lg"
      style={{
        background: "rgba(255, 199, 130, 0.50)",
      }}
    >
      <div className="py-7 px-6 rounded-t-lg">
        <Typography.Title level={3}>Mã may mắn của tôi</Typography.Title>
      </div>
      <div className="bg-white rounded-lg md:p-6 p-3">
        <Table
          columns={columns}
          dataSource={myCode?.data}
          pagination={false}
          loading={isLoading}
          scroll={{ y: 400 }}
        />
      </div>
    </div>
  );
}
