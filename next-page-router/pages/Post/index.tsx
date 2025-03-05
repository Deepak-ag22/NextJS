"use client"
import "@/styles/globals.css";
import { useEffect, useState } from "react";

type post = {
  id: number;
  title: string;
};

type PostData = {
  posts: post[];
};

export default function Post() {
  const [data, setData] = useState<PostData | null>(null);
  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=3")
      .then((response) => {
        if (!response.ok) throw new Error("Invalid request!");
        return response.json();
      })
      .then((data: PostData) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="border p-4">Id</th>
              <th className="border p-4">Title</th>
            </tr>
          </thead>
          <tbody>
            {data.posts.map((post) => (
              <tr key={post.id}>
                <td className="border p-4">{post.id}</td>
                <td className="border p-4">{post.title}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
