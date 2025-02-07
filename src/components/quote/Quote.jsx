import styles from "./quote.module.css";
import data from "/src/locales/en.json";
export const Qoute = () => {
  const quoteData = data.pages.home.quote;

  return (
    <figure className={styles.quote}>
      ::before
      <blockquote className={styles.quote_text}>{quoteData.text}</blockquote>
      <figcaption className={styles.quote_author}>
        ::before{quoteData.author}
      </figcaption>
      ::after
    </figure>
  );
};
