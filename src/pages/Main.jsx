import Mobile from "./Mobile";
import PC from "./PC";
import EventDetail from "../assets/event-detail.png";
import GetHelpDetail from "../assets/gethelp-detail.png";
import EventDetailMB from "../assets/event-detail-mb.png";
import GetHelpDetailMB from "../assets/gethelp-detail-mb.png";
import { Flex, Image } from "antd";

export default function Main() {
  return (
    <>
      <div className="xl:block xl:visible xl:opacity-100 hidden invisible opacity-0 mb-20">
        <PC />
      </div>
      <div className="xl:hidden xl:invisible xl:opacity-0 block visible opacity-100 mb-5">
        <Mobile />
      </div>

      {/* PC / Tablet */}
      <Flex
        vertical
        className="md:flex md:visible md:opacity-100 md:h-auto md:w-auto h-0 w-0 hidden invisible opacity-0 lg:!px-6 !px-4 xl:gap-20 gap-5"
      >
        <Flex justify="center" align="center">
          <Image
            src={EventDetail}
            preview={false}
            alt="event-detail"
            loading="lazy"
          />
        </Flex>

        <Flex justify="center" align="center">
          <Image
            src={GetHelpDetail}
            preview={false}
            alt="gethelp-detail"
            loading="lazy"
          />
        </Flex>
      </Flex>

      {/* Mobile */}
      <Flex
        vertical
        className="md:hidden md:invisible md:opacity-0 md:h-0 md:w-0 flex visible opacity-100 !px-2"
        gap={10}
      >
        <Flex justify="center" align="center">
          <Image
            src={EventDetailMB}
            preview={false}
            alt="event-detail"
            loading="lazy"
          />
        </Flex>

        <Flex justify="center" align="center">
          <Image
            src={GetHelpDetailMB}
            preview={false}
            alt="gethelp-detail"
            loading="lazy"
          />
        </Flex>
      </Flex>
    </>
  );
}
