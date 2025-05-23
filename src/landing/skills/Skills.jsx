import styles from "./skills.module.css";
import { useEffect, useState } from "react";
import { getAllSkills } from "../../lib/api";

export const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const skills = await getAllSkills();

      // Group skills by category
      const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      }, {});

      setSkillsData(groupedSkills);
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading skills...</div>;
  }

  return (
    <section className={styles.skills}>
      <h2 className={styles.h2}>Skills</h2>
      <div className={styles.skills_content}>
        <div className={styles.skills_illustrations}></div>
        <div className={styles.skills_list}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className={styles.skill_block}>
              <h3 className={styles.skill_block_name}>{category}</h3>
              <ul className={styles.skill_block_list}>
                {skills.map((skill) => (
                  <li key={skill._id} className={styles.skill_block_skill}>
                    {skill.logo && (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={styles.skill_logo}
                      />
                    )}
                    {skill.name}
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
