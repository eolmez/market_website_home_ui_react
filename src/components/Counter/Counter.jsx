import { useContext } from "react";
import { AppContext } from "../../App";
import Button from "../Button/Button";
import { Count, CounterButton } from "./CounterStyles";

const Counter = ({ id, count }) => {
  const context = useContext(AppContext);
  const { increaseCount, decreaseCount, addToCart } = context;

  

  return (
    <CounterButton>
      <Button plus value="+" onClick={() => {
        if (count === 0) {
          addToCart(id)
        } else {
          increaseCount(id)
        }
      }}>
        +
      </Button>
      <Count>{count}</Count>
      <Button minus value="-" onClick={() => decreaseCount(id)}>
        -
      </Button>
    </CounterButton>
  );
};

export default Counter;
