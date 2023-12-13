import { useAppSelector } from "../../../redux";
import { selectCartItems } from "../HelicopterDetailsModal/HelicopterDetails.slice";
import styles from "./TotalPrice.module.scss"

export const TotalPrice: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);

  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.item.price * cartItem.count;
  }, 0);

  return (
    <div className={styles.totalPrice}>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default TotalPrice;