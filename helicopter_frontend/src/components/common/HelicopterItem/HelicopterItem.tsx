import styles from "./HelicopterItem.module.scss";

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
  return (
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
      </div>
    </li>
  );
};

export default HelicopterItem;
