import styles from "./skills.module.css";
import data from "../../locales/en.json";

export const Skills = () => {
  const skillData = data.skill; // Extracting the skill data

  return (
    <section className={styles.skills}>
      <h2 className={styles.h2}>{data.pages.home.skills.title}</h2>
      <div className={styles.skills_content}>
        <div className={styles.skills_illustrations}>
          <img
            src="/public/logo-outline.svg"
            alt="Skills Illustration"
            className={styles.illustrations_logo}
          />
        </div>
        <div className={styles.skills_list}>
          {Object.entries(skillData).map(([category, skills]) => (
            <div key={category} className={styles.skill_block}>
              <h3 className={styles.skill_block_name}>{category}</h3>

              <ul className={styles.skill_block_list}>
                {skills.map((skill, index) => (
                  <li key={index} className={styles.skill_block_skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
