import { StyledDivValue } from "./style.js";

export const NoteNumbers = ({ noteList }) => {
  const initialValue = 0;
  const sumValues = noteList.reduce(
    (acc, currentValue) =>
      currentValue.select == "in"
        ? acc + Number(currentValue.amount)
        : acc - Number(currentValue.amount),
    initialValue
  );

  const toMoney = sumValues.toLocaleString("pt-BT", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      {sumValues !== 0 ? (
        <StyledDivValue>
          <div>
            <span>Valor total:</span>
            <p>{toMoney}</p>
          </div>
          <span className="span__text">O valor se refere ao saldo</span>
        </StyledDivValue>
      ) : null}
    </>
  );
};
