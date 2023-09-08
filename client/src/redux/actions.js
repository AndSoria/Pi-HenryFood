import axios from 'axios'

export const GET_RECIPES= "GET_RECIPES"
export const GET_RECIPE_ID= "GET_RECIPE_ID"


export const getRecipes= ()=>{
    return async function (dispatch){
        const recipes= await axios.get(`http://localhost:3001/recipes/allRecipes`)

        const  allRecipes= recipes.data

        dispatch({type: GET_RECIPES, payload:allRecipes})
    }
}

export const recipeById=(id)=>{
    return async function (dispatch){
        
        const recipe= await axios.get(`http://localhost:3001/recipes/${id}`)

        const recipeId= recipe.data
        
        dispatch ({type: GET_RECIPE_ID, payload: recipeId})
    }
}