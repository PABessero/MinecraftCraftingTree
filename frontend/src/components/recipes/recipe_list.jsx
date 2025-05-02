import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import Recipe from "./recipe.jsx";

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        loadRecipeList();
    }, [])

    const recipeList = recipes.map((recipe, i) => {
        return <Recipe key={i} recipe={recipe} />
        // return <p key={i}>{recipe.name}</p>
    })

    function loadRecipeList() {
        fetch("http://localhost:8000/api/recipes/").then(response => response.json().then(response => setRecipes(response)))
    }

    return (
        <>
            <Button variant="contained" onClick={loadRecipeList}>Load Recipe List</Button>
            {recipeList}
        </>
    )
}