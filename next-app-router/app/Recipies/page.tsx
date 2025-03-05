"use client"
import { useEffect, useState } from "react"

type Recipe = {
  id: number;
  name: string;
  prepTimeMinutes: number;
  servings: number;
};

type RecipeData = {
  recipes: Recipe[];
};

export default function Recipe() {
  const [data, setData] = useState<RecipeData | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=10")
      .then((response) => {
        if (!response.ok) throw new Error("Invalid request!");
        return response.json();
      })
      .then((data: RecipeData) => {
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
      <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: 15, border: "1px solid black" }}>Name</th>
              <th style={{ padding: 15, border: "1px solid black" }}>prepTimeMinutes</th>
              <th style={{ padding: 15, border: "1px solid black" }}>Servings</th>
              <th style={{ padding: 15, border: "1px solid black" }}>ID</th>
            </tr>
          </thead>
          <tbody>
            {data.recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td style={{ padding: 15, border: "1px solid black" }}>{recipe.name}</td>
                <td style={{ padding: 15, border: "1px solid black" }}>{recipe.prepTimeMinutes}</td>
                <td style={{ padding: 15, border: "1px solid black" }}>{recipe.servings}</td>
                <td style={{ padding: 15, border: "1px solid black" }}>{recipe.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
