import React from "react";
import { Helicopter } from "../HelicopterItem";
import { CustomButton } from "../../util/CustomButton";
import styles from "./HelicopterDetailsModal.module.scss";

export const HelicopterDetailsModal: React.FC<{
  helicopter: Helicopter | null;
  onClose: () => void;
}> = ({ helicopter, onClose }) => {
  return (
    helicopter && (
      <div className={styles.modalBackdrop}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{helicopter.model} Details</h2>
            <div className={styles.modalHero}>
              <img
                className={styles.helicopterImage}
                src="\src\assets\images\catalog-helicopter.jpg"
                alt=""
              />
              <div className={styles.helicopterAttributes}>
                <p>Weight: {helicopter.weight}</p>
                <p>Take off weight: {helicopter.take_off_weight}</p>
                <p>Fuel capacity: {helicopter.fuel_capacity}</p>
                <p>Max Altitude: {helicopter.max_altitude}</p>
              </div>
            </div>
            <div className={styles.priceContainer}>
              <p>
                Price: <b>{helicopter.price}</b>
              </p>
              <div className={styles.buttonsContainer}>
                <CustomButton text="Add to cart" onClick={onClose} />
                <CustomButton
                  className={styles.closeButton}
                  text="Close"
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HelicopterDetailsModal;
