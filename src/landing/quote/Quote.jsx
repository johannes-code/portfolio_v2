import styles from "./quote.module.css";
import data from "/src/locales/en.json";
import { useState, useEffect } from "react";

export const Quote = () => {
  const [quoteData, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    // Extract the quotes object from the JSON file
    const quotes = Object.values(data.quotes);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <figure className={styles.quote}>
      <blockquote className={styles.quote_text}>{quoteData.text}</blockquote>
      <figcaption className={styles.quote_author}>
        {quoteData.author}
      </figcaption>
    </figure>
  );
};
