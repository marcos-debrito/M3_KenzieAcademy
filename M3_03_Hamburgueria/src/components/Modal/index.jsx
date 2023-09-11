import { useEffect, useRef } from "react";
import {
  ModalOverlay,
  HeaderModal,
  ModalPrice,
  ModalButton,
  OrderButton,
} from "./style";
import { ListItens } from "./ListItens/index.jsx";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
export const Modal = ({ setIsOpen, cartList, setCartList }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const totalValue = cartList.reduce(
    (acc, currentValue) => acc + currentValue.price,
    0
  );

  const toMoney = totalValue.toLocaleString("pt-BT", {
    style: "currency",
    currency: "BRL",
  });

  const removeAll = () => {
    if (cartList.length == 0) {
      return;
    }
    setCartList([]);
    localStorage.removeItem("@burguer");
  };

  const order = () => {
    toast.success("Pedido registrado");
    console.log(cartList);
  };

  const mouse = cartList.length > 0 ? "notDisable" : "disable";

  return (
    <ModalOverlay role="dialog">
      <motion.div animate={{ scale: [0, 1] }}>
        <div className="modal__box" ref={modalRef}>
          <HeaderModal>
            <span>Carrinho de compras</span>
            <button
              className="button__close"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              X
            </button>
          </HeaderModal>
          <>
            <ul>
              <ListItens cartList={cartList} setCartList={setCartList} />
            </ul>

            <ModalPrice className="modal__price">
              <span>Total</span>
              <p>{toMoney}</p>
            </ModalPrice>

            <ModalButton onClick={removeAll} cursor={mouse}>
              Remover todos os itens
            </ModalButton>
            <OrderButton onClick={order} cursor={mouse}>
              Finalizar o pedido
            </OrderButton>
          </>
        </div>
      </motion.div>
    </ModalOverlay>
  );
};
