import styles from "./contact.module.css";
import data from "../../locales/en.json";

export const Contact = () => {
  const contacts = data.pages.home.contacts;

  return (
    <section className={styles.contacts}>
      <h2 className={styles.h2}>{contacts.title}</h2>
      <div className={styles.contacts_content}>
        <p className={styles.contacts_description}>{contacts.text}</p>
        <h3 className={styles.contacts_title}>{contacts.media}</h3>
        <div className={styles.contacts_list}>
          <a
            className={styles.contact}
            href=""
            src="../images/icons/discord.svg"
          >
            <div className={styles.contact_name}></div>
          </a>
          <a href="" className="contact"></a>
        </div>
      </div>
    </section>
  );
};
