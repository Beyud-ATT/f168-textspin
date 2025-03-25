import { Button, Modal } from "antd";
import { createContext, useCallback, useContext, useState } from "react";
import { ModalCloseIcon } from "../utils/svg";

const ModalContext = createContext();

function CompoundModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function ModalTrigger({ render }) {
  const { openModal } = useModal();
  return render(openModal);
}

function ModalContent({ children, hideCloseButton = false, ...rest }) {
  const { isOpen, closeModal } = useModal();
  return (
    <Modal
      open={isOpen}
      onCancel={closeModal}
      footer={null}
      closeIcon={false}
      classNames={{
        content: "!bg-transparent !shadow-none ",
      }}
      {...rest}
    >
      {children}

      {!hideCloseButton && (
        <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2">
          <Button
            type="default"
            shape="circle"
            onClick={closeModal}
            className="flex items-center justify-center w-8 h-8 text-lg !bg-transparent !border-none"
          >
            <ModalCloseIcon />
          </Button>
        </div>
      )}
    </Modal>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a CompoundModal");
  }
  return context;
}

CompoundModal.Trigger = ModalTrigger;
CompoundModal.Content = ModalContent;

export { CompoundModal, useModal };
