import styles from "./quote.module.css";
import data from "/src/locales/en.json";
export const Quote = () => {
  const quoteData = data.pages.home.quote;

  return (
    <figure className={styles.quote}>
      <blockquote className={styles.quote_text}>{quoteData.text}</blockquote>
      <figcaption className={styles.quote_author}>
        {quoteData.author}
      </figcaption>
    </figure>
  );
};
