import PropTypes from "prop-types";
import data from "/src/locales/en.json";

export const TechSkills = ({ tech, ulClassName, liClassName }) => {
  const skillData = data.skill;

  return (
    <ul className={ulClassName}>
      {tech && tech.length > 0 ? (
        tech
          .flatMap((techItem, techIndex) => {
            if (typeof techItem !== "string" || !techItem.includes(".")) {
              console.error("Invalid tech item:", techItem);
              return null;
            }

            const [category, indices] = techItem.split(".");
            if (!skillData[category]) {
              console.error("Invalid category:", category);
              return null;
            }

            const indexArray = indices.split(",");

            return indexArray.map((index, skillIndex) => {
              const skill = skillData[category][index];
              if (!skill) {
                console.error(`Invalid skill at ${category}[${index}]`);
                return null;
              }

              return (
                <li
                  key={`${skill}-${techIndex}-${skillIndex}`}
                  className={liClassName}
                >
                  {skill}
                </li>
              );
            });
          })
          .filter(Boolean)
      ) : (
        <li>No skills listed</li>
      )}
    </ul>
  );
};

TechSkills.propTypes = {
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  ulClassName: PropTypes.string,
  liClassName: PropTypes.string,
};
