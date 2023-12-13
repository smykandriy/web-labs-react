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
              {/* <a href="/">Home</a> */}
              <NavLink to="/" className={styles.link}>Home</NavLink>
              {/* <NavLink to="/" className="header__nav-item"> Home </NavLink> */}
            </li>
            <li>
              {/* <a href="/catalog/">Catalog</a> */}
              <NavLink to="/catalog/" className={styles.link}>Catalog</NavLink>
            </li>
            <li>
              {/* <a href="/cart/">Cart</a> */}
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
