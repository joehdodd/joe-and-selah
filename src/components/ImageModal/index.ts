import { ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  children,
  open,
}: {
  children?: ReactNode;
  open?: boolean;
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = open ? children : null;

  if (isBrowser) {
    const container = document.getElementById("__modal");
    if (container) {
      return createPortal(modalContent, container);
    }
  }

  return null;
};

export default Modal;
