import data from "/src/locales/en.json";
import styles from "./header.module.css";
import { MediaHeader } from "./MediaHeader";


export const Header = () => {
  console.log(data);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <div className={styles.innerHeader}></div>
            <img className={styles.logoImage} src="/public/logo.svg" alt="logo" />
              <ul className={styles.ul}>
                {data.header.map((item, index) => (
                  <li key={item.name + index}>
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))}
              </ul>
        </div>
      {/* Create minor components if you want */}
      <MediaHeader />
    </header>
  );
};
