import data from "../../locales/en.json";
import styles from "./about.module.css";
import button from "../../components/button/button.module.css";
import { Link } from "react-router-dom";

export const About = () => {
  const aboutData = data.pages.about;

  return (
    <section className={styles.about} id="about-me">
      <div className={styles.about_content}>
        <h2 className={styles.h2}>{data.pages.home.about.title}</h2>
        <div className={styles.about_text}>
          {aboutData.description.map((desc, index) => (
            <p key={index} className={styles.about_description}>
              {desc}
            </p>
          ))}
        </div>
        <Link to="/about_me" className={button._button_button_primary}>
          {data.pages.home.about.button}
        </Link>
      </div>
      {/* <img src="/about-me.png" alt="About Me" className="about_image" /> */}
    </section>
  );
};
