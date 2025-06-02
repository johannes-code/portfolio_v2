// landing/skills/Skills.jsx
import styles from "./skills.module.css";
import { getSkillsGrouped } from "../../lib/api";
import { useAsyncData } from "../../hooks/useAsyncData";

export const Skills = () => {
  const { data: skillsData, loading, error } = useAsyncData(getSkillsGrouped);

  if (loading) return <div>Loading skills...</div>;
  if (error) return <div>Failed to load skills</div>;

  return (
    <section className={styles.skills}>
      <h2 className={styles.h2}>Skills</h2>
      <div className={styles.skills_content}>
        <div className={styles.skills_illustrations}></div>
        <div className={styles.skills_list}>
          {skillsData?.map((category) => (
            <div key={category._id} className={styles.skill_block}>
              <h3 className={styles.skill_block_name}>{category.name}</h3>
              <ul className={styles.skill_block_list}>
                {category.skills?.map((skill, index) => (
                  <li key={index} className={styles.skill_block_skill}>
                    {skill.logo && (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={styles.skill_logo}
                      />
                    )}
                    <span>{skill.name}</span>
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
