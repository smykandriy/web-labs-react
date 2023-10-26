import { Hero } from "../../common/Hero/Hero";
import { HeroItemCard } from "../../common/HeroItemCard/HeroItemCard";
import { ViewMoreButton } from "../../util/ViewMoreButton/ViewMoreButton";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className={styles.itemsContainer}>
        <HeroItemCard />
        <HeroItemCard />
        <HeroItemCard />
      </div>
      <div className={styles.buttonContainer}>
        <ViewMoreButton className={styles.homeButton} />
      </div>
    </>
  );
};

export default Home;
