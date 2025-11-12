import React from 'react';
import { userRecipeStore } from './recipeStore';

const SeachBar = () => {
  const setSearchTerm = userRecipeStore((state) => state.setSearchTerm);

  return (
    <input 
      type = "text"
      placeholder ="Search recipes..."
      onChange={(e) => setSeachTerm(e.target.value)}
      />
  );
}'

export default SearchBar;
