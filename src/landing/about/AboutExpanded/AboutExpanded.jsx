import styles from "./aboutExpanded.module.css";
import data from "../../../locales/en.json";
import { SkillsList } from "../../../components/functions/SkillsList";

export const AboutExpanded = () => {
  const skillData = data.skill;
  const { AboutExpanded } = data;
  const { contactinfo } = data;

  return (
    <div className={styles.AboutExpanded_container}>
      <h2 className={styles.h2}>About Me</h2>
      <div>
        <SkillsList skillData={skillData} styles={styles} />
      </div>
      <div className={styles.AboutContainer}>
        <h4>Expertise</h4>
        <p>{AboutExpanded.expertise}</p>
        <h4>Achievements</h4>
        <p>{AboutExpanded.achievments}</p>
        <h4>Background</h4>
        <p>{AboutExpanded.background}</p>
        <h4>Personal Goals</h4>
        <p>{AboutExpanded.personal_Goals}</p>
        <h4>Professional Goals</h4>
        <p>{AboutExpanded.proffesional_Goals}</p>
        <h4>Personal</h4>
        <p>{AboutExpanded.personal}</p>
      </div>
      <div className={styles.contactinfo}>ContactInfo</div>
      <h4>name</h4>
      <p>{contactinfo.name}</p>
      <h4>mail</h4>
      <p>{contactinfo.mail}</p>
      <h4>github</h4>
      <p>{contactinfo.github}</p>
    </div>
  );
};
