import data from "/src/locales/en.json";
import styles from "./hero.module.css";
import button from "../../components/button/button.module.css";
export const Hero = () => {
  const heroData = data.pages.home.hero;

  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1
          className={styles.hero_title}
          dangerouslySetInnerHTML={{ __html: heroData.title }}
        ></h1>
        <div className={styles.hero_description}>{heroData.description}</div>
        <a className={button._button_button_primary} href="#contacts">
          {heroData.button}
        </a>
        <div className={styles.hero_illustrations}>
          <img src="/logo-outline.svg" alt="" className={styles.hero_logo} />
          <img src="/hero.png" alt="Johannes" className={styles.hero_image} />
          <div className={styles.hero_status}>{heroData.status}</div>
        </div>
      </div>
    </section>
  );
};
