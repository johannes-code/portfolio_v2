import data from "/src/locales/en.json";
import styles from "./header.module.css";
import { MediaHeader } from "./MediaHeader";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        {/* <img className={styles.logoImage} src="/logo.svg" alt="logo" /> */}
        <ul className={styles.navItems}>
          {data.header.map((item, index) => (
            <li key={item.name + index}>
              <Link to={`/${item.url}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <MediaHeader />
    </header>
  );
};
