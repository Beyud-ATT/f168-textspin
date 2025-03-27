import { ModalBackButton } from "../utils/svg";
import Comments from "./Comments";
import { CompoundModal, useModal } from "./CompoundModal";
import CommentsMobileTrigger from "../assets/comments-mobile-trigger.png";
import { Image } from "antd";

function CommentsMobileModalInner() {
  const { closeModal } = useModal();
  return (
    <div className="custom-gradient-bg">
      <div className="w-full h-full rounded-lg bg-[var(--bg-color)]">
        <button onClick={closeModal} className="ml-3 mt-3">
          <ModalBackButton />
        </button>
        <Comments />
      </div>
    </div>
  );
}

export default function CommentsMobileModal() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <Image
            src={CommentsMobileTrigger}
            preview={false}
            alt="comments-mobile-trigger"
            onClick={openModal}
            className="fixed top-[20%] right-0 !w-[52px] !h-[52px] z-30"
          />
        )}
      />
      <CompoundModal.Content hideCloseButton>
        <CommentsMobileModalInner />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
