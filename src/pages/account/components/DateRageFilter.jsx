import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateRageFilter({ onChange, ...rest }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = (date) => {
    setDateRange(date);
    typeof onChange === "function" && onChange(date);
  };

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={handleDateChange}
      isClearable={true}
      className="bg-white text-xl md:w-[324px] w-full h-[38px] rounded-lg px-4 border"
      placeholderText="Chọn thời gian"
      {...rest}
    />
  );
}
