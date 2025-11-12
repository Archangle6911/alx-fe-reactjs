import React from "react";
import { useRecipeStore } from "../store/recipeStore";

const RecipeList = () => {
  const { filteredRecipes, recipes } = useRecipeStore((s) => ({
    filteredRecipes: s.filteredRecipes,
    recipes: s.recipes,
  }));

  const list = filteredRecipes ?? [];

  if (!recipes.length) return <p>No recipes loaded yet.</p>;
  if (!list.length) return <p>No recipes match your filters.</p>;

  return (
    <ul>
      {list.map((r) => (
        <li key={r.id}>
          <strong>{r.title}</strong>{" "}
          {Array.isArray(r.ingredients) && r.ingredients.length > 0 && (
            <span>• {r.ingredients.join(", ")}</span>
          )}
          {r.prepTime != null && <span> • {r.prepTime} min</span>}
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
