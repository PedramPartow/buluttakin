import { memo, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const MemoModal = ({
  children,
  isOpen,
  onClose,
  customClass = "",
}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 bg-dark backdrop-blur-sm flex justify-center items-end sm:items-center z-50"
      onClick={onClose}
    >
      <div
        className={twMerge(
          "bg-white sm:rounded p-4 w-full md:max-w-[900px] sm:m-4 max-sm:max-h-[80%] overflow-y-auto",
          customClass
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const Modal = memo(MemoModal);

export default Modal;
