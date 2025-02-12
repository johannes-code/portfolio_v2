import styles from "./contact.module.css";
import data from "../../locales/en.json";

export const Contact = () => {
  const contacts = data.pages.home.contacts;

  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.h2}>{contacts.title}</h2>
      <div className={styles.contacts__content}>
        <p className={styles.contacts__description}>{contacts.text}</p>

        <div className={styles.contacts__media}>
          <h3 className={styles.contacts__title}>{contacts.media}</h3>
          <div className={styles.contacts__list}>
            {/* Discord Contact */}
            <a
              className={styles.contact}
              href="https://discord.com/users/scrapjo"
            >
              <img src={data.mediaIcon.discord} alt="Discord Icon" />

              <div className={styles.contact__name}>
                {data.contactinfo.discord}
              </div>
            </a>

            {/* Email Contact */}
            <a className={styles.contact} href="mailto:johannes@gjeset.no">
              <img src={data.mediaIcon.email} alt="Email Icon" />
              <div className={styles.contact__name}>
                {data.contactinfo.mail}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
