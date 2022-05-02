import { useState } from "react";

export const useSsModal = () => {
    const [modalSsOpened, setModalSsOpened] = useState(false);
  
    const handleSsModal = (val) => {
      setModalSsOpened(val);
    }
  
    return {
      handleSsModal,
      modalSsOpened
    }
  };