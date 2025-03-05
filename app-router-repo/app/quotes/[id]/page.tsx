type Quote = {
    id: number;
    quote: string;
    author: string;
  };
  
  export const revalidate = 60;
  
  export const dynamicParams = true;
  
  export async function generateStaticParams() {
    const quotes = await fetch('https://dummyjson.com/quotes').then((res) => res.json());
    return quotes.quotes.map((quote: Quote) => ({
      id: String(quote.id),
    }));
  }
  
  export default async function QuoteShow({ params }: { params: { id: string } }) {
    const { id } = params;
    const quote = await fetch(`https://dummyjson.com/quotes/${id}`).then((res) => res.json());
  
    return (
      <div>
        <div key={quote.id}>
          <p>"{quote.quote}"</p>
          <p>- {quote.author}</p>
        </div>
      </div>
    );
  }
  