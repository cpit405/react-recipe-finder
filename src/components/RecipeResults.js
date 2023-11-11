import { Link } from "react-router-dom";

import "./RecipeResults.css"

const RecipeResults = ({ recipes }) => {
    return (recipes ? (
        <div className="recipe-container">
            {recipes.map((recipe) => (
                <div className="recipe-card" key={recipe.id}>
                    <Link to={`/recipe-details/${recipe.id}`} >
                        <img src={recipe.image} alt={recipe.title} />
                        <h2>{recipe.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    ) : null)

}

export default RecipeResults;