export const Contact = () => {
  return (
    <section className={styles.contacts}>
      <h2 className={styles.h2}></h2>
      <p className={styles.contacts_description}></p>
      <div className={styles.contacts_content}>
        <h3 className={styles.contacts_title}></h3>
        <div className={styles.contacts_list}>
          <a
            className={styles.contact}
            href=""
            img
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
