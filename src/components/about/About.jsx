import data from "../../locales/en.json";
import styles from "./about.module.css";
import button from "../button/button.module.css";

export const About = () => {
  const aboutData = data.pages.about;

  return (
    <section className={styles.about}>
      <div className={styles.about_content}>
        <h2 className={styles.h2}>{data.pages.home.about.title}</h2>
        <div className={styles.about_text}>
          {aboutData.description.map((desc, index) => (
            <p key={index} className={styles.about_description}>
              {desc}
            </p>
          ))}
        </div>
        <a href="/about me" className={button._button_button_primary}>
          {data.pages.home.about.button}
        </a>
      </div>
      <img src="/about-me.png" alt="About Me" className="about_image" />
    </section>
  );
};
