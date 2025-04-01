import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateRageFilter({ onChange, value, ...rest }) {
  const [dateRange, setDateRange] = useState(value || [null, null]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    if (value) {
      setDateRange(value);
    }
  }, [value]);

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
