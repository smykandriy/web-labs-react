import { CustomButton } from "../CustomButton";

interface ViewMoreButtonProps {
  className: string;
}

export const ViewMoreButton: React.FC<ViewMoreButtonProps> = (
  props: ViewMoreButtonProps
) => {
  return (
    <CustomButton text="View more" className={props.className}></CustomButton>
  );
};
