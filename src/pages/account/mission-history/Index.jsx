import { Flex, Form, Table, Typography } from "antd";
import DateRageFilter from "../components/DateRageFilter";
import useMissionHistory from "../../../hooks/useMissionHistory";
import moment from "moment";
import { useState } from "react";

const columns = [
  {
    title: "Ngày nhận",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => moment(text).format("DD/MM/YYYY"),
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
  const [date, setDate] = useState([
    moment().subtract(7, "days").toISOString(),
    moment().toISOString(),
  ]);
  const [dataSource, setDataSource] = useState();

  const [form] = Form.useForm();
  const { mutate: missionHistory, isLoading } = useMissionHistory();

  function handleFinish() {
    missionHistory(
      {
        startTime: date[0],
        endTime: date[1],
      },
      {
        onSuccess: (data) => {
          setDataSource(data?.data?.filter((item) => item.isCompleted));
        },
      }
    );
  }

  return (
    <div
      className="w-full h-fit rounded-lg"
      style={{
        background: "rgba(255, 199, 130, 0.50)",
      }}
    >
      <div className="py-7 px-6 rounded-t-lg">
        <Form form={form} onFinish={handleFinish}>
          <Typography.Title level={3}>Chi tiết điểm tích luỹ</Typography.Title>
          <Flex gap={10} className="!py-4 lg:flex-row lg:items-center flex-col">
            <span className="text-lg">Thời gian tặng chữ</span>
            <DateRageFilter onChange={(date) => setDate(date)} value={date} />
          </Flex>
          <Flex align="center" gap={20} className="!py-2">
            <Flex
              justify="center"
              align="center"
              className="bg-[#8F8F8F] text-lg text-white font-bold px-5 py-1 rounded-lg w-[150px] h-[39px] cursor-pointer"
              onClick={() =>
                setDate([
                  moment().subtract(7, "days").toISOString(),
                  moment().toISOString(),
                ])
              }
            >
              Đặt lại
            </Flex>
            <Flex
              justify="center"
              align="center"
              className="bg-[var(--orange-shade)] text-lg text-white font-bold px-8 py-1 rounded-lg w-[255px] h-[39px] cursor-pointer"
              onClick={form.submit}
            >
              Kiểm tra
            </Flex>
          </Flex>
        </Form>
      </div>
      <div className="bg-white rounded-lg md:p-6 p-3">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          loading={isLoading}
          scroll={{ y: 400 }}
        />
      </div>
    </div>
  );
}
