import styles from "./header.module.css";

export const MediaHeader = () => {
  const isTrue = true;
  //   const language = "no";
  return (
    <>
      <div className="media_header absolute left-8 top-0">
        <div className="media_line h-50 w-[1px] bg-white" />
        {/* img * 3 for the icons: */}
        <img
          className={styles.media_icon}
          src="/src/images/icons/discord.svg"
          alt=""
        />
        <img
          className={isTrue ? styles.media_icon : styles.media_icon_false}
          src="/src/images/icons/discord.svg"
          alt=""
        />
        <img className="media_icon" src="" alt="" />
        {/* <p>{language === "en" ? "English text" : "Norsk tekst"}</p> */}
      </div>
    </>
  );
};
