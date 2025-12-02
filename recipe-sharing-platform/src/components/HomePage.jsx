import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import link from react-reouter-dom
import recipeData from '../data.json'; // import the mock data

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    //simulate fetching data from an API 
    setRedipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p.4">
    <h1 className="text-3x1  font-bold text-center mb-6">Recipe Sharing  Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map(recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="bg-white rounded-lg shadow-ms hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full h-48 object-cover" />
        <div className="p-4">
        <h2 className="text-x1 font-semibold">{recipe.title}</h2>
          <p className="text-grey-600">{recipe.summary}</p>
        </div>
        </Link>
        ))}
      </div>
      </div>
  );
}

export default HomePage;
