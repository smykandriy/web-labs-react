import React from "react";
import styles from "./Success.module.scss"
import { CustomButton } from "../../util/CustomButton";
import { useNavigate } from "react-router-dom";

export const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBackToCatalog = () => {
    navigate("/catalog/");
  }
  return (
    <div className={styles.success}>
      <h2>Form Submitted Successfully!</h2>
      <CustomButton text="Back to catalog" onClick={handleBackToCatalog} />
    </div>
  );
};

export default SuccessPage;