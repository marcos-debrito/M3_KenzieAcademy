import { ListItens, ContainerInfos } from "./styles";

import { toast } from "react-hot-toast";

import { motion } from "framer-motion";

export const Itens = ({
  name,
  category,
  price,
  img,
  setCartList,
  cartList,
  id,
}) => {
  const toMoney = price.toLocaleString("pt-BT", {
    style: "currency",
    currency: "BRL",
  });

  let amount = 1;

  const data = { name, category, price, img, id, amount };

  const toCart = () => {
    if (cartList.some((cartList) => cartList.id === id)) {
      return toast.error("Item já foi adicionado!");
    }
    setCartList((cartList) => [...cartList, data]);
    toast.success("Item adicionado!");
  };

  return (
    <motion.div animate={{ scale: [0, 1] }}>
      <ListItens>
        <figure>
          <img src={img} alt="" />
        </figure>
        <ContainerInfos>
          <h2>{name}</h2>
          <span>{category}</span>
          <p>{toMoney}</p>
          <button onClick={toCart}>Adicionar</button>
        </ContainerInfos>
      </ListItens>
    </motion.div>
  );
};
