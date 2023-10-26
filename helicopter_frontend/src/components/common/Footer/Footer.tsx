import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerTextField}>
          <h3>Branding stuff</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <h2 className={styles.title}>Helicopters</h2>
        <nav className={styles.linksNav}>
          <a href="">
            <img src="src\assets\images\facebook.png" alt="Facebook" />
          </a>
          <a href="">
            <img src="src\assets\images\insta.png" alt="Instagram" />
          </a>
          <a href="">
            <img src="src\assets\images\telegram.png" alt="Telegram" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
