import styles from "./skills.module.css";

export const Skills = () => {
  return (
    <section className="skills">
      <h2 className="h2"></h2>
      <div className="skills_content">
        <div className="skills_illustrations illustrations">
          <img
            src="/public/logo-outline.svg"
            alt=""
            className="illustrations_logo"
          />
        </div>
        <div className="skills_list">
          <div className="skill_block">
            <div className="skill_block_name">
              <ul className="skill_block_list">
                <li className="skill_block_skill"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
