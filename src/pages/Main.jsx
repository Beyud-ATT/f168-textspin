import Mobile from "./Mobile";
import PC from "./PC";
import { Flex, Image } from "antd";
import PC1 from "../assets/pc1.png";
import PC2 from "../assets/pc2.png";
import PC3 from "../assets/pc3.png";
import MB1 from "../assets/mb1.png";
import MB2 from "../assets/mb2.png";
import MB3 from "../assets/mb3.png";
import TopTable from "../components/TopTable";

export default function Main() {
  return (
    <>
      <div className="xl:block xl:visible xl:opacity-100 hidden invisible opacity-0 mb-20">
        <PC />
      </div>
      <div className="xl:hidden xl:invisible xl:opacity-0 block visible opacity-100 mb-5">
        <Mobile />
      </div>

      <div className="max-w-screen-2xl mx-auto lg:!px-6 md:!px-4 !px-2">
        <TopTable />
      </div>

      {/* PC / Tablet */}
      <div className="max-w-screen-2xl mx-auto">
        <Flex
          vertical
          justify="center"
          align="center"
          className="md:flex md:visible md:opacity-100 md:h-auto md:w-auto h-0 w-0 hidden invisible opacity-0 lg:!px-6 !px-4 xl:gap-20 gap-5"
        >
          <Flex justify="center" align="center" gap={40}>
            <Image
              src={PC1}
              preview={false}
              alt="event-detail"
              loading="lazy"
            />
          </Flex>

          <Flex justify="center" align="center" gap={40}>
            <Image
              src={PC2}
              preview={false}
              alt="event-detail"
              loading="lazy"
            />
          </Flex>

          <Flex justify="center" align="center">
            <Image
              src={PC3}
              preview={false}
              alt="gethelp-detail"
              loading="lazy"
            />
          </Flex>
        </Flex>
      </div>

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
      </Flex>
    </>
  );
}
