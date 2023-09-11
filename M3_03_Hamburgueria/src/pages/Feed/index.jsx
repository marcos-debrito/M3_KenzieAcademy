import { Container } from "./styles";
import { StyledDiv } from "../../styles/loader";

import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Itens } from "../../components/MenuItens";

import { Modal } from "../../components/Modal";
import { api } from "../../services/api";
import { Toaster } from "react-hot-toast";

export const Feed = ({ isLoading, setIsLoading }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [cartList, setCartList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const getItens = localStorage.getItem("@burguer");
    if (!getItens) {
      return;
    } else {
      const itens = JSON.parse(getItens);
      setCartList(itens);
    }
  }, []);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await api.get("/products");
        setMenuList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    getList();
  }, []);

  useEffect(() => {
    if (cartList.length > 0) {
      return localStorage.setItem("@burguer", JSON.stringify(cartList));
    }
  }, [cartList]);

  const filteredItens = menuList.filter((item) =>
    item.name.toUpperCase().includes(inputSearch.toUpperCase())
  );

  return (
    <>
      {isLoading ? (
        <StyledDiv className="custom-loader"></StyledDiv>
      ) : (
        <>
          <Header
            setInputSearch={setInputSearch}
            setIsOpen={setIsOpen}
            cartList={cartList}
          />
          <main>
            {isOpen ? (
              <Modal
                setIsOpen={setIsOpen}
                cartList={cartList}
                setCartList={setCartList}
              />
            ) : null}
            <Container>
              {filteredItens.map((item) => (
                <Itens
                  key={item.id}
                  {...item}
                  setCartList={setCartList}
                  cartList={cartList}
                />
              ))}
            </Container>
          </main>
        </>
      )}
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};
