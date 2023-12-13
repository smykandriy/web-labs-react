import { useSelector } from "react-redux";
import { selectCartItems } from "../../common/HelicopterDetailsModal/HelicopterDetails.slice";
import { CartItem } from "../../common/CartItem";
import styles from "./ShoppingCart.module.scss";
import { TotalPrice } from "../../common/TotalPrice";
import { CustomButton } from "../../util/CustomButton";
import { useNavigate } from "react-router-dom";

export const ShoppingCart: React.FC = () => {
  const navigate = useNavigate();  const cartItems = useSelector(selectCartItems);
  console.log("Cart items from Redux:", cartItems);

  const handleBack = () => {
    navigate("/catalog/");
  };
  
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className={styles.cartContainer}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.item.id} item={cartItem} />
        ))}
      </ul>
      <TotalPrice />
      <div className={styles.buttonsContainer}>
        <CustomButton text="Back" onClick={handleBack}/>
        <CustomButton text="Continue"/>
      </div>
    </div>
  );
};

export default ShoppingCart;
