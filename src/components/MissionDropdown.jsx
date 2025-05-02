import LightOn from "../assets/light-on.png";
import LightOff from "../assets/light-off.png";
import { Flex, Image } from "antd";
import { useCallback, useEffect, useState } from "react";
import MissionTable from "./MissionTable";
import { screenType, useDevice } from "../contexts/ResponsiveContext";

function MissionDropDownTrigger({ onClick }) {
  const [isLightOn, setIsLightOn] = useState(false);
  const { deviceType } = useDevice();
  const isMobile =
    deviceType === screenType.MOBILE || deviceType === screenType.TABLET;

  const handleLightToggle = useCallback(() => {
    setIsLightOn((state) => !state);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleLightToggle();
    }, 200);

    return () => clearInterval(intervalId);
  }, [handleLightToggle]);

  return (
    <Flex align="center" justify="end">
      <Image
        src={isLightOn ? LightOn : LightOff}
        alt="light-on"
        preview={false}
        loading="lazy"
        width={isMobile ? 45 : 100}
        height={isMobile ? 45 : 100}
        onClick={onClick}
      />
    </Flex>
  );
}

export default function MissionDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = useCallback(() => {
    setIsDropdownOpen((state) => !state);
  }, []);

  return (
    <div className="relative lg:w-[440px] w-[372px]">
      <MissionDropDownTrigger onClick={handleDropdownToggle} />
      {isDropdownOpen && (
        <div className="z-50 absolute top-full right-0">
          <MissionTable />
        </div>
      )}
    </div>
  );
}
