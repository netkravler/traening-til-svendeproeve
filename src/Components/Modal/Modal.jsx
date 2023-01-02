import React from "react";

import { ModalStyled } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";

const Modal = () => {
  const { toggleModal, setToggleModal, modalPayload } = useModalStore();





  return (
    <ModalStyled showmodal={toggleModal}>
      <main>
        <span className="close" onClick={() => setToggleModal("none")}>
          &times;
        </span>
        {modalPayload}
      </main>
    </ModalStyled>
  );
};

export default Modal;
