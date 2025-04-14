import Mobile from "./Mobile";
import PC from "./PC";
import { Flex, Image } from "antd";
import PC1 from "../assets/change2.webp";
import PC2 from "../assets/pc-2.webp";
import PC3 from "../assets/pc-3.webp";
import PC4 from "../assets/change1.webp";
import MB1 from "../assets/change1.webp";
import MB2 from "../assets/change3.webp";
import MB3 from "../assets/mb-3.webp";
import MB4 from "../assets/mb-4.webp";

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
        <Flex justify="center" align="center" gap={40}>
          <Image src={PC4} preview={false} alt="event-detail" loading="lazy" />
          <Flex vertical justify="space-between" gap={40}>
            <Image
              src={PC3}
              preview={false}
              alt="event-detail"
              loading="lazy"
            />
            <Image
              src={PC2}
              preview={false}
              alt="event-detail"
              loading="lazy"
            />
          </Flex>
        </Flex>

        <Flex justify="center" align="center">
          <Image
            src={PC1}
            preview={false}
            alt="gethelp-detail"
            loading="lazy"
          />
        </Flex>
      </Flex>

      {/* Mobile */}
      <Flex
        vertical
        className="md:hidden md:invisible md:opacity-0 md:h-0 md:w-0 flex visible opacity-100 !px-2 !mb-6"
        gap={30}
      >
        <Flex justify="center" align="center">
          <Image src={MB1} preview={false} alt="event-detail" loading="lazy" />
        </Flex>

        <Flex justify="center" align="center">
          <Image
            src={MB2}
            preview={false}
            alt="gethelp-detail"
            loading="lazy"
          />
        </Flex>

        <Flex justify="center" align="center">
          <Image
            src={MB3}
            preview={false}
            alt="gethelp-detail"
            loading="lazy"
          />
        </Flex>

        <Flex justify="center" align="center">
          <Image
            src={MB4}
            preview={false}
            alt="gethelp-detail"
            loading="lazy"
          />
        </Flex>
      </Flex>
    </>
  );
}
