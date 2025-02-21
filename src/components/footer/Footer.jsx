import styles from "./footer.module.css";
import data from "../../locales/en.json";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_info}>
            <div className={styles.footer_header}>
              <div className={styles.logo}>
                <img className={styles.logoImage} src="/logo.svg" alt="logo" />
                <div className={styles.logo_name}></div>
              </div>
              <a
                href="mailto:johannes@gjeset.no"
                className={styles.footer_email}
              >
                {data.contactinfo.mail}
              </a>
            </div>
            <p className={styles.footer_description}>
              Fullstack developer with passion for good solutions
            </p>
          </div>
          <div className={styles.footer_media}>
            <div className={styles.footer_title}></div>
            <div className={styles.footer_list}>
              <a className={styles.media} href={data.contactinfo.github}>
                <img src={data.mediaIcon.github} alt="Github Icon" />
              </a>
              <a className={styles.media} href={data.contactinfo.linkedin}>
                <img src={data.mediaIcon.linkedin} alt="Linkedin Icon" />
              </a>
              <a className={styles.media} href={data.contactinfo.discord}>
                <img src={data.mediaIcon.discord} alt="Discord Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer_copyright}>
          {data.Copyright.copy}
          {currentYear}
          {data.Copyright.made}
        </div>
      </div>
    </footer>
  );
};
