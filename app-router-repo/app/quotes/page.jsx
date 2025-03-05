"use client"
import { useContext, useState, useEffect } from "react";
import { loadingContext } from "../Loader/context";
import { Loader } from "../components/Loader";

export default function Quotes() {
  const { loading, setLoading } = useContext(loadingContext);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const data = await fetch("https://dummyjson.com/quotes?limit=5");
        const quotesData = await data.json();
        setQuotes(quotesData.quotes);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [setLoading]);

  if (loading) {
    return <Loader />;  
  }

  return (
    <div className="space-y-4">
      {quotes.length > 0 ? (
        quotes.map((quote) => (
          <div
            key={quote.id}
            tabIndex={0}
            className="p-4 border rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          >
            <p className="text-xl font-semibold">{`"${quote.quote}"`}</p>
            <p className="text-md text-gray-600">- {quote.author}</p>
          </div>
        ))
      ) : (
        <p>No quotes available.</p>
      )}
    </div>
  );
}
