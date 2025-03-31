import { Flex, Table, Typography } from "antd";
import DateRageFilter from "../components/DateRageFilter";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export default function MyCode() {
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
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    </div>
  );
}
