import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <section>
      <div className={styles.heroContainer}>
        <img src="src\assets\images\hero-helicopter.jpg" alt="" />
        <div className={styles.textField}>
          <h4>HeroTitle</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            nisl lobortis, maximus elit at, rhoncus lectus. Vestibulum risus
            velit, aliquam interdum cursus a, porttitor ac ante. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>
      </div>
    </section>
  );
};
