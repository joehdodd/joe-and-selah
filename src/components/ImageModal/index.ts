import { ReactNode, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, open }: { children?: ReactNode }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = open ? children : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("__modal")
    );
  } else {
    return null;
  }
};

export default Modal;
