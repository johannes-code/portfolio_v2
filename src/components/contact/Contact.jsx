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
          <a className={styles.contact} href="https://discord.com/users/scrapjo"></a>
            <img src={data.mediaIcon.discord} alt="" />
            <div className={styles.contact_name}>{data.contactinfo.discord}</div>
          
          <a className={styles.contact} href="mailto:johannes@gjeset.no"></a>
            <img src={data.mediaIcon.email} alt="" />
            <div className={styles.contact_name}>{data.contactinfo.mail}</div>
        
        </div>
      </div>
    </section>
  );
};
