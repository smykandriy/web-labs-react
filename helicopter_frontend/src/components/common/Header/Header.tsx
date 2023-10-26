import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <h3 className={styles.title}>Helicopters</h3>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Catalog</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
          </ul>
        </nav>
				<div></div>
      </div>
    </header>
  );
};

export default Header;
