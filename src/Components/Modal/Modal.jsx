import React from "react";
import { useEffect } from "react";
import { useShoppingCartStore } from "../ShoppingCart/useShoppingCartStore";
import { ModalStyled } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";

const Modal = () => {
  const { toggleModal, setToggleModal, modalPayload } = useModalStore();

  const { cartItems } = useShoppingCartStore();

  useEffect(() => {
    if (cartItems.length === 0) {
      setToggleModal("none");
    }
  }, [cartItems, setToggleModal]);

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
