import { useState } from "react";
import { CustomButton } from "../../util/CustomButton";
import styles from "./HelicopterItem.module.scss";
import { retrieveHelicopter } from "../../services/retrieveHelicopter";
import { HelicopterDetailsModal } from "../HelicopterDetailsModal";

export interface Helicopter {
  id: number;
  model: string;
  weight: number;
  fuel_capacity: number;
  max_altitude: number;
  take_off_weight: number;
  price: number;
}

export const HelicopterItem: React.FC<Helicopter> = (props: Helicopter) => {
  const [showModal, setShowModal] = useState(false);
  const [helicopterDetails, setHelicopterDetails] = useState(null);

  const handleDetailsClick = async () => {
    try {
      const details = await retrieveHelicopter(props.id);
      setHelicopterDetails(details);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <li key={props.id}>
        <div>
          <img src="\src\assets\images\catalog-helicopter.jpg" alt="" />
          <h2>{props.model}</h2>
          <span className={styles.weightContainer}>
            <p>Weight: </p>
            {props.weight}
          </span>
          <span className={styles.maxAltitudeContainer}>
            <p>Max altitude: </p>
            {props.max_altitude}
          </span>
          <hr />
          <span className={styles.priceContainer}>
            <p className={styles.price}>Price: </p>
            <p className={styles.priceNumber}>{props.price}</p>
          </span>
          <CustomButton text="Details" className={styles.detailsButton} onClick={handleDetailsClick} />
        </div>
      </li>
      {showModal && (
        <HelicopterDetailsModal
          helicopter={helicopterDetails}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default HelicopterItem;
