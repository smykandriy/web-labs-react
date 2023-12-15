import React from "react";
import { useDispatch } from "react-redux";
import { Helicopter } from "../HelicopterItem";
import {
  addToCart,
  removeFromCart,
} from "../HelicopterDetailsModal/HelicopterDetails.slice";
import styles from "./CartItem.module.scss";
import { CustomButton } from "../../util/CustomButton";

interface CartItemProps {
  item: { item: Helicopter; count: number };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addToCart(item.item));
  };

  const handleDecrement = () => {
    dispatch(removeFromCart(item.item));
  };

  return (
    <li key={item.item.id} className={styles.cartItem}>
      <img
        src="\src\assets\images\catalog-helicopter.jpg"
        alt=""
        className={styles.cartImage}
      />
      <p>{item.item.model}</p>
      <p>${item.item.price}</p>
      <div className={styles.counterContainer}>
        <CustomButton
          onClick={handleIncrement}
          text="+"
          className={styles.countButton}
        />
        <p>Count: {item.count}</p>
        <CustomButton
          onClick={handleDecrement}
          text="-"
          className={styles.countButton}
        />
      </div>
    </li>
  );
};

export default CartItem;
