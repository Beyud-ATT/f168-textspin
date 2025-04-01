import { Flex, Table, Typography } from "antd";
import DateRageFilter from "../components/DateRageFilter";
import useMissionHistory from "../../../hooks/useMissionHistory";
import moment from "moment";

const columns = [
  {
    title: "Thời gian nhận",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => moment(text).format("DD/MM/YYYY HH:mm:ss"),
  },
  {
    title: "Loại điểm tích luỹ",
    dataIndex: "type",
    key: "type",
    render: (_, record) => {
      return (
        <p>
          {record?.missionContentTemplete?.replaceAll(
            "%S",
            record?.missionGoal
          )}
        </p>
      );
    },
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (_, record) => {
      return <p>{record?.isCompleted ? "Đã nhận" : "Chưa nhận"}</p>;
    },
  },
];

export default function MissionHistory() {
  const { missionHistory, isLoading } = useMissionHistory();

  const dataSource = missionHistory?.data?.filter((item) => item.isCompleted);
  // const dataSource = missionHistory?.data;

  return (
    <div
      className="w-full h-fit rounded-lg"
      style={{
        background: "rgba(255, 199, 130, 0.50)",
      }}
    >
      <div className="py-7 px-6 rounded-t-lg">
        <Typography.Title level={3}>Chi tiết điểm tích luỹ</Typography.Title>
        <Flex gap={10} className="!py-4 lg:flex-row lg:items-center flex-col">
          <span className="text-lg">Thời gian tặng chữ</span>
          <DateRageFilter onChange={(date) => console.log(date)} />
        </Flex>
        <Flex align="center" gap={20} className="!py-2">
          <Flex
            justify="center"
            align="center"
            className="bg-[#8F8F8F] text-lg text-white font-bold px-5 py-1 rounded-lg w-[150px] h-[39px]"
          >
            Đặt lại
          </Flex>
          <Flex
            justify="center"
            align="center"
            className="bg-[var(--orange-shade)] text-lg text-white font-bold px-8 py-1 rounded-lg w-[255px] h-[39px]"
          >
            Kiểm tra
          </Flex>
        </Flex>
      </div>
      <div className="bg-white rounded-lg md:p-6 p-3">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          loading={isLoading}
          scroll={{ y: 400 }}
          sticky
        />
      </div>
    </div>
  );
}
