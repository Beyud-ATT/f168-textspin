import { Image } from "antd";
import { CompoundModal } from "./CompoundModal";
import MissionTable from "./MissionTable";
import MissionMobileBtn from "../assets/mission-mobile-btn.png";

function MissionMobileModalInner() {
  return <MissionTable />;
}

export default function MissionMobileModal() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <Image
            src={MissionMobileBtn}
            preview={false}
            alt="mission-mobile-btn"
            onClick={openModal}
            className="my-3"
          />
        )}
      />
      <CompoundModal.Content>
        <MissionMobileModalInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
