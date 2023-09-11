import { LiCart, EmptyDiv } from "./style";
import trash from "../../../assets/trash.svg";

export const ListItens = ({ cartList, setCartList }) => {
  const removeProduct = (itemId) => {
    setCartList((cartList) => cartList.filter((item) => item.id !== itemId));
  };

  const toMoneyFunction = (price) => {
    const toMoney = price.toLocaleString("pt-BT", {
      style: "currency",
      currency: "BRL",
    });

    return toMoney;
  };

  return (
    <>
      {cartList.length > 0 ? (
        <>
          {cartList.map((item) => {
            return (
              <LiCart key={item.id}>
                <div>
                  <figure>
                    <img src={item.img} alt={"imagem de " + item.name} />
                  </figure>
                  <div className="amountContainer">
                    <span>{item.name}</span>
                    <p className="price">{toMoneyFunction(item.price)}</p>
                  </div>
                </div>
                <figure>
                  <img
                    src={trash}
                    alt="imagem de uma lixeira, para excluir o item da lista."
                    className="trash"
                    onClick={() => {
                      removeProduct(item.id);
                    }}
                  />
                </figure>
              </LiCart>
            );
          })}
        </>
      ) : (
        <EmptyDiv>Adicione algum item!</EmptyDiv>
      )}
    </>
  );
};
