// landing/contact/Contact.jsx
import styles from "./contact.module.css";
import { getContactData, getSocialLinks } from "../../lib/api";
import { useAsyncData } from "../../hooks/useAsyncData";
import { PortableText } from "@portabletext/react"; // Add this import if description is rich text

export const Contact = () => {
  const { data: contactData, loading: contactLoading } =
    useAsyncData(getContactData);
  const { data: socialData, loading: socialLoading } =
    useAsyncData(getSocialLinks);

  if (contactLoading || socialLoading) return <div>Loading contact...</div>;

  // Filter social links for contact section
  const contactLinks =
    socialData?.links?.filter((link) => link.showIn?.includes("contact")) || [];

  return (
    <section className={styles.contacts} id="contacts">
      <h2 className={styles.h2}>{contactData?.title}</h2>
      <div className={styles.contacts__content}>
        {/* ✅ Fix: Handle rich text description properly */}
        <div className={styles.contacts__description}>
          {contactData?.description &&
            (Array.isArray(contactData.description) ? (
              <PortableText value={contactData.description} />
            ) : (
              <p>{contactData.description}</p>
            ))}
        </div>

        <div className={styles.contacts__media}>
          <h3 className={styles.contacts__title}>Message me here</h3>
          <div className={styles.contacts__list}>
            {contactLinks.map((link) => (
              <a
                key={link.platform}
                className={styles.contact}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel={
                  link.platform !== "email" ? "noopener noreferrer" : undefined
                }
              >
                <img src={link.icon} alt={`${link.platform} Icon`} />
                <div className={styles.contact__name}>{link.displayName}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
