import { MouseEventHandler } from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
  text?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  return (
    <button
      className={`${styles.customButton} ${props.className ?? ""}`}
      type={props.type || "button"}
      onClick={props.onClick ? props.onClick : () => null}
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
