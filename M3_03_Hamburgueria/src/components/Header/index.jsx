import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search-icon.svg";

import { motion } from "framer-motion";

export const Header = ({ setInputSearch, setIsOpen, cartList }) => {
  return (
    <HeaderContainer>
      <div>
        <motion.div className="header__logo">
          <img
            src={logo}
            alt="Logo da burguer kenzie"
            className="header__logo--img"
          />
          <div className="header__counter">
            <img
              src={cart}
              alt="imagem de um carrinho de compras"
              className="header__cart--img"
              onClick={() => {
                setIsOpen(true);
              }}
            />
            <span className="span__counter">{cartList.length}</span>
          </div>
        </motion.div>
        <motion.form className="header__search" animate={{ scale: [0, 1] }}>
          <input
            type="text"
            placeholder="Digitar pesquisa..."
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <img src={search} alt="ícone de pesquisa" />
        </motion.form>
      </div>
    </HeaderContainer>
  );
};
