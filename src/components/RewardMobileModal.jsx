import { CompoundModal } from "./CompoundModal";
import { Image } from "antd";
import RewardBg from "../assets/reward-1.webp";

function RewardMobileModalInner() {
  return <Image src={RewardBg} preview={false} alt="reward-bg" className="" />;
}

export default function RewardMobileModal() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <div
            className="fixed top-[30%] left-0 cursor-pointer z-30"
            onClick={openModal}
          >
            <Image
              src={RewardBg}
              preview={false}
              alt="reward-bg"
              width={117}
              height={117}
            />
          </div>
        )}
      />
      <CompoundModal.Content>
        <RewardMobileModalInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
