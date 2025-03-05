"use client"
import { useEffect, useState } from "react";
import styled from "styled-components";

type Quote = {
  id: number;
  quote: string;
  author: string;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  background-color: #f2f2f2;
  text-align: left;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

const TableContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;

export default function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes?limit=5")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Quote</TableHeader>
            <TableHeader>Author</TableHeader>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <TableRow key={quote.id}>
              <TableCell>{quote.id}</TableCell>
              <TableCell>"{quote.quote}"</TableCell>
              <TableCell>- {quote.author}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
