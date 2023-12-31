import axios from 'axios'

export const GET_RECIPES= "GET_RECIPES"
export const GET_RECIPE_ID= "GET_RECIPE_ID"
export const GET_BY_NAME="GET_BY_NAME"
export const FILTER_BY_DIETS="FILTER_BY_DIETS"
export const FILTER_BY_SOURCE="FILTER_BY_SOURCE"
export const SORT_BY_SCORE="SORT_BY_SCORE"
export const SORT_BY_NAME= "SORT_BY_NAME"
export const RESET_FILTERS= "RESET_FILTERS"



export const getRecipes= ()=>{
    return async function (dispatch){
        try {
            
            const recipes= await axios.get(`http://localhost:3001/recipes/allRecipes`)
    
            const  allRecipes= recipes.data
    
            dispatch({type: GET_RECIPES, payload:allRecipes})
        } catch (error) {
             alert (error.message)
        }
    }
}

export const recipeById=(id)=>{
    return async function (dispatch){
        try {

            const recipe= await axios.get(`http://localhost:3001/recipes/${id}`)

            const recipeId= recipe.data
        
            dispatch ({type: GET_RECIPE_ID, payload: recipeId})
            
        } catch (error) {
            alert (error.message)
        }
        
        
    }
}

export const recipeFilterName=(name)=>{
    return async function (dispatch){
        try {
            const recipe= await axios.get(`http://localhost:3001/recipes?name=${name}`)

            const recipeName=recipe.data

            dispatch({type: GET_BY_NAME, payload: recipeName})
        } catch (error) {
            alert (error.message)
        }
    }
}

export const filterDiets=(diet)=>{

    return function(dispatch){

        dispatch({type:FILTER_BY_DIETS , payload: diet})
    }

}

export const filterSource =(created)=>{

    return function(dispatch){
        dispatch({type: FILTER_BY_SOURCE, payload: created})
    }

}


export const sortScore= (order)=>{ //mayor a menor , menor a mayor
    return function(dispatch){

        dispatch({type:SORT_BY_SCORE, payload:order})
    }
}

export const sortName=(order)=>{ //ascendente descendente
    return function(dispatch){
        
        dispatch({type:SORT_BY_NAME, payload: order})
    }
}

export const resetFilters=()=>{
    return function (dispatch){

        dispatch({type:RESET_FILTERS})
    }
}

