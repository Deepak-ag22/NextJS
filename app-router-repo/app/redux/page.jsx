"use client"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuotes } from './actions';

const showQuotes = () => {
  const dispatch = useDispatch();
  const { loading, quotes, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p className='font-bold'>Quotes</p>
      <ul className='m-2'>
        {quotes.map((quote) => (
          <li key={quote.id} className='p-4 bg-slate-300 mb-2'>{quote.quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default showQuotes;
