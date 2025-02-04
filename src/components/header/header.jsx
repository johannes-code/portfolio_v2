import data from "/src/locales/en.json";
import styles from "./header.module.css";
import { MediaHeader } from "./MediaHeader";

export const Header = () => {
  console.log(data);
  return (
    <header className={styles.header}>
      <ul className="flex gap-8 justify-end p-8">
        {data.header.map((item, index) => (
          <li key={item.name + index}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
      {/* Create minor components if you want */}
      <MediaHeader />
    </header>
  );
};
