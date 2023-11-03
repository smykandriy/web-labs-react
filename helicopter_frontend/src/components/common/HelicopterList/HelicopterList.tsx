import HelicopterItem, { Helicopter } from "../HelicopterItem/HelicopterItem";
import styles from "./HelicopterList.module.scss";

interface HelicopterItemsList {
  helicopters: Helicopter[];
}

const HelicopterList: React.FC<HelicopterItemsList> = (
  props: HelicopterItemsList
) => {
  const rows: Helicopter[][] = [];
  const itemsPerRow = 4;

  for (let i = 0; i < props.helicopters.length; i += itemsPerRow) {
    rows.push(props.helicopters.slice(i, i + itemsPerRow));
  }

  return (
    <div>
      <h2 className={styles.title}>Helicopter Catalog</h2>
      {rows.map((row, rowIndex) => (
        <ul key={rowIndex}>
          {row.map((helicopter) => (
            <li key={helicopter.id}>
              <HelicopterItem {...helicopter} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default HelicopterList;
