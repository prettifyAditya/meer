"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";

const CloseModal = () => {
  const { closeModal } = useModal();

  return (
    <button onClick={() => closeModal()} className="close-modal">
      Close <Image src="/icon/close.svg" alt="icon" width={20} height={20} />
    </button>
  );
};

export default CloseModal;
