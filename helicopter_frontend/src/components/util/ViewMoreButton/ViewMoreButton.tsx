import { MouseEventHandler } from "react";
import { CustomButton } from "../CustomButton";

interface ViewMoreButtonProps {
  className?: string;
  onClick?: MouseEventHandler;
}

export const ViewMoreButton: React.FC<ViewMoreButtonProps> = (
  props: ViewMoreButtonProps
) => {
  return (
    <CustomButton text="View more" className={props.className} onClick={props.onClick ? props.onClick : () => null}></CustomButton>
  );
};
