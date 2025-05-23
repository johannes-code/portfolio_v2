import styles from "./quote.module.css";
import { useEffect, useState } from "react";
import { getAllQuotes } from "../../lib/api";

export const Quote = () => {
  const [quoteData, setQuote] = useState({ quote: "", author: "" });
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const quotes = await getAllQuotes();
      setAllQuotes(quotes);
      if (quotes.length > 0) {
        getRandomQuote(quotes);
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  const getRandomQuote = (quotes = allQuotes) => {
    if (quotes.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);

    const selectedQuote = quotes[randomIndex];

    setQuote(selectedQuote);
  };

  return (
    <figure className={styles.quote}>
      <blockquote className={styles.quote_text}>{quoteData.quote}</blockquote>
      <figcaption className={styles.quote_author}>
        {quoteData.author}
      </figcaption>
    </figure>
  );
};
