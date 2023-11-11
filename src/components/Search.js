import { useState } from "react";
import RecipeResults from "./RecipeResults";
import "./Search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [recipesData, setRecipesData] = useState(null);
  // Crate an environment variable named REACT_APP_API_KEY
  // https://codesandbox.io/docs/learn/environment/secrets
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleClick = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`,
    );
    const responseJSON = await response.json();
    setRecipesData(responseJSON.results);
  };

  return (
    <>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Type ingredients..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {recipesData ? <RecipeResults recipes={recipesData} /> : null}
    </>
  );
};

export default Search;
