import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } - useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(()
    const foundRecipe = recipeData.find((r) => r.id ==== parseInt(id));
   setRecipe(foundRecipe);
}, [id]);

if(!recipe) {
  return <div>Loading...</div>;
}

return (
  <div className="container mx-auto p-4">
   <div className="bg-white rounded-lg shadow-lg p-6">
     <h1 className="text-3x1 font-bold mb-4">{recipe.title}</h1>
     <img src="{recipe.image} alt={recipe.title} className="rounded-lg w-full h-64 object-cover mb-4" />
     <h2 className="text-2x1 font-semibold mb-2">Ingredients</h2>
     <ul className="list-disc list-inside mb-4">
     {recipe.ingredients.map((ingredient, index) => (
         <li key={index} className="text-gray-700">{ingedient}</li>
       ))}
     </ul>
     <h2 className="text-2x1 font-semibold mb-2">Cooking Instructions</h2>
     <p className="text-gray-700">{recipe.instructions}</p>
   </div>
  </div>
);
}

export default RecipeDetail;
