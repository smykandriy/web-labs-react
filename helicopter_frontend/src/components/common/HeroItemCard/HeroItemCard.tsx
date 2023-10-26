import styles from "./HeroItemCard.module.scss"

export interface HeroItemCardElement {
  imageSrc?: string;
  title?: string;
  description?: string;
}

export const HeroItemCard: React.FC<HeroItemCardElement> = (props: HeroItemCardElement) => {
  const defaultImageSrc =
    props.imageSrc || "src/assets/images/item-helicopter.jpg";
  const defaultTitle = props.title || "HelicopterItem";
  const defaultDescription =
    props.description ||
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nulla atnisl lobortis, maximus elit at, rhoncus lectus. Vestibulum risusvelit, 
    aliquam interdum cursus a, porttitor ac ante.`;

  return (
    <div className={styles.item}>
      <img src={defaultImageSrc} alt="HelicopterItem" />
      <div className={styles.itemTextField}>
        <h5>{defaultTitle}</h5>
        <p>{defaultDescription}</p>
      </div>
    </div>
  );
};

export default HeroItemCard;
