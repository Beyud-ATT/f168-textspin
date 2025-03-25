import CustomButton from "./Button";
import { CompoundModal } from "./CompoundModal";
import MissionTable from "./MissionTable";

function MissionMobileModalInner() {
  return <MissionTable />;
}

export default function MissionMobileModal() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <CustomButton
            label="nhiệm vụ"
            px="5"
            py="1"
            text="14px"
            onClick={openModal}
          />
        )}
      />
      <CompoundModal.Content>
        <MissionMobileModalInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
