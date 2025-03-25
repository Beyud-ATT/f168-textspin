import CustomButton from "./Button";
import { CompoundModal } from "./CompoundModal";
import { Image } from "antd";
import RewardBg from "../assets/reward-1.webp";

function RewardMobileModalInner() {
  return (
    <div>
      <Image src={RewardBg} preview={false} alt="reward-bg" loading="lazy" />
    </div>
  );
}

export default function RewardMobileModal() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <CustomButton
            label="giải thưởng"
            px="4"
            py="1"
            text="14px"
            onClick={openModal}
          />
        )}
      />
      <CompoundModal.Content>
        <RewardMobileModalInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
