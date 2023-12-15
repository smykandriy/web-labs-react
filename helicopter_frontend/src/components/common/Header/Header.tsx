import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <h3 className={styles.title}>Helicopters</h3>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={styles.link}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog/" className={styles.link}>Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/cart/" className={styles.link}>Cart</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.hidden}></div>
      </div>
    </header>
  );
};

export default Header;
