'use client'
import { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/posts/", {
          cache: "force-cache",
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const jsonData = await res.json();
        setData(jsonData.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
