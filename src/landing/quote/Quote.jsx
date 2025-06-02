import styles from "./quote.module.css";
import { useState, useEffect } from "react";
import { getRandomQuote } from "../../lib/api";
import { useAsyncData } from "../../hooks/useAsyncData";

export const Quote = () => {
  const { data: quotes, loading, error } = useAsyncData(getRandomQuote);
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    if (quotes && quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }
  }, [quotes]);

  if (loading) return <div>Loading quote...</div>;
  if (error) return <div>Failed to load quote</div>;

  return (
    <figure className={styles.quote}>
      <blockquote className={styles.quote_text}>{currentQuote.text}</blockquote>
      <figcaption className={styles.quote_author}>
        {currentQuote.author}
      </figcaption>
    </figure>
  );
};
