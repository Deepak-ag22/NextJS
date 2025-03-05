"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuotesStart, fetchQuotesSuccess, fetchQuotesFailure } from './quotesSlice';
import { Loader } from '../components/Loader';

export default function Quotes() {
  const dispatch = useDispatch();
  const { quotes, loading, error } = useSelector((state) => state.quotes);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        dispatch(fetchQuotesStart()); 
        const response = await fetch("https://dummyjson.com/quotes?limit=5");
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const data = await response.json();
        dispatch(fetchQuotesSuccess(data.quotes)); 
      } catch (error) {
        dispatch(fetchQuotesFailure(error.message)); 
      }
    };

    fetchQuotes();
  }, [dispatch]);

  if (loading) {
    return <Loader />; 
  }
  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <div className="space-y-4">
      {
        quotes.map((quote) => (
          <div
            key={quote.id}
            className="p-4 border mt-2 mb-2"
          >
            <p className="text-large">{`"${quote.quote}"`}</p>
            <p className="text-md text-gray-500">- {quote.author}</p>
          </div>
        ))
      }
    </div>
  );
}
