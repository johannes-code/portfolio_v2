import data from "/src/locales/en.json";
import styles from "./header.module.css";
import { MediaHeader } from "./MediaHeader";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.innerHeader}>
          <img className={styles.logoImage} src="/logo.svg" alt="logo" />
          <ul className={styles.navItems}>
            {data.header.map((item, index) => (
              <li key={item.name + index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <MediaHeader />
    </header>
  );
};
